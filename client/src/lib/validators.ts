import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message should be at least 10 characters"),
  privacy: z.boolean().refine(val => val === true, {
    message: "You must agree to the privacy policy"
  })
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
