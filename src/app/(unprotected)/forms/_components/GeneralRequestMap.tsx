"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useState } from "react";

function MarkerOnClick({
  passCoordinatesToForm,
}: {
  passCoordinatesToForm: (args: string) => void;
}) {
  const [position, setPosition] = useState<{ lat: number; lng: number }>({
    lat: 50,
    lng: 20,
  });

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      passCoordinatesToForm(`${e.latlng.lat}, ${e.latlng.lng}`);
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default function GeneralRequestMap({
  passCoordinatesToForm,
}: {
  passCoordinatesToForm: (args: string) => void;
}) {
  return (
    <MapContainer
      center={[6.315298538330033, 20.917968750000004]}
      zoom={3}
      scrollWheelZoom={true}
      className="z-20 h-[12rem] w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerOnClick passCoordinatesToForm={passCoordinatesToForm} />
    </MapContainer>
  );
}
