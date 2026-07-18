import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const id = String(form.get("id"));
    const status = String(form.get("status"));

    if (!id || !status) {
      return NextResponse.json(
        {
          error: "Missing data",
        },
        {
          status: 400,
        }
      );
    }

    const { error } = await supabase
      .from("shipping_requests")
      .update({
        status,
      })
      .eq("id", id);

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          error: "Database update failed",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.redirect(
      new URL(`/admin/shipments/${id}`, req.url)
    );
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        error: "Unexpected server error",
      },
      {
        status: 500,
      }
    );
  }
}