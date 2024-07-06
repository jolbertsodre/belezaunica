import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(req = NextRequest()) {
  const { email, password } = await req.json();

  try {
    const { rows: getUser } =
      await sql`SELECT password FROM users WHERE email = ${email}`;

    if (getUser.length === 0) {
      return NextResponse.json(
        { error: "Credenciais incorretas!" },
        { status: 400 }
      );
    }

    if (getUser.length > 1) {
      return NextResponse.json(
        { error: "Usuário duplicado!" },
        { status: 500 }
      );
    }

    const { password: passwd } = getUser[0];

    if (password !== passwd) {
      return NextResponse.json(
        { error: "Credencias inválidas!" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        success: "Usuário existe e é elegível!",
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      { error: `Erro ao verificar banco de dados: ${err}` },
      { status: 500 }
    );
  }
}
