import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, service, message } = data;

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'A valid email is required' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // In production, log contact submission and forward to notification webhook or email
    console.log('[Contact Form Submission]:', {
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : 'N/A',
      service: service || 'Not specified',
      message: message.trim(),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been received. Amos Jonathan will be in touch shortly!',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Contact Form Error]:', error);
    return NextResponse.json(
      { error: 'Internal server error processing inquiry' },
      { status: 500 }
    );
  }
}
