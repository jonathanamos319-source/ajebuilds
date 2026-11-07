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

    // Resend Email Integration (Configured in Vercel Environment Variables)
    const resendApiKey = process.env.RESEND_API_KEY;
    // On free tier with onboarding@resend.dev, Resend requires sending to the registered account email (jonathanamos319@gmail.com)
    const recipientEmail = process.env.NOTIFICATION_EMAIL || 'jonathanamos319@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'AJÉBUILDS Inquiries <onboarding@resend.dev>';

    let emailDelivered = false;
    let emailError: string | null = null;

    if (resendApiKey) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [recipientEmail],
            reply_to: payload.email,
            subject: `⚡ New Project Inquiry: ${payload.name} (${payload.service})`,
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #1E2E18; background-color: #0A0F08; color: #FFFFFF; border-radius: 16px;">
                <div style="border-bottom: 2px solid #86F00A; padding-bottom: 16px; margin-bottom: 20px;">
                  <h1 style="color: #FFFFFF; font-size: 22px; margin: 0; font-weight: 700; letter-spacing: -0.5px;">AJ<span style="color:#86F00A">É</span>BUILDS<span style="color:#86F00A">.</span></h1>
                  <p style="color: #86F00A; font-size: 13px; margin: 4px 0 0 0; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">⚡ New Client Inquiry</p>
                </div>
                
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                  <tr>
                    <td style="padding: 8px 0; color: #8A9E85; font-size: 13px; width: 140px;">Client Name:</td>
                    <td style="padding: 8px 0; color: #FFFFFF; font-size: 15px; font-weight: 600;">${payload.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #8A9E85; font-size: 13px;">Email Address:</td>
                    <td style="padding: 8px 0; font-size: 15px;"><a href="mailto:${payload.email}" style="color: #86F00A; text-decoration: none; font-weight: 500;">${payload.email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #8A9E85; font-size: 13px;">Phone / WhatsApp:</td>
                    <td style="padding: 8px 0; color: #FFFFFF; font-size: 15px;">${payload.phone}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #8A9E85; font-size: 13px;">Service Requested:</td>
                    <td style="padding: 8px 0; color: #86F00A; font-size: 15px; font-weight: 600;">${payload.service}</td>
                  </tr>
                </table>

                <div style="background-color: #121A10; border: 1px solid #1E2E18; border-radius: 12px; padding: 18px; margin-bottom: 24px;">
                  <span style="display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #8A9E85; margin-bottom: 8px; font-weight: 600;">Project Details & Goals</span>
                  <p style="color: #E2ECE0; font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${payload.message}</p>
                </div>

                <div style="border-top: 1px solid #1E2E18; padding-top: 16px; font-size: 12px; color: #5F745A; display: flex; justify-content: space-between;">
                  <span>Submitted via ajebuilds.site</span>
                  <span>${payload.submittedAt}</span>
                </div>
              </div>
            `,
          }),
        });

        if (resendRes.ok) {
          emailDelivered = true;
          const resData = await resendRes.json();
          console.log('[Resend Delivered]:', resData);
        } else {
          emailError = await resendRes.text();
          console.error('[Resend Error]:', emailError);
        }
      } catch (err: any) {
        emailError = err?.message || 'Network error reaching Resend';
        console.error('[Resend Dispatch Failed]:', err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        emailDelivered,
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
