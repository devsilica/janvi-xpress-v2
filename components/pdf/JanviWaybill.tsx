import { Document } from "@react-pdf/renderer";

import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

import { generateBarcode } from "./Barcode";
import { generateQRCode } from "./QRCode";

type Shipment = {
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

type Props = {
  shipment: Shipment;
};

export default async function JanviWaybill({
  shipment,
}: Props) {
  const barcode = await generateBarcode(
    shipment.reference_code
  );

  const qrCode = await generateQRCode(
    shipment.reference_code
  );

  const pdfData = {
    ...shipment,
    barcode,
    qrCode,
  };

  return (
    <Document>

      <PageOne shipment={pdfData} />

      <PageTwo shipment={pdfData} />

    </Document>
  );
}