import React, { useState } from 'react';
import * as turf from '@turf/turf';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import { Spinner } from '@chakra-ui/react'
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    Button,
    Text,
    useDisclosure,
    Checkbox, Container, Box, VStack, HStack
} from '@chakra-ui/react';
import 'leaflet/dist/leaflet.css';
import { ImageOverlay } from 'react-leaflet';
import { TerritoryData, CropType } from "../types";
import { LatLngTuple} from "leaflet";
import '@geoman-io/leaflet-geoman-free';
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css';


const territories: TerritoryData[] = [
    {
        id: 'a1',
        name: 'f8a',
        coordinates: [
            [47.3835686, 29.0664792],
            [47.3815160, 29.0833959],
            [47.3803365, 29.0973750],
            [47.3795371, 29.1077550],
            [47.3773631, 29.1088491],
            [47.3785745, 29.0936463],
            [47.3795421, 29.0830647],
            [47.3811163, 29.0710004],
            [47.3815550, 29.0669693],
            [47.3825883, 29.0664798],
        ],
        cropType:'alfafa',
        type:"cadastral"


    },


];


export const Cadastral: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedTerritory, setSelectedTerritory] = useState<TerritoryData | null>(null);
    const [hoveredTerritoryId, setHoveredTerritoryId] = useState<string | null>(null);

    const defaultStyle = {
        color: 'green',
        fillColor: 'green',
        fillOpacity: 0.1
    };

    const hoverStyle = {
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.2,
    };

    const selectedStyle = {
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.2,
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

    const [showCropType, setShowCropType] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleCheckboxChange = () => {
        setIsLoading(true); // Start loading
        setTimeout(() => {
            setShowCropType((prevShowCropType) => !prevShowCropType); // Toggle the showCropType state after 2 seconds
            setIsLoading(false); // Stop loading
        }, 2000); // 2-second delay
    };
    const imageUrl = "test2.png";
    const imageBounds: [LatLngTuple, LatLngTuple] = [
        [47.3847362604729, 29.065046060897334], // Southwest corner of the image
        [47.376736604729, 29.1048660897334], // Northeast corner of the image
    ];



    return (
        <>
            <MapContainer
                center={[47.3814031, 29.0780993]} // Initial position (latitude, longitude)
                zoom={15} // Initial zoom level
                style={{height: '100%', width: '100%'}} // Map size
            >

                <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <ImageOverlay url={imageUrl} bounds={imageBounds}/>
                {territories.map((territory) => (
                    <Polygon
                        key={territory.id}
                        positions={territory.coordinates}
                        eventHandlers={{
                            click: () => handlePolygonClick(territory),
                            mouseover: (e) => handlePolygonMouseOver(e, territory.id),
                            mouseout: (e) => handlePolygonMouseOut(e),
                        }}
                    />
                ))}


            </MapContainer>



        </>
    );
};

export default Cadastral;