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

export const NDVI: React.FC = () => {

    const imageUrl = "test2.png";
    const imageBounds: [LatLngTuple, LatLngTuple] = [
        [47.3847362604729, 29.065046060897334], // Southwest corner of the image
        [47.376736604729, 29.1048660897334], // Northeast corner of the image
    ];



    return (

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



            </MapContainer>


    );
};

export default NDVI;