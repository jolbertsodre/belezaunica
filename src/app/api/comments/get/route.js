import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(req = NextRequest()) {
  const { pathname } = await req.json();

  try {
    const { rows } =
      await sql`SELECT * FROM comments WHERE pathname = ${pathname} ORDER BY createdat DESC`;
    return NextResponse.json(
      { success: "Comentários recuperados com sucesso!", rows },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        error: `Não foi possível recuperar os comentários do banco de dados: ${err}`,
      },
      { status: 500 }
    );
  }
}
