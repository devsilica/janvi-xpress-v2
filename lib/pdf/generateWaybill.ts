import {
  PDFDocument,
  StandardFonts,
  rgb,
} from "pdf-lib";

import fs from "fs";
import path from "path";

import { generateBarcode } from "./generateBarcode";
import { generateQRCode } from "./generateQRCode";

export type Shipment = {
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

export async function generateWaybill(
  shipment: Shipment
) {
  const pdfDoc = await PDFDocument.create();
  const logoPath = path.join(
  process.cwd(),
  "public",
  "logos",
  "janvi-logo.png"
);

const logoBytes = fs.readFileSync(logoPath);

const logoImage = await pdfDoc.embedPng(logoBytes);

  const font = await pdfDoc.embedFont(
    StandardFonts.Helvetica
  );

  const bold = await pdfDoc.embedFont(
    StandardFonts.HelveticaBold
  );

  const barcode = await generateBarcode(
    shipment.reference_code
  );

  const qr = await generateQRCode(
    shipment.reference_code
  );

  const barcodeImage =
    await pdfDoc.embedPng(barcode);

  const qrImage =
    await pdfDoc.embedPng(qr);

  const page1 = pdfDoc.addPage([
    595,
    842,
  ]);

  const page2 = pdfDoc.addPage([
    595,
    842,
  ]);

  const PRIMARY = rgb(
    14 / 255,
    154 / 255,
    167 / 255
  );

  const DARK = rgb(
    30 / 255,
    41 / 255,
    59 / 255
  );

  const LIGHT = rgb(
    100 / 255,
    116 / 255,
    139 / 255
  );

  const BORDER = rgb(
    203 / 255,
    213 / 255,
    225 / 255
  );

  const contentX = 45;
const contentY = 210;
const contentWidth = 505;
const contentHeight = 590;


page1.drawText("JANVI XPRESS", {
  x: 65,
  y: 770,
  size: 24,
  font: bold,
  color: PRIMARY,
});

page1.drawText(
  "International Logistics Company",
  {
    x: 65,
    y: 750,
    size: 10,
    font,
    color: LIGHT,
  }
);

page1.drawText(
  new Date(
    shipment.created_at
  ).toLocaleDateString(),
  {
    x: 430,
    y: 790,
    size: 10,
    font,
    color: DARK,
  }
);

/* ============================================================
   LOGO PLACEHOLDER
============================================================ */

page1.drawImage(logoImage, {
  x: 445,
  y: 730,
  width: 75,
  height: 75,
});
/* ============================================================
   FROM BOX
============================================================ */



page1.drawRectangle({
  x: 65,
  y: 707,
  width: 220,
  height: 28,
  color: PRIMARY,
});

page1.drawText("FROM", {
  x: 80,
  y: 717,
  size: 12,
  font: bold,
  color: rgb(1,1,1),
});

page1.drawText("Sender Name", {
  x: 80,
  y: 685,
  size: 9,
  font,
  color: LIGHT,
});

page1.drawText(shipment.full_name, {
  x: 80,
  y: 670,
  size: 11,
  font: bold,
  color: DARK,
});

page1.drawText("Phone Number", {
  x: 80,
  y: 645,
  size: 9,
  font,
  color: LIGHT,
});

page1.drawText(shipment.sender_phone, {
  x: 80,
  y: 630,
  size: 11,
  font: bold,
  color: DARK,
});

page1.drawText("Pickup Location", {
  x: 80,
  y: 605,
  size: 9,
  font,
  color: LIGHT,
});

page1.drawText(shipment.pickup_location, {
  x: 80,
  y: 590,
  size: 11,
  font: bold,
  color: DARK,
});

page1.drawText("ORIGIN : LOS", {
  x: 80,
  y: 565,
  size: 12,
  font: bold,
  color: PRIMARY,
});

/* ============================================================
   TO BOX
============================================================ */



page1.drawRectangle({
  x: 315,
  y: 707,
  width: 220,
  height: 28,
  color: PRIMARY,
});

page1.drawText("TO", {
  x: 330,
  y: 717,
  size: 12,
  font: bold,
  color: rgb(1,1,1),
});

page1.drawText("Receiver Name", {
  x: 330,
  y: 685,
  size: 9,
  font,
  color: LIGHT,
});

page1.drawText(shipment.receiver_name, {
  x: 330,
  y: 670,
  size: 11,
  font: bold,
  color: DARK,
});

page1.drawText("Phone Number", {
  x: 330,
  y: 645,
  size: 9,
  font,
  color: LIGHT,
});

page1.drawText(shipment.receiver_phone, {
  x: 330,
  y: 630,
  size: 11,
  font: bold,
  color: DARK,
});

page1.drawText("Postal Code", {
  x: 330,
  y: 605,
  size: 9,
  font,
  color: LIGHT,
});

page1.drawText(
  shipment.receiver_postal_code || "-",
  {
    x: 330,
    y: 590,
    size: 11,
    font: bold,
    color: DARK,
  }
);

page1.drawText("Address", {
  x: 330,
  y: 570,
  size: 9,
  font,
  color: LIGHT,
});

page1.drawText(shipment.receiver_address, {
  x: 330,
  y: 555,
  size: 10,
  font: bold,
  color: DARK,
  maxWidth: 185,
  lineHeight: 12,
});

page1.drawText("Destination", {
  x: 330,
  y: 505,
  size: 9,
  font,
  color: LIGHT,
});

page1.drawText(
  shipment.destination_country.toUpperCase(),
  {
    x: 330,
    y: 490,
    size: 14,
    font: bold,
    color: PRIMARY,
  }
);

/* ============================================================
   TRACKING NUMBER
============================================================ */



page1.drawText(shipment.reference_code, {
  x: 205,
  y: 425,
  size: 20,
  font : bold,
  color: LIGHT,
});


/* ============================================================
   SHIPMENT INFORMATION HEADER
============================================================ */

page1.drawRectangle({
  x: 65,
  y: 390,
  width: 470,
  height: 30,
  color: PRIMARY,
});

page1.drawText("SHIPMENT INFORMATION", {
  x: 190,
  y: 400,
  size: 12,
  font: bold,
  color: rgb(1, 1, 1),
});

/* ============================================================
   SERVICE CARD
============================================================ */



page1.drawText("SERVICE", {
  x: 112,
  y: 355,
  size: 9,
  font,
  color: LIGHT,
});

page1.drawText(shipment.service_type, {
  x: 95,
  y: 330,
  size: 12,
  font: bold,
  color: DARK,
});

/* ============================================================
   PACKAGE CARD
============================================================ */


page1.drawText("PACKAGE", {
  x: 265,
  y: 355,
  size: 9,
  font,
  color: LIGHT,
});

page1.drawText(shipment.package_type, {
  x: 245,
  y: 330,
  size: 12,
  font: bold,
  color: DARK,
});

/* ============================================================
   WEIGHT CARD
============================================================ */

page1.drawText("WEIGHT", {
  x: 425,
  y: 355,
  size: 9,
  font,
  color: LIGHT,
});

page1.drawText(`${shipment.weight} KG`, {
  x: 415,
  y: 330,
  size: 12,
  font: bold,
  color: DARK,
});

/* ============================================================
   SEPARATOR
============================================================ */

page1.drawLine({
  start: { x: 65, y: 285 },
  end: { x: 535, y: 285 },
  thickness: 1,
  color: BORDER,
});

/* ============================================================
   QR CODE
============================================================ */

page1.drawText("SCAN TO TRACK", {
  x: 90,
  y: 260,
  size: 11,
  font: bold,
  color: DARK,
});

page1.drawImage(qrImage, {
  x: 80,
  y: 135,
  width: 100,
  height: 100,
});

page1.drawText("Scan QR Code", {
  x: 88,
  y: 120,
  size: 9,
  font,
  color: LIGHT,
});

/* ============================================================
   BARCODE #1
============================================================ */

page1.drawImage(barcodeImage, {
  x: 235,
  y: 190,
  width: 250,
  height: 55,
});

page1.drawText(shipment.reference_code, {
  x: 285,
  y: 178,
  size: 10,
  font: bold,
  color: DARK,
});

/* ============================================================
   BARCODE #2
============================================================ */

page1.drawImage(barcodeImage, {
  x: 235,
  y: 110,
  width: 250,
  height: 55,
});

page1.drawText(shipment.reference_code, {
  x: 285,
  y: 98,
  size: 10,
  font: bold,
  color: DARK,
});

/* ============================================================
   FOOTER
============================================================ */

page1.drawLine({
  start: {
    x: 65,
    y: 80,
  },
  end: {
    x: 535,
    y: 80,
  },
  thickness: 1,
  color: BORDER,
});

page1.drawText(
  "Generated Automatically by Janvi Xpress",
  {
    x: 70,
    y: 60,
    size: 8,
    font,
    color: LIGHT,
  }
);

page1.drawText("Page 1 of 2", {
  x: 470,
  y: 60,
  size: 8,
  font,
  color: LIGHT,
});

/* ============================================================
   PAGE 2 HEADER
============================================================ */

page2.drawText("JANVI XPRESS", {
  x: 65,
  y: 770,
  size: 24,
  font: bold,
  color: PRIMARY,
});

page2.drawImage(logoImage, {
  x: 445,
  y: 730,
  width: 75,
  height: 75,
});

page2.drawText("Internal Waybill Copy", {
  x: 65,
  y: 750,
  size: 10,
  font,
  color: LIGHT,
});

page2.drawText("WAYBILL DOCUMENT", {
  x: 180,
  y: 705,
  size: 20,
  font: bold,
  color: DARK,
});

page2.drawText("For Janvi Xpress Internal Use", {
  x: 175,
  y: 685,
  size: 10,
  font,
  color: LIGHT,
});

page2.drawRectangle({
  x: 65,
  y: 610,
  width: 470,
  height: 80,
  borderWidth: 1,
  borderColor: BORDER,
});

page2.drawRectangle({
  x: 65,
  y: 662,
  width: 470,
  height: 28,
  color: PRIMARY,
});

page2.drawText("SHIPPER", {
  x: 80,
  y: 672,
  size: 12,
  font: bold,
  color: rgb(1,1,1),
});

page2.drawText("Janvi Xpress", {
  x: 80,
  y: 635,
  size: 12,
  font: bold,
  color: DARK,
});

page2.drawText("Origin : LOS", {
  x: 80,
  y: 615,
  size: 10,
  font,
  color: LIGHT,
});

page2.drawRectangle({
  x: 65,
  y: 430,
  width: 470,
  height: 160,
  borderWidth: 1,
  borderColor: BORDER,
});

page2.drawRectangle({
  x: 65,
  y: 562,
  width: 470,
  height: 28,
  color: PRIMARY,
});

page2.drawText("RECEIVER", {
  x: 80,
  y: 572,
  size: 12,
  font: bold,
  color: rgb(1,1,1),
});

page2.drawText(`Name: ${shipment.receiver_name}`, {
  x: 80,
  y: 530,
  size: 11,
  font: bold,
  color: DARK,
});

page2.drawText(`Phone: ${shipment.receiver_phone}`, {
  x: 80,
  y: 505,
  size: 10,
  font,
  color: DARK,
});

page2.drawText(`Postal Code: ${shipment.receiver_postal_code}`, {
  x: 80,
  y: 480,
  size: 10,
  font,
  color: DARK,
});

page2.drawText(`Destination: ${shipment.destination_country}`, {
  x: 80,
  y: 455,
  size: 10,
  font: bold,
  color: PRIMARY,
});

page2.drawText("Address:", {
  x: 300,
  y: 530,
  size: 10,
  font,
  color: LIGHT,
});

page2.drawText(shipment.receiver_address, {
  x: 300,
  y: 510,
  size: 10,
  font,
  color: DARK,
  maxWidth: 180,
  lineHeight: 14,
});

page2.drawRectangle({
  x: 65,
  y: 300,
  width: 470,
  height: 100,
  borderWidth: 1,
  borderColor: BORDER,
});

page2.drawRectangle({
  x: 65,
  y: 372,
  width: 470,
  height: 28,
  color: PRIMARY,
});

page2.drawText("SHIPMENT SUMMARY", {
  x: 80,
  y: 382,
  size: 12,
  font: bold,
  color: rgb(1,1,1),
});

page2.drawText(`Tracking: ${shipment.reference_code}`, {
  x: 80,
  y: 340,
  size: 10,
  font,
  color: DARK,
});

page2.drawText(`Service: ${shipment.service_type}`, {
  x: 250,
  y: 340,
  size: 10,
  font,
  color: DARK,
});

page2.drawText(`Package: ${shipment.package_type}`, {
  x: 80,
  y: 318,
  size: 10,
  font,
  color: DARK,
});

page2.drawText(`Weight: ${shipment.weight} KG`, {
  x: 250,
  y: 318,
  size: 10,
  font,
  color: DARK,
});

page2.drawImage(barcodeImage,{
    x:120,
    y:160,
    width:340,
    height:70,
});

page2.drawText(shipment.reference_code,{
    x:210,
    y:145,
    size:12,
    font:bold,
    color:DARK,
});

page2.drawLine({
    start:{x:65,y:80},
    end:{x:535,y:80},
    thickness:1,
    color:BORDER,
});

page2.drawText(
    "Janvi Xpress Internal Copy",
{
    x:70,
    y:60,
    size:8,
    font,
    color:LIGHT,
});

page2.drawText("Page 2 of 2",{
    x:470,
    y:60,
    size:8,
    font,
    color:LIGHT,
});
const pdfBytes = await pdfDoc.save();

return Buffer.from(pdfBytes);

}