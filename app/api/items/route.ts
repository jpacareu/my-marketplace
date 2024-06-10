import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import items from "@/mocks/json-stub.json";

interface Context {
  params: undefined;
}


export async function GET(request: NextRequest, context: Context) {
  try {
    return NextResponse.json({ data: items });
  } catch (error) {
    return NextResponse.error();
  }
}
