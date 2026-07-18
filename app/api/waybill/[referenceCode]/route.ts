import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

import { generateWaybill } from "@/lib/pdf/generateWaybill";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      referenceCode: string;
    }>;
  }
) {
  try {
    const { referenceCode } = await params;

    const { data, error } = await supabase
      .from("shipping_requests")
      .select("*")
      .eq("reference_code", referenceCode)
      .single();

    if (error || !data) {
      return NextResponse.json(
        {
          error: "Shipment not found",
        },
        {
          status: 404,
        }
      );
    }

    const pdf = await generateWaybill(data);

    return new NextResponse(pdf, {
      headers: {
        "Content-Type": "application/pdf",

        "Content-Disposition": `attachment; filename="${referenceCode}.pdf"`,

        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        error: "Failed to generate waybill",
      },
      {
        status: 500,
      }
    );
  }
}