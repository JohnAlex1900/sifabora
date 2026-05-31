import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { contactFormSchema } from "@shared/schema.js";
import { db } from "./firebase.js"; // <- Firestore DB
import { sendContactEmail } from "./mailer"; // <- Email sending
import axios from "axios";
import moment from "moment";
import base64 from "base-64";
import { Timestamp } from "firebase-admin/firestore";

export async function registerRoutes(app: Express) {
  const apiPrefix = "/api";

  // Contact Form Route
  app.post(`${apiPrefix}/contact`, async (req, res) => {
    try {
      // 1. Validate form data
      const validatedData = contactFormSchema.parse(req.body);

      // 2. Store to Firestore
      const docRef = await db.collection("contactSubmissions").add({
        ...validatedData,
        createdAt: Timestamp.now(),
      });

      // 3. Send email to company
      //await sendContactEmail(validatedData);

      // 4. Return success response
      return res.status(201).json({
        success: true,
        message: "Contact form submitted successfully.",
        data: { id: docRef.id },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: error.errors,
        });
      }

      console.error("Error handling contact form:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  });

  // Get all submissions (Admin route)
  app.get(`${apiPrefix}/contact-submissions`, async (req, res) => {
    try {
      const snapshot = await db.collection("contactSubmissions").get();
      const submissions = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return res.status(200).json({ success: true, data: submissions });
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  });

  function normalizePhoneNumber(phone: string): string {
    // Remove whitespace and any '+' sign
    phone = phone.trim().replace(/^\+/, "");

    if (/^0\d{9}$/.test(phone)) {
      // e.g., 0712345678 → 254712345678
      return "254" + phone.slice(1);
    }

    if (/^254\d{9}$/.test(phone)) {
      // Already correct
      return phone;
    }

    if (/^7\d{8}$/.test(phone)) {
      // e.g., 712345678 → 254712345678
      return "254" + phone;
    }

    throw new Error("Invalid phone number format");
  }

  // Paystack M-Pesa Route
  app.post(
    `${apiPrefix}/paystack-mpesa`,
    async (req: Request, res: Response) => {
      console.log("Incoming phone and amount:", req.body);

      const { phone, amount } = req.body;

      if (!phone || !amount) {
        return res.status(400).json({
          success: false,
          message: "Phone number and amount are required",
        });
      }

      let normalizedPhone: string;

      try {
        normalizedPhone = normalizePhoneNumber(phone);
      } catch (error) {
        return res.status(400).json({
          success: false,
          message: "Invalid phone number format",
        });
      }

      try {
        const response = await axios.post(
          "https://api.paystack.co/charge",
          {
            amount: Math.round(parseFloat(amount) * 100), // Convert to kobo
            email: `${normalizedPhone}@mpesa.com`, // Dummy email required by Paystack
            currency: "KES",
            mobile_money: {
              phone: normalizedPhone,
              provider: "mpesa",
            },
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );

        const data = response.data;

        return res.status(200).json({
          success: true,
          message: "Payment initiated successfully",
          data,
        });
      } catch (error: any) {
        console.error(
          "M-Pesa payment error:",
          error?.response?.data || error.message
        );

        return res.status(500).json({
          success: false,
          message:
            error?.response?.data?.message ||
            "Failed to initiate M-Pesa payment. Please try again.",
        });
      }
    }
  );
}
