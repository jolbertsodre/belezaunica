import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import TokenVerifier from "@/utils/verify-token/tokenVerifier";
import moment from "moment-timezone";

const TIMEZONE = "America/Sao_Paulo";

export async function POST(req = NextRequest()) {
  const bearerToken = req.headers.get("authorization");
  const token = bearerToken.split(" ")[1];
  const { comment, pathname } = await req.json();

  await TokenVerifier(token);

  if (!token || !comment) {
    return NextResponse.json(
      { error: "É necessário estar logado e escrever algo para comentar" },
      { status: 400 }
    );
  }

  try {
    const { rows: userSelect } =
      await sql`SELECT uid, username, email FROM jwt_tokens WHERE token = ${token}`;

    const { uid, username, email } = userSelect[0];

    const createdAt = moment().tz(TIMEZONE).format();

    try {
      const result =
        await sql`INSERT INTO comments ( uid, username, email, pathname, comment, createdat ) VALUES ( ${uid}, ${username}, ${email}, ${pathname}, ${comment}, ${createdAt} ) RETURNING *`;

      return NextResponse.json(
        {
          success: "Comentário adicionado com sucesso!",
          result: result.rows[0],
        },
        { status: 201 }
      );
    } catch (err) {
      return NextResponse.json(
        { error: `Não foi possível adicionar o comentário no momento: ${err}` },
        {
          status: 500,
        }
      );
    }
  } catch (err) {
    return NextResponse.json(
      {
        error: `Não foi possível recuperar as informações do usuário do banco de dados: ${err}`,
      },
      { status: 402 }
    );
  }
}
