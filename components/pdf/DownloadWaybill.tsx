"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import JanviWaybill from "./JanviWaybill";

type Props = {
  shipment: {
    reference_code: string;

    full_name: string;
    sender_phone: string;
    pickup_location: string;

    receiver_name: string;
    receiver_phone: string;
    receiver_postal_code: string;
    receiver_address: string;

    destination_country: string;

    package_type: string;
    service_type: string;

    weight: number;

    created_at: string;
  };
};

export default function DownloadWaybill({
  shipment,
}: Props) {
  return (
    <PDFDownloadLink
      document={
        <JanviWaybill shipment={shipment} />
      }
      fileName={`${shipment.reference_code}.pdf`}
    >
      {({ loading }) => (
        <button
          className="rounded-xl bg-[#0E9AA7] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#0c8793]"
        >
          {loading
            ? "Generating PDF..."
            : "Download Waybill"}
        </button>
      )}
    </PDFDownloadLink>
  );
}