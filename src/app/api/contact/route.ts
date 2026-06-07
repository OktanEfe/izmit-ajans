import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Required .env.local variables:
// RESEND_API_KEY=re_xxxxxxxxxxxx          (from resend.com dashboard)
// CONTACT_FROM_EMAIL=onboarding@resend.dev  (or your verified domain sender)
// CONTACT_TO_EMAIL=your@email.com           (where you receive submissions)

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Ad, e-posta ve mesaj zorunludur." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Mail servisi yapılandırılmamış." }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `İzmit Sosyal Medya İletişim <${process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev"}>`,
      to: process.env.CONTACT_TO_EMAIL ?? "oktanefecakar@gmail.com",
      replyTo: email,
      subject: `Yeni İletişim Formu: ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#050505;color:#fff;padding:40px;border-radius:16px;border:1px solid #222">
          <h2 style="color:#FF5A00;margin-top:0;font-size:24px">Yeni Form Mesajı</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:12px 0;border-bottom:1px solid #222;color:#999;width:120px">Ad Soyad</td><td style="padding:12px 0;border-bottom:1px solid #222">${name}</td></tr>
            <tr><td style="padding:12px 0;border-bottom:1px solid #222;color:#999">E-posta</td><td style="padding:12px 0;border-bottom:1px solid #222"><a href="mailto:${email}" style="color:#FF5A00">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding:12px 0;border-bottom:1px solid #222;color:#999">Telefon</td><td style="padding:12px 0;border-bottom:1px solid #222">${phone}</td></tr>` : ""}
            ${service ? `<tr><td style="padding:12px 0;border-bottom:1px solid #222;color:#999">Hizmet</td><td style="padding:12px 0;border-bottom:1px solid #222">${service}</td></tr>` : ""}
          </table>
          <div style="margin-top:24px">
            <p style="color:#999;margin-bottom:8px">Mesaj</p>
            <p style="background:#111;padding:20px;border-radius:8px;line-height:1.6;white-space:pre-wrap">${message}</p>
          </div>
          <p style="color:#444;font-size:12px;margin-top:32px">Bu e-posta izmitsosyalmedya.com iletişim formundan gönderilmiştir.</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: "Mail gönderilemedi." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Sunucu hatası." }, { status: 500 });
  }
}
