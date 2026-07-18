import {
  Page,
  View,
  Text,
  Image,
} from "@react-pdf/renderer";

import { styles } from "./styles";

type Props = {
  shipment: {
    reference_code: string;
    receiver_name: string;
    receiver_phone: string;
    receiver_postal_code: string;
    receiver_address: string;
    destination_country: string;

    package_type: string;
    service_type: string;
    weight: number;

    created_at: string;

    barcode: string;
  };
};

export default function PageTwo({
  shipment,
}: Props) {
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
            Internal Waybill Copy
          </Text>

        </View>

        <View>

          <Text style={styles.date}>
            {new Date(
              shipment.created_at
            ).toLocaleDateString()}
          </Text>

        </View>

      </View>

      {/* TITLE */}

      <View
        style={{
          alignItems: "center",
          marginBottom: 25,
        }}
      >

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          WAYBILL DOCUMENT
        </Text>

        <Text
          style={{
            marginTop: 6,
            fontSize: 10,
            color: "#64748B",
          }}
        >
          To be kept by Janvi Xpress
        </Text>

      </View>

      {/* COMPANY */}

      <View style={styles.section}>

        <Text style={styles.sectionHeader}>
          SHIPPER
        </Text>

        <View style={styles.sectionBody}>

          <Text style={styles.value}>
            Janvi Xpress
          </Text>

          <Text>
            Lagos, Nigeria
          </Text>

          <Text>
            Origin : LOS
          </Text>

        </View>

      </View>

      {/* RECEIVER */}

      <View style={styles.section}>

        <Text style={styles.sectionHeader}>
          RECEIVER
        </Text>

        <View style={styles.sectionBody}>

          <Text>
            <Text style={styles.label}>
              Name:
            </Text>{" "}
            {shipment.receiver_name}
          </Text>

          <Text>
            <Text style={styles.label}>
              Phone:
            </Text>{" "}
            {shipment.receiver_phone}
          </Text>

          <Text>
            <Text style={styles.label}>
              Postal Code:
            </Text>{" "}
            {shipment.receiver_postal_code}
          </Text>

          <Text>
            <Text style={styles.label}>
              Address:
            </Text>{" "}
            {shipment.receiver_address}
          </Text>

          <Text
            style={{
              marginTop: 10,
              fontSize: 13,
              fontWeight: "bold",
            }}
          >
            {shipment.destination_country.toUpperCase()}
          </Text>

        </View>

      </View>

      {/* SHIPMENT */}

      <View style={styles.section}>

        <Text style={styles.sectionHeader}>
          SHIPMENT DETAILS
        </Text>

        <View style={styles.sectionBody}>

          <View style={styles.row}>

            <View style={styles.column}>

              <Text style={styles.label}>
                Tracking Code
              </Text>

              <Text style={styles.value}>
                {shipment.reference_code}
              </Text>

            </View>

            <View style={styles.column}>

              <Text style={styles.label}>
                Service
              </Text>

              <Text style={styles.value}>
                {shipment.service_type}
              </Text>

            </View>

          </View>

          <View style={styles.row}>

            <View style={styles.column}>

              <Text style={styles.label}>
                Package
              </Text>

              <Text style={styles.value}>
                {shipment.package_type}
              </Text>

            </View>

            <View style={styles.column}>

              <Text style={styles.label}>
                Weight
              </Text>

              <Text style={styles.value}>
                {shipment.weight} KG
              </Text>

            </View>

          </View>

        </View>

      </View>

      {/* BARCODE */}

      <View
        style={{
          alignItems: "center",
          marginTop: 35,
        }}
      >

        <Image
          src={shipment.barcode}
          style={{
            width: 320,
            height: 80,
          }}
        />

        <Text
          style={{
            marginTop: 8,
            fontWeight: "bold",
          }}
        >
          {shipment.reference_code}
        </Text>

      </View>

      {/* FOOTER */}

      <View style={styles.footer}>

        <Text style={styles.footerText}>
          Janvi Xpress Internal Copy
        </Text>

        <Text style={styles.pageNumber}>
          Page 2 of 2
        </Text>

      </View>

    </Page>
  );
}