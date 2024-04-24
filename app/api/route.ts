import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const response = {
    massage: "데이터를 가져오자",
    data: "데이터",
  };

  return NextResponse.json(response, { status: 200 });
}
