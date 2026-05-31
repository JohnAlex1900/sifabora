import { db } from "./index";
import * as schema from "@shared/schema";

async function seed() {
  try {
    console.log("Starting database seeding...");

    // Check if contact_submissions table is empty
    const existingSubmissions = await db.query.contactSubmissions.findMany({
      limit: 1,
    });

    // Only seed if no submissions exist
    if (existingSubmissions.length === 0) {
      console.log("Seeding contact submissions...");

      // Sample contact form submissions
      const sampleSubmissions = [
        {
          name: "John Smith",
          email: "john.smith@example.com",
          service: "defamation-removal",
          message:
            "I recently found some false information about my business online. I'd like to discuss how you can help me remove it.",
          privacy: true,
          createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
        },
        {
          name: "Emily Johnson",
          email: "emily.johnson@example.com",
          service: "private-image-removal",
          message:
            "I need urgent help with removing some private images that were shared without my consent. Please contact me as soon as possible.",
          privacy: true,
          createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
        },
        {
          name: "Michael Williams",
          email: "michael.williams@example.com",
          service: "digital-protection",
          message:
            "I'm interested in your digital protection services for my company. We've had issues with false reviews in the past and want to be proactive.",
          privacy: true,
          createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
        },
        {
          name: "Sarah Davis",
          email: "sarah.davis@example.com",
          service: "content-suppression",
          message:
            "There's some negative content about me that can't be removed. I want to learn more about your suppression services.",
          privacy: true,
          createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
        },
      ];

      // Insert sample submissions
      await db.insert(schema.contactSubmissions).values(sampleSubmissions);

      console.log("Successfully seeded contact submissions.");
    } else {
      console.log("Contact submissions table already has data. Skipping seed.");
    }

    console.log("Database seeding completed successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seed();
