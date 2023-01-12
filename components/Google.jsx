import React from "react";
import GoogleMapReact from "google-map-react";
import { GiPositionMarker } from "react-icons/gi";
import styles from "../styles/Google.module.scss";

const Any = ({ text }) => <div>{text}</div>;

export default function Google() {
  const defaultProps = {
    center: {
      lat: 47.998794902981594,
      lng: 16.229314253044365,
    },
    zoom: 17.7,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "580px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCSnKljo1hUUkUkOTLIySzB6H14TC-g_pI" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <GiPositionMarker
          className={styles.marker}
          lat={47.998794902981594}
          lng={16.229314253044365}
          text="Tierarzt Mag. Christian Quehenberger - Dr. Bully"
        />
      </GoogleMapReact>
    </div>
  );
}
