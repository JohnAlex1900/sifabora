import { db } from "./firebase.js"; // backend admin SDK Firestore instance
import { InsertContactSubmission, ContactSubmission } from "@shared/schema.js";
import { Timestamp } from "firebase-admin/firestore";

// Reference to the contact_submissions collection
const submissionsRef = db.collection("contact_submissions");

export const storage = {
  // Insert a new contact submission
  async insertContactSubmission(
    data: InsertContactSubmission
  ): Promise<ContactSubmission> {
    const newSubmission = {
      ...data,
      createdAt: Timestamp.now(),
    };

    const docRef = await submissionsRef.add(newSubmission);

    return {
      id: docRef.id,
      ...newSubmission,
    } as ContactSubmission;
  },

  // Get submission by ID
  async getContactSubmissionById(
    id: string
  ): Promise<ContactSubmission | null> {
    const docSnap = await submissionsRef.doc(id).get();
    if (!docSnap.exists) return null;

    return {
      id: docSnap.id,
      ...docSnap.data(),
    } as ContactSubmission;
  },

  // Get all submissions sorted by createdAt descending
  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    const snapshot = await submissionsRef.orderBy("createdAt", "desc").get();
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as ContactSubmission[];
  },
};
