import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.CONTACT_EMAIL,
        pass: process.env.CONTACT_EMAIL_PASSWORD
      }
    });

    await transporter.sendMail({
      from: process.env.CONTACT_EMAIL,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Submission`,
      text: `Name: ${name}\nPhone: ${phone}\nMessage:\n${message}`
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
    });

  } catch (error) {
    console.error("Email send error:", error);

    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
