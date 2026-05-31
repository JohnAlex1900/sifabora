// server/mailer.ts
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // or 'your_domain_smtp'
  auth: {
    user: process.env.CONTACT_EMAIL,
    pass: process.env.CONTACT_EMAIL_PASSWORD,
  },
});

export const sendContactEmail = async (data: {
  name: string;
  email: string;
  service: string;
  message: string;
}) => {
  const mailOptions = {
    from: data.email,
    to: process.env.CONTACT_RECEIVER_EMAIL, // e.g. support@yourdomain.com
    subject: `New Contact Form Submission - ${data.service}`,
    text: `
Name: ${data.name}
Email: ${data.email}
Service: ${data.service}
Message: ${data.message}
    `,
  };

  return transporter.sendMail(mailOptions);
};
