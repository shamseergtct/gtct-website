import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const form = await req.formData();

    const name = form.get("name") || "";
    const phone = form.get("phone") || "";
    const message = form.get("message") || "";
    const file = form.get("file");

    let attachments = [];

    if (file && typeof file === "object") {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_EMAIL,
      to: process.env.CONTACT_EMAIL,
      subject: "New Lead Received",
      html: `
        <h2>New Lead Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${phone}</p>
        <p><strong>Business Info:</strong> ${message}</p>
      `,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email Sending Error:", error);
    return NextResponse.json(
      { error: "Email sending failed" }, 
      { status: 500 }
    );
  }
}
