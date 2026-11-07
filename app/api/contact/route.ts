import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json().catch(() => null);
    if (!data) {
      return NextResponse.json(
        { error: 'Invalid JSON request payload' },
        { status: 400 }
      );
    }

    const { name, email, phone, service, message } = data;

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { error: 'Your name is required' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'A valid email address is required' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Project details / message is required' },
        { status: 400 }
      );
    }

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : 'Not provided',
      service: service || 'Web Design & UI/UX',
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    };

    console.log('[Contact Form Submission Received]:', payload);

    // 1. Resend Email Integration (if RESEND_API_KEY is configured in Vercel)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: 'AJÉBUILDS Inquiries <onboarding@resend.dev>',
            to: ['amosjonathan310@gmail.com'],
            reply_to: payload.email,
            subject: `⚡ New Project Inquiry: ${payload.name} (${payload.service})`,
            html: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 12px;">
                <h2 style="color: #0A0F08; border-bottom: 2px solid #86F00A; padding-bottom: 8px;">New Project Inquiry — AJÉBUILDS.</h2>
                <p><strong>Client Name:</strong> ${payload.name}</p>
                <p><strong>Email:</strong> <a href="mailto:${payload.email}">${payload.email}</a></p>
                <p><strong>Phone / WhatsApp:</strong> ${payload.phone}</p>
                <p><strong>Service Requested:</strong> ${payload.service}</p>
                <div style="margin-top: 16px; padding: 16px; background-color: #f7f7f7; border-radius: 8px;">
                  <strong style="display: block; margin-bottom: 6px;">Project Details & Goals:</strong>
                  <p style="white-space: pre-wrap; margin: 0;">${payload.message}</p>
                </div>
                <p style="font-size: 12px; color: #888; margin-top: 20px;">Submitted via ajebuilds.site at ${payload.submittedAt}</p>
              </div>
            `,
          }),
        });

        if (!resendRes.ok) {
          const resendErr = await resendRes.text();
          console.error('[Resend Error]:', resendErr);
        }
      } catch (err) {
        console.error('[Resend Dispatch Failed]:', err);
      }
    }

    // 2. Formspree Integration (if FORMSPREE_FORM_ID is configured in Vercel)
    const formspreeId = process.env.FORMSPREE_FORM_ID || process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (formspreeId) {
      try {
        await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        console.error('[Formspree Dispatch Failed]:', err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been received. Amos Jonathan will be in touch shortly!',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('[Contact Form Error]:', error);
    return NextResponse.json(
      { error: error?.message || 'Internal server error processing inquiry' },
      { status: 500 }
    );
  }
}
