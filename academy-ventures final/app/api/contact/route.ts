import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, organization, email, phone, inquiryType, message } = body;

    if (!name || !organization || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields. Please fill in all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact us directly." },
        { status: 500 }
      );
    }

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #020810; color: #e8eaed; padding: 32px; border: 1px solid #132d52;">
        <div style="border-bottom: 1px solid #132d52; padding-bottom: 16px; margin-bottom: 24px;">
          <h1 style="color: #c9a84c; font-size: 20px; margin: 0 0 4px;">New Contact Form Submission</h1>
          <p style="color: #667788; font-size: 12px; margin: 0; text-transform: uppercase; letter-spacing: 0.2em;">Academy Ventures — ${new Date().toLocaleDateString("en-US", { dateStyle: "long" })}</p>
        </div>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #0d1f3a; color: #667788; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; width: 140px;">Full Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #0d1f3a; color: #e8eaed; font-size: 14px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #0d1f3a; color: #667788; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em;">Organization</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #0d1f3a; color: #e8eaed; font-size: 14px;">${organization}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #0d1f3a; color: #667788; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #0d1f3a; color: #c9a84c; font-size: 14px;"><a href="mailto:${email}" style="color: #c9a84c;">${email}</a></td>
          </tr>
          ${phone ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #0d1f3a; color: #667788; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #0d1f3a; color: #e8eaed; font-size: 14px;">${phone}</td></tr>` : ""}
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #0d1f3a; color: #667788; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em;">Inquiry Type</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #0d1f3a; color: #e8eaed; font-size: 14px;">${inquiryType || "Not specified"}</td>
          </tr>
        </table>
        <div style="margin-top: 24px; padding: 20px; background: #060f1e; border-left: 3px solid #c9a84c;">
          <p style="color: #667788; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; margin: 0 0 10px;">Message</p>
          <p style="color: #b0b8c2; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
        </div>
        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #132d52; text-align: center;">
          <p style="color: #667788; font-size: 11px; margin: 0;">Academy Ventures · Automated Contact Notification</p>
        </div>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Academy Ventures Contact <contact@academyventures.com>",
        to: ["partnerships@academyventures.com"],
        reply_to: email,
        subject: `[Academy Ventures] ${inquiryType || "General Inquiry"} — ${organization}`,
        html: htmlBody,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      console.error("Resend API error:", errorData);
      throw new Error("Email delivery failed");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
