import { NextRequest } from "next/server";
import { supabaseClient as supabase } from "@/utils/supabase";

export async function GET(request:NextRequest , { params }: {params : {id:number}}){

    console.log(params.id , 'console')

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("*")


      



}