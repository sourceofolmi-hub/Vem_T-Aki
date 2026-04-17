import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { product, quantity, customerName, address } = await req.json();

    console.log("SMTP_HOST:", process.env.SMTP_HOST);
    console.log("SMTP_PORT:", process.env.SMTP_PORT);
    console.log("SMTP_USER:", process.env.SMTP_USER);
    console.log("ORDER_TO_EMAIL:", process.env.ORDER_TO_EMAIL);
    console.log("SMTP_PASS exists:", !!process.env.SMTP_PASS);

    if (!product || !quantity || !customerName || !address) {
      return NextResponse.json(
        { error: "Dados incompletos." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"Vem TAki" <${process.env.SMTP_USER}>`,
      to: process.env.ORDER_TO_EMAIL,
      subject: `Nova encomenda - ${product}`,
      text: `Produto: ${product}
Quantidade: ${quantity}
Nome: ${customerName}
Morada: ${address}`,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("ERRO REAL SMTP:", error);
    return NextResponse.json(
      { error: error?.message || "Erro ao enviar email." },
      { status: 500 }
    );
  }
}
