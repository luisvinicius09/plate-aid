import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { api } from "@/trpc/react";

export default function Map() {
  // fetch data

  const markers = api.data.getMarkers.useQuery();

  return (
    <MapContainer
      className="z-20 h-[30rem] w-full"
      center={[6.315298538330033, 20.917968750000004]}
      zoom={4}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.data?.markers?.map((marker, idx) => {
        if (!marker.coordinates) {
          return null;
        }

        const [lat, lng] = marker.coordinates.split(",") as unknown as [
          number,
          number,
        ];

        return (
          <Marker key={idx} position={[lat, lng]}>
            <Popup>
              <div>
                <h3>{marker.requestType}</h3>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
