import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import items from "@/mocks/json-stub.json";

interface Context {
  params: {
    itemId: string;
  };
}

export async function GET(request: NextRequest, context: Context) {
  try {
    return NextResponse.json({
      data: items.find((item) => item.id === context.params.itemId),
    });
  } catch (error) {
    return NextResponse.error();
  }
}
