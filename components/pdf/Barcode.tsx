import * as bwipjs from "bwip-js";

type Props = {
  text: string;
};

export async function generateBarcode(text: string) {
  const png = await bwipjs.toBuffer({
    bcid: "code128",
    text,
    scale: 3,
    height: 12,
    includetext: true,
    textxalign: "center",
    backgroundcolor: "FFFFFF",
  });

  return `data:image/png;base64,${png.toString("base64")}`;
}