import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters"),
  email: z.string()
    .email("Please enter a valid email address"),
  service: z.string()
    .min(1, "Please select a service"),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters"),
  privacy: z.boolean()
    .refine(value => value === true, {
      message: "You must agree to the privacy policy",
    }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
