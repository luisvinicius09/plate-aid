"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvent,
  useMapEvents,
} from "react-leaflet";
import { useState } from "react";

export default function GeneralRequestMap({
  passCoordinatesToForm,
}: {
  passCoordinatesToForm: (args: string) => void;
}) {
  function MarkerOnClick() {
    const [position, setPosition] = useState<{
      lat: number;
      lng: number;
    } | null>(null);

    useMapEvent("click", (e) => {
      setPosition(e.latlng);
      passCoordinatesToForm(`${e.latlng.lat}, ${e.latlng.lng}`);
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>Your marker</Popup>
      </Marker>
    );
  }

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

      <MarkerOnClick />
    </MapContainer>
  );
}
