import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, budget, timeline, message } = body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter (configure with your email service)
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to company
    const companyEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #14B8A6 0%, #3B82F6 100%); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Project Inquiry</h1>
        </div>
        
        <div style="padding: 20px; background: #f8f9fa;">
          <h2 style="color: #1f2937;">Contact Information</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          
          <h2 style="color: #1f2937;">Project Details</h2>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
          <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
          
          <h2 style="color: #1f2937;">Message</h2>
          <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #14B8A6;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              This inquiry was submitted through the CodeCraft Solutions website contact form.
            </p>
          </div>
        </div>
      </div>
    `;

    // Email to client
    const clientEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #14B8A6 0%, #3B82F6 100%); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Thank You for Your Inquiry!</h1>
        </div>
        
        <div style="padding: 20px;">
          <p>Hi ${name},</p>
          
          <p>Thank you for reaching out to CodeCraft Solutions! We've received your project inquiry and are excited to learn more about your needs.</p>
          
          <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">What happens next?</h3>
            <ul style="color: #4b5563;">
              <li>We'll review your project details within 24 hours</li>
              <li>One of our senior developers will reach out to discuss your requirements</li>
              <li>We'll provide a detailed proposal with timeline and pricing</li>
            </ul>
          </div>
          
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Check out our <a href="https://codecraft-solutions.com/projects" style="color: #14B8A6;">recent projects</a></li>
            <li>Read about our <a href="https://codecraft-solutions.com/services" style="color: #14B8A6;">services</a></li>
            <li>Connect with us on <a href="https://linkedin.com/company/codecraft-solutions" style="color: #14B8A6;">LinkedIn</a></li>
          </ul>
          
          <p>Best regards,<br>
          <strong>Subhrajit Mukherjee & Saurav Roy</strong><br>
          Founders, CodeCraft Solutions</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #6b7280; font-size: 14px;">
              CodeCraft Solutions | Asansol, West Bengal, India<br>
              Email: hello@codecraft-solutions.com | Phone: +91 98765 43210
            </p>
          </div>
        </div>
      </div>
    `;

    // Send email to company
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@codecraft-solutions.com',
      to: 'hello@codecraft-solutions.com',
      subject: `New Project Inquiry - ${service}`,
      html: companyEmailHtml,
    });

    // Send confirmation email to client
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@codecraft-solutions.com',
      to: email,
      subject: 'Thank you for your inquiry - CodeCraft Solutions',
      html: clientEmailHtml,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}