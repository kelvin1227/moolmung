import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const searchParams = request.nextUrl.searchParams;
  const search = searchParams.get("search");
  const response = {
    massage: "게시물 한개!!%!",
    data: {
      id: params.slug,
      title: "데이터를 가져와볼까",
      is_done: false,
      query: search,
    },
  };

  return NextResponse.json(response, { status: 200 });
}
