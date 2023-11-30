import { NextResponse, NextRequest } from "next/server";
import { supabaseClient as supabase } from "@/utils/supabase";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json(
      { error: "userId is not specified" },
      { status: 500 }
    );
  }

  const { data: business, error: businessError } = await supabase
    .from("business")
    .select("*")
    .eq("profileId", userId);

  if (businessError) {
    return NextResponse.json({ error: businessError.message }, { status: 500 });
  }

  return NextResponse.json(business);
}
