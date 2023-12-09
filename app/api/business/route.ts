import { NextResponse, NextRequest } from "next/server";
import { supabaseClient as supabase } from "@/utils/supabase";

interface Business {
  name: string;
  description: string;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const profileId = searchParams.get("profileId");

  if (!profileId) {
    return NextResponse.json(
      { error: "profileId is not specified" },
      { status: 400 }
    );
  }
  const { data: business, error: businessError } = await supabase
    .from("business")
    .select("*")
    .eq("profileId", profileId);

  if (businessError) {
    return NextResponse.json({ error: businessError.message }, { status: 500 });
  }

  return NextResponse.json(business);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);

  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  if (!body.profileId) {
    return NextResponse.json(
      { error: "Profile Id is required" },
      { status: 400 }
    );
  }

  const { data: business, error: businessError } = await supabase
    .from("business")
    .insert({
      name: body.name,
      description: body.description,
      profileId: body.profileId,
    })
    .select("*")
    .single();

  if (businessError) {
    return NextResponse.json({ error: businessError.message }, { status: 500 });
  }

  if (business) {
    const { data: store, error: storeError } = await supabase
      .from("store")
      .insert({
        name: body.name,
        description: body.description,
        businessId: business.id,
      })
      .select("*")
      .single();

    if (storeError) {
      return NextResponse.json({ error: storeError.message }, { status: 500 });
    }

    return NextResponse.json(store, { status: 201 });
  }

  return NextResponse.json({ error: "Some error occured" }, { status: 500 });
}
