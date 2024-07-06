import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(req = NextRequest()) {
  const { username, email, password } = await req.json();

  if (!username || !email || !password) {
    return NextResponse.json(
      { error: "Nome de usuário, email e senha são obrigatórios" },
      { status: 400 }
    );
  }

  try {
    const { rows: checkUser } =
      await sql`SELECT * FROM users WHERE email = ${email}`;

    if (checkUser.length > 0) {
      return NextResponse.json(
        { error: "Usuário já cadastrado, entre na sua conta!" },
        { status: 400 }
      );
    }

    try {
      const { rows: newUser } = await sql`
        INSERT INTO users (username, email, password)
        VALUES (${username}, ${email}, ${password})
        RETURNING *
      `;

      const user = newUser[0];

      return NextResponse.json(
        {
          success: `Conta criada com sucesso com o username: ${user.username}`,
        },
        {
          status: 201,
        }
      );
    } catch (err) {
      return NextResponse.json(
        {
          error: `Não foi possível adicionar o usuário ao banco de dados: ${err}`,
        },
        { status: 500 }
      );
    }
  } catch (err) {
    return NextResponse.json(
      {
        error: `Não foi possível cadastrar um novo usuário: ${err}`,
      },
      { status: 500 }
    );
  }
}
