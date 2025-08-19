import * as React from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import type {
    FeatureCollection,
    GeoJSON as GeoJSONType,
    GeoJsonProperties,
    Geometry,
} from "geojson";
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
        fetch("/data/kenya_county_assemblies.json")
            .then((r) => r.json())
            .then((j: FeatureCollection<Geometry, GeoJsonProperties>) => {
                // Filter Kisumu county only
                const kisumu = {
                    ...j,
                    features: j.features.filter(
                        (f) =>
                            f.properties?.county?.toString().toLowerCase() === "kisumu"
                    ),
                };
                setGeo(kisumu);
            })
            .catch(() => setError("GeoJSON not found – showing base map."));
    }, []);

    const center: [number, number] = [-0.1022, 34.7617]; // Kisumu center

    return (
        <MapContainer
            center={center}
            zoom={10}
            scrollWheelZoom={false}
            className="h-44 w-full rounded-xl"
            style={{ border: "1px solid rgba(255,255,255,0.3)" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {geo ? (
                <>
                    <GeoJSON
                        data={geo as FeatureCollection<Geometry, GeoJsonProperties>}
                        style={{ color: brand.coral, weight: 2, fillOpacity: 0.15 }}
                    />
                    <FitToGeoJSON data={geo} />
                </>
            ) : null}

            {error ? <p className="text-red-500">{error}</p> : null}
        </MapContainer>
    );
}
