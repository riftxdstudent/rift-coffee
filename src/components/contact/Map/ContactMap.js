import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import * as parkData from "./data/skateboard-parks.json"
import "./Map.css";

const ContactMap = () => {
  return (
    <MapContainer center={[-6.173420929810642, 106.63258193897748]} zoom={12}scrollWheelZoom={false}>
      <TileLayer
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    </MapContainer>
  )
}

export default ContactMap