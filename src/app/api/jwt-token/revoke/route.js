import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET(req = NextRequest()) {
  const bearerToken = req.headers.get("authorization");
  const token = bearerToken.split(" ")[1];

  try {
    await sql`DELETE FROM jwt_tokens WHERE token = ${token}`;

    return NextResponse.json(
      {
        success: "O usuário saiu com sucesso!",
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Não foi possível remover o usuário!" },
      { statusCode: 400 }
    );
  }
}
