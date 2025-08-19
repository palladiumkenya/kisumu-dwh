import * as React from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import type { GeoJSON as GeoJSONType } from "geojson";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const brand = {
    coral: "#D8634B",
    coralDark: "#C2513B",
};

function FitToGeoJSON({ data }: { data: GeoJSONType }) {
    const map = useMap();
    React.useEffect(() => {
        const layer = L.geoJSON(data);
        map.fitBounds(layer.getBounds(), { padding: [10, 10] });
    }, [data, map]);
    return null;
}

export default function KisumuMap() {
    const [geo, setGeo] = React.useState<GeoJSONType | null>(null);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        fetch("/assets/geo/kisumu-county.json")
            .then((r) => (r.ok ? r.json() : Promise.reject(r.statusText)))
            .then((j) => setGeo(j as GeoJSONType))
            .catch(() => setError("GeoJSON not found – showing base map."));
    }, []);

    const center: [number, number] = [-0.1022, 34.7617];

    return (
        <MapContainer
            center={center}
            zoom={10}
            scrollWheelZoom={false}
            className="h-44 w-full rounded-xl"
            style={{ border: "1px solid rgba(255,255,255,0.3)" }}
        >
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {geo ? (
                <>
                    <GeoJSON data={geo as any} style={{ color: brand.coral, weight: 2, fillOpacity: 0.15 }} />
                    <FitToGeoJSON data={geo} />
                </>
            ) : null}
            {error ? (
                <></>
            ) : null}
        </MapContainer>
    );
}
