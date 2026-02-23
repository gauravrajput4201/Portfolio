
import { NextResponse } from 'next/server';
import resend from '@/lib/resend';
import { z } from 'zod';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Zod schema for validation
    const contactSchema = z.object({
      name: z.string().min(1, 'Name is required'),
      email: z.string().email('Invalid email'),
      subject: z.string().min(1, 'Subject is required'),
      message: z.string().min(1, 'Message is required'),
    });

    const parseResult = contactSchema.safeParse(data);
    if (!parseResult.success) {
      return NextResponse.json({ success: false, error: parseResult.error.flatten().fieldErrors }, { status: 400 });
    }
  const { name, email, subject, message } = parseResult.data;

    // Send email using Resend
    try {
      const html = `
        <div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 24px; border-radius: 8px; color: #222;">
          <h2 style="color: #06b6d4;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #fff; border-radius: 6px; padding: 16px; border: 1px solid #eee; margin-top: 8px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `;
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to: process.env.RESEND_TO_EMAIL||'singhkumargaurav420@gmail.com',
        subject: `Contact: ${subject} (from ${name})`,
        replyTo: email,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
        html,
      });
      return NextResponse.json({ success: true, message: 'Message sent successfully.' });
    } catch (err) {
      return NextResponse.json({ success: false, error: 'Failed to send email.' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid request.' }, { status: 400 });
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}
