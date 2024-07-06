import { NextRequest, NextResponse } from "next/server";

export async function GET(req = NextRequest()) {
  const bearerToken = req.headers.get("authorization");
  const token = bearerToken.split(" ")[1];

  try {
    const { rows: getUser } =
      await sql`SELECT uid, username, email FROM jwt_tokens WHERE token = ${token}`;

    if (getUser.length === 0) {
      return NextResponse.json(
        { error: "Usuário inexistente!" },
        { status: 400 }
      );
    }

    // if (getUser.length > 1) {
    //   return NextResponse.json(
    //     { error: "Usuário duplicado!" },
    //     { status: 500 }
    //   );
    // }

    const user = getUser[0];

    return NextResponse.json(
      {
        success: "Consulta realizada com sucesso no banco de dados!",
        user,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao verificar banco de dados" },
      { status: 500 }
    );
  }
}
