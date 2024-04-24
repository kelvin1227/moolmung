import { NextRequest, NextResponse } from "next/server";
import dummyTodos from "@/data/dummy.json";

//모든 할일 가져오기
export async function GET(request: NextRequest) {
  const response = {
    massage: "todos 몽땅 가져오기",
    data: dummyTodos,
  };

  return NextResponse.json(response, { status: 200 });
}

export async function POST(request: NextRequest) {
  const title = await request.json();

  const newTodo = {
    id: 10,
    title: title,
    is_donw: false,
  };

  const response = {
    massage: " 할일 추가 성공",
    data: newTodo,
  };

  return Response.json(response, { status: 201 });
}
