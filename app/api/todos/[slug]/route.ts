import { NextRequest, NextResponse } from "next/server";

//할일 단일조회
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

//할일 단일삭제 ID로
export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const response = {
    massage: "단일 할일 삭제 성공",
    data: {
      id: params.slug,
      title: "데이터를 가져와볼까",
      is_done: false,
    },
  };

  return NextResponse.json(response, { status: 200 });
}
