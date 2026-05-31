import { z } from "zod";

/** ========== USERS ========== */

export const insertUserSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;

export interface User extends InsertUser {
  id: string; // Firestore uses string IDs
}

/** ========== CONTACT SUBMISSIONS ========== */

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters"),
  privacy: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the privacy policy" }),
  }),
});

export type InsertContactSubmission = z.infer<typeof contactFormSchema>;

export interface ContactSubmission extends InsertContactSubmission {
  id: string; // Firestore document ID
  createdAt: FirebaseFirestore.Timestamp;
}
