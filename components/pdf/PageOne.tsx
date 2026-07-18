import {
  Page,
  View,
  Text,
  Image,
} from "@react-pdf/renderer";

import { styles } from "./styles";

type WaybillProps = {
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

    qrCode: string;
    barcode: string;
  };
};

export default function PageOne({
  shipment,
}: WaybillProps) {
  return (
    <Page
      size="A4"
      style={styles.page}
    >

      {/* HEADER */}

      <View style={styles.header}>

        <View>

          <Text style={styles.company}>
            JANVI XPRESS
          </Text>

          <Text style={styles.subtitle}>
            International Logistics Company
          </Text>

        </View>

        {/* LOGO */}

        {/* Replace later with your company logo */}

        <View>

          <Text style={styles.date}>
            DATE
          </Text>

          <Text style={styles.value}>
            {new Date(
              shipment.created_at
            ).toLocaleDateString()}
          </Text>

        </View>

      </View>

      {/* PAGE TITLE */}

      <View
        style={{
          marginBottom: 18,
          alignItems: "center",
        }}
      >

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          SHIPMENT WAYBILL
        </Text>

      </View>

      {/* FROM / TO SECTION */}
<View style={styles.row}>

  {/* FROM */}

  <View
    style={[
      styles.column,
      styles.section,
    ]}
  >

    <Text style={styles.sectionHeader}>
      FROM
    </Text>

    <View style={styles.sectionBody}>

      <Text style={styles.label}>
        Sender Name
      </Text>

      <Text style={styles.value}>
        {shipment.full_name}
      </Text>

      <View style={{ height: 10 }} />

      <Text style={styles.label}>
        Phone Number
      </Text>

      <Text style={styles.value}>
        {shipment.sender_phone}
      </Text>

      <View style={{ height: 10 }} />

      <Text style={styles.label}>
        Pickup Location
      </Text>

      <Text style={styles.value}>
        {shipment.pickup_location}
      </Text>

      <View style={{ height: 15 }} />

      <Text
        style={{
          fontSize: 12,
          fontWeight: "bold",
          color: "#0E9AA7",
        }}
      >
        ORIGIN : LOS
      </Text>

    </View>

  </View>

  {/* TO */}

  <View
    style={[
      styles.column,
      styles.section,
    ]}
  >

    <Text style={styles.sectionHeader}>
      TO
    </Text>

    <View style={styles.sectionBody}>

      <Text style={styles.label}>
        Receiver Name
      </Text>

      <Text style={styles.value}>
        {shipment.receiver_name}
      </Text>

      <View style={{ height: 10 }} />

      <Text style={styles.label}>
        Phone Number
      </Text>

      <Text style={styles.value}>
        {shipment.receiver_phone}
      </Text>

      <View style={{ height: 10 }} />

      <Text style={styles.label}>
        Postal Code
      </Text>

      <Text style={styles.value}>
        {shipment.receiver_postal_code}
      </Text>

      <View style={{ height: 10 }} />

      <Text style={styles.label}>
        Address
      </Text>

      <Text
        style={{
          fontSize: 10,
          lineHeight: 1.4,
        }}
      >
        {shipment.receiver_address}
      </Text>

      <View style={{ height: 15 }} />

      <Text
        style={{
          fontSize: 12,
          fontWeight: "bold",
          color: "#0E9AA7",
        }}
      >
        DESTINATION
      </Text>

      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
          marginTop: 4,
        }}
      >
        {shipment.destination_country.toUpperCase()}
      </Text>

    </View>

  </View>

</View>
      {/* NEXT PART */}
      {/* TRACKING CODE */}

<View style={styles.trackingBox}>

  <Text style={styles.trackingTitle}>
    TRACKING CODE
  </Text>

  <Text style={styles.trackingCode}>
    {shipment.reference_code}
  </Text>

</View>

{/* SHIPMENT INFORMATION */}

<View style={styles.section}>

  <Text style={styles.sectionHeader}>
    SHIPMENT INFORMATION
  </Text>

  <View style={styles.sectionBody}>

    <View style={styles.shipmentGrid}>

      <View style={styles.shipmentCard}>

        <Text style={styles.shipmentLabel}>
          SERVICE
        </Text>

        <Text style={styles.shipmentValue}>
          {shipment.service_type}
        </Text>

      </View>

      <View style={styles.shipmentCard}>

        <Text style={styles.shipmentLabel}>
          PACKAGE
        </Text>

        <Text style={styles.shipmentValue}>
          {shipment.package_type}
        </Text>

      </View>

      <View style={styles.shipmentCard}>

        <Text style={styles.shipmentLabel}>
          WEIGHT
        </Text>

        <Text style={styles.shipmentValue}>
          {shipment.weight} KG
        </Text>

      </View>

    </View>

  </View>

</View>

{/* DIVIDER */}

<View
  style={{
    marginTop: 18,
    marginBottom: 10,
    borderTopWidth: 1,
    borderTopColor: "#CBD5E1",
  }}
/>
{/* QR CODE + BARCODE */}

<View style={styles.qrBarcodeRow}>

  {/* QR CODE */}

  <View style={styles.qrBox}>

    <Image
      src={shipment.qrCode}
      style={{
        width: 110,
        height: 110,
      }}
    />

    <Text style={styles.scanText}>
      Scan to Track Shipment
    </Text>

  </View>

  {/* BARCODES */}

  <View style={styles.barcodeBox}>

    <Image
      src={shipment.barcode}
      style={{
        width: 260,
        height: 65,
      }}
    />

    <Text
      style={{
        marginTop: 6,
        fontSize: 10,
        fontWeight: "bold",
      }}
    >
      {shipment.reference_code}
    </Text>

    <View
      style={{
        height: 18,
      }}
    />

    <Image
      src={shipment.barcode}
      style={{
        width: 260,
        height: 65,
      }}
    />

    <Text
      style={{
        marginTop: 6,
        fontSize: 10,
        fontWeight: "bold",
      }}
    >
      {shipment.reference_code}
    </Text>

  </View>

</View>

{/* FOOTER */}

<View style={styles.footer}>

  <Text style={styles.footerText}>
    Generated Automatically by Janvi Xpress
  </Text>

  <Text style={styles.pageNumber}>
    Page 1 of 2
  </Text>

</View>
    </Page>
  );
}

