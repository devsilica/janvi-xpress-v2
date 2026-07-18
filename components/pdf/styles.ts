import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: "Helvetica",
    backgroundColor: "#FFFFFF",
    color: "#111827",
  },

  /* ===========================
      HEADER
  =========================== */

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#0E9AA7",
    paddingBottom: 12,
  },

  company: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0E9AA7",
  },

  subtitle: {
    fontSize: 10,
    color: "#64748B",
    marginTop: 3,
  },

  date: {
    fontSize: 10,
    color: "#475569",
  },

  /* ===========================
      SECTION
  =========================== */

  section: {
    borderWidth: 1,
    borderColor: "#CBD5E1",
    marginBottom: 15,
    borderRadius: 6,
  },

  sectionHeader: {
    backgroundColor: "#0E9AA7",
    color: "#FFFFFF",
    padding: 6,
    fontSize: 11,
    fontWeight: "bold",
  },

  sectionBody: {
    padding: 10,
  },

  /* ===========================
      ROWS
  =========================== */

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  column: {
    width: "48%",
  },

  label: {
    fontSize: 9,
    color: "#64748B",
    marginBottom: 2,
  },

  value: {
    fontSize: 11,
    fontWeight: "bold",
  },

  /* ===========================
      TRACKING
  =========================== */

  trackingBox: {
    marginVertical: 20,
    borderWidth: 2,
    borderColor: "#0E9AA7",
    borderRadius: 8,
    alignItems: "center",
    padding: 15,
  },

  trackingTitle: {
    fontSize: 11,
    color: "#64748B",
    marginBottom: 5,
  },

  trackingCode: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 2,
  },

  /* ===========================
      SHIPMENT
  =========================== */

  shipmentGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  shipmentCard: {
    width: "31%",
    borderWidth: 1,
    borderColor: "#CBD5E1",
    borderRadius: 6,
    padding: 10,
    alignItems: "center",
  },

  shipmentLabel: {
    fontSize: 9,
    color: "#64748B",
  },

  shipmentValue: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 5,
  },

  /* ===========================
      QR + BARCODE
  =========================== */

  qrBarcodeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
  },

  qrBox: {
    width: "28%",
    alignItems: "center",
  },

  barcodeBox: {
    width: "65%",
    alignItems: "center",
  },

  scanText: {
    marginTop: 6,
    fontSize: 9,
    color: "#64748B",
  },

  /* ===========================
      FOOTER
  =========================== */

  footer: {
    position: "absolute",
    left: 30,
    right: 30,
    bottom: 20,
    borderTopWidth: 1,
    borderTopColor: "#CBD5E1",
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  footerText: {
    fontSize: 9,
    color: "#64748B",
  },

  pageNumber: {
    fontSize: 9,
    color: "#64748B",
  },
});