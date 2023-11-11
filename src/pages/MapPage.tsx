import React, { useState } from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Button, useDisclosure } from '@chakra-ui/react';
import 'leaflet/dist/leaflet.css';
import { TerritoryData } from "../types";

// Example data - replace this with actual data from your backend
const territories: TerritoryData[] = [
    {
        id: '1',
        name: 'Territory 1',
        info: 'Information about Territory 1',
        coordinates: [
            [51.505, -0.09],
            [51.51, -0.1],
            [51.51, -0.08],
        ],
    },
];

export const MapPage: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedTerritory, setSelectedTerritory] = useState<TerritoryData | null>(null);
    const [hoveredTerritoryId, setHoveredTerritoryId] = useState<string | null>(null);

    const defaultStyle = {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.5,
    };

    const hoverStyle = {
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.7,
    };

    const selectedStyle = {
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.7,
    };

    const smoothStyleTransition = (layer: L.Polygon, newStyle: L.PathOptions) => {
        layer.setStyle(newStyle);
    };

    const handlePolygonClick = (territory: TerritoryData) => {
        setSelectedTerritory(territory);
        setHoveredTerritoryId(null); // Disable hover effect when a territory is selected
        onOpen();
    };

    const handlePolygonMouseOver = (e: L.LeafletMouseEvent, territoryId: string) => {
        if (!isOpen && hoveredTerritoryId !== territoryId) {
            setHoveredTerritoryId(territoryId);
            smoothStyleTransition(e.target, hoverStyle);
        }
    };

    const handlePolygonMouseOut = (e: L.LeafletMouseEvent) => {
        if (!isOpen && hoveredTerritoryId) {
            setHoveredTerritoryId(null);
            smoothStyleTransition(e.target, defaultStyle);
        }
    };

    const handleCloseDrawer = () => {
        setSelectedTerritory(null); // Reset selected territory when drawer is closed
        onClose();
    };
    return (
        <>
            <MapContainer
                center={[51.505, -0.09]} // Initial position (latitude, longitude)
                zoom={13} // Initial zoom level
                style={{ height: '100%', width: '100%' }} // Map size
            >
                <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {territories.map((territory) => (
                    <Polygon
                        key={territory.id}
                        positions={territory.coordinates}
                        pathOptions={
                            selectedTerritory?.id === territory.id
                                ? selectedStyle
                                : hoveredTerritoryId === territory.id
                                    ? hoverStyle
                                    : defaultStyle
                        }
                        eventHandlers={{
                            click: () => handlePolygonClick(territory),
                            mouseover: (e) => handlePolygonMouseOver(e, territory.id),
                            mouseout: (e) => handlePolygonMouseOut(e),
                        }}
                    />
                ))}
            </MapContainer>

            {/* Drawer to display territory information */}
            <Drawer isOpen={isOpen} placement="right" onClose={handleCloseDrawer} size="md">
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>{selectedTerritory?.name}</DrawerHeader>
                    <DrawerBody>
                        <p>{selectedTerritory?.info}</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default MapPage;