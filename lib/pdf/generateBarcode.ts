import bwipjs from "bwip-js";

export async function generateBarcode(
  trackingNumber: string
): Promise<Buffer> {
  return await bwipjs.toBuffer({
    bcid: "code128",

    text: trackingNumber,

    scale: 3,

    height: 14,

    includetext: true,

    textxalign: "center",

    backgroundcolor: "FFFFFF",
  });
}