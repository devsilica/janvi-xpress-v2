import QRCode from "qrcode";

export async function generateQRCode(referenceCode: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL ||
    "http://localhost:3000";

  const trackingUrl = `${baseUrl}/track/${referenceCode}`;

  const qr = await QRCode.toDataURL(trackingUrl, {
    errorCorrectionLevel: "H",
    margin: 1,
    width: 220,
    color: {
      dark: "#000000",
      light: "#FFFFFF",
    },
  });

  return qr;
}