import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { token, ...formData } = body;

    // 1. Verificar el token de Turnstile
    const verify = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        // Usamos variables de entorno tanto locales como de Vercel/Node
        body: `secret=${process.env.TURNSTILE_SERVER_KEY}&response=${token}`,
      }
    );

    const turnstileData = await verify.json();

    if (!turnstileData.success) {
      return NextResponse.json(
        { error: "Bot detectado en la validación de seguridad." },
        { status: 400 }
      );
    }

    // 2. Si el token es válido, enviamos la información a Web3Forms
    // Recuperamos el access_key que estaba en el frontend originalmente
    const web3FormsPayload = {
      ...formData,
      access_key: "8d2b4640-7f29-420a-a3fe-ecedd4169927",
    };

    const w3fResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(web3FormsPayload),
    });

    const w3fData = await w3fResponse.json();

    if (w3fData.success) {
      return NextResponse.json({ ok: true });
    } else {
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje a Web3Forms." },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Ocurrió un error interno en el servidor." },
      { status: 500 }
    );
  }
}
