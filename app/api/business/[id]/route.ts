import { NextRequest, NextResponse } from "next/server";
import { supabaseClient as supabase } from "@/utils/supabase";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log(params.id, "console");

  const { error: businessError } = await supabase
    .from("business")
    .select("*")
    .eq("id", params.id)
    .single();

  if (businessError) {
    return NextResponse.json({ error: businessError.message }, { status: 500 });
  }

  const { data: store, error: storeError } = await supabase
    .from("store")
    .select("* , product(*)")
    .eq("businessId", params.id)
    .single();

  if (storeError) {
    return NextResponse.json({ error: storeError.message }, { status: 500 });
  }

  return NextResponse.json(store, { status: 200 });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  const { data: business, error: businessError } = await supabase
    .from("business")
    .update(body)
    .eq("id", params.id)
    .select("*")
    .single();

  if (businessError) {
    return NextResponse.json({ error: businessError.message }, { status: 500 });
  }

  if (business) {
    const { data: store, error: storeError } = await supabase
      .from("store")
      .update({ ...body, businessId: business.id })
      .eq("businessId", business.id)
      .select("*")
      .single();

    if (storeError) {
      return NextResponse.json({ error: storeError.message }, { status: 500 });
    }

    return NextResponse.json(store, { status: 200 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { error: businessError } = await supabase
    .from("business")
    .delete()
    .eq("id", params.id);

  if (businessError) {
    return NextResponse.json({ error: businessError.message }, { status: 500 });
  }

  const { error: storeError } = await supabase
    .from("store")
    .delete()
    .eq("businessId", params.id);

  if (storeError) {
    return NextResponse.json({ error: storeError.message }, { status: 500 });
  }

  return NextResponse.json(
    { message: "Deleted Successfully" },
    { status: 200 }
  );
}
