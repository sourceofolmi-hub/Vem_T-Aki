import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { nome, telefone, morada, observacoes, items, total } = body;

  const mensagem = `
Nova encomenda Vem T'Aki

Nome: ${nome}
Telefone: ${telefone}
Morada: ${morada}

Produtos:
${items.map((i: any) => `- ${i.nome} x${i.quantidade}`).join("\n")}

Total: ${total}

Observações:
${observacoes || "-"}
`;

  // ⚠️ AQUI VAMOS USAR RESEND
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Vem T'Aki <onboarding@resend.dev>",
      to: ["sourceofolmi@gmail.com"], // 🔥 METE O TEU EMAIL AQUI
      subject: "Nova encomenda",
      text: mensagem,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Erro ao enviar" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
