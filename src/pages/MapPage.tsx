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
        id: '1',
        name: '34hj2k',
        coordinates: [
            [47.3882, 29.0643],
            [47.3839, 29.0661],
            [47.3817, 29.0833],
            [47.3862, 29.08431]
        ],
        cropType:'unsown',
        type:"segment"

    },

    {
        id: '2',
        name: '192b3',
        coordinates: [
            [47.3856346, 29.0843418],
            [47.3817501, 29.0835008],
            [47.3811400, 29.0900188],
            [47.3850855, 29.0908598]
        ],
        cropType:'unsown',
        type:"segment"

    },
    {
        id: '3',
        name: '3c4',
        coordinates: [
            [47.3850652, 29.0908298],
            [47.3810993, 29.0900188],
            [47.3797773, 29.1084614],
            [47.3802044, 29.1081911],
            [47.3834992, 29.1071398]
        ],
        cropType:'unsown',
        type:"segment"

    },

    {
        id: '4',
        name: 'fd89s',
        coordinates: [
            [47.3777867, 29.1027889],
            [47.3772968, 29.1088570],
            [47.3728556, 29.1105607],
            [47.3730453, 29.1078534],
            [47.3713224, 29.1082968],
            [47.3711328, 29.1061963],
            [47.3777551, 29.1027422],

        ],
        cropType:'wheat',
        type:"segment"

    },

    {
        id: '5',
        name: '4c32',
        coordinates: [
            [47.3711486, 29.1061030],
            [47.3710695, 29.1050994],
            [47.3778816, 29.1016219],
            [47.3777235, 29.1026955],
        ],
        cropType:'wheat',
        type:"segment"

    },
    {
        id: '6',
        name: '5456sd',
        coordinates: [
            [47.3777867, 29.1016919],
            [47.3710221, 29.1050761],
            [47.3709905, 29.1040258],
            [47.3779132, 29.1004783],
        ],
        cropType:'wheat',
        type:"segment"

    },
    {
        id: '7',
        name: 'f4fsda5',
        coordinates: [
            [47.3779132, 29.1004783],
            [47.3759850, 29.1014352],
            [47.3757480, 29.0968141],
            [47.3782292, 29.0954371],
        ],
        cropType:'corn',
        type:"segment"

    },
    {
        id: '8',
        name: 'fas5f1',
        coordinates: [
            [47.3759692, 29.1013652],
            [47.3757163, 29.0967675],
            [47.3745468, 29.0974209],
            [47.3746732, 29.1020420],
        ],
        cropType:'corn',
        type:"segment"

    },

    {
        id: '9',
        name: 'f7ds7a8',
        coordinates: [
            [47.3746732, 29.1020420],
            [47.3745152, 29.0974676],
            [47.3732665, 29.0981444],
            [47.3734404, 29.1026955],
        ],
        cropType:'corn',
        type:"segment"

    },
    {
        id: '10',
        name: '8c9z0',
        coordinates: [
            [47.3734404, 29.1026955],
            [47.3732191, 29.0981911],
            [47.3720337, 29.0988913],
            [47.3721760, 29.1033257],
        ],
        cropType:'corn',
        type:"segment"

    },
    {
        id: '11',
        name: 'b8v9c',
        coordinates: [
            [47.3721760, 29.1033257],
            [47.3719863, 29.0988679],
            [47.3705005, 29.0997081],
            [47.3706270, 29.0999182],
            [47.3708008, 29.1040025],
        ],
        cropType:'corn',
        type:"segment"
    },
    {
        id: '12',
        name: 'a3f',
        coordinates: [
            [47.3792576, 29.0836661],
            [47.3724228, 29.0840536],
            [47.3655496, 29.1023389],
            [47.3782705, 29.0952905],
        ],
        cropType:'wheat',
        type:"segment"

    },
    {
        id: '13',
        name: 'mpn9',
        coordinates: [
            [47.3792326, 29.0836292],
            [47.3724353, 29.0839244],
            [47.3787078, 29.0710822],
            [47.3797870, 29.0705539],
            [47.3801278, 29.0709787],
            [47.3804900, 29.0711360],
            [47.3810866, 29.0709944],
        ],
        cropType:'alfafa',
        type:"segment"

    },

    {
        id: '14',
        name: 'f8a',
        coordinates: [
            [47.3835686, 29.0664792],
            [47.3815160, 29.0833959],
            [47.3803365, 29.0973750],
            [47.3795371, 29.1077550],
            [47.3773631, 29.1088491],
            [47.3784745, 29.0936463],
            [47.3793421, 29.0830647],
            [47.3811163, 29.0710004],
            [47.3815550, 29.0669693],
            [47.3825883, 29.0664798],
        ],
        cropType:'alfafa',
        type:"segment"

    },
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
        cropType:'wheat',
        type:"cadastral"


    },

    {
        id: '15',
        name: '2ffasa',
        coordinates: [
            [47.3838397, 29.0424463],
            [47.3899469, 29.0391254],
            [47.3950911, 29.0362170],
            [47.3986682, 29.0335093],
            [47.3986682, 29.0335093],
            [47.4023834, 29.0493642],
            [47.3875370, 29.0591015],
            [47.3877735, 29.0549526],
            [47.3872857, 29.0492970],
            [47.3857333, 29.0479213],
            [47.3842548, 29.0429645],
            [47.3838113, 29.0425059],

        ],
        cropType:'forest',
        type:"segment"

    },


];


export const MapPage: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedTerritory, setSelectedTerritory] = useState<TerritoryData | null>(null);
    const [hoveredTerritoryId, setHoveredTerritoryId] = useState<string | null>(null);

    const defaultStyle = {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.2,
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

    const getDefaultStyle = (territoryType: string): L.PathOptions => {
        return territoryType === "segment" ? {
            color: 'red',
            fillColor: 'red',
            fillOpacity: 0.3,
        } : {
            color: 'green',
            fillColor: 'green',
            fillOpacity: 0.1,
        };
    };



    const cropColorMapping: Record<CropType, string> = {
        wheat: 'yellow',
        corn: 'green',
        unsown: 'white',
        alfafa: 'pink',
        forest: 'gray'
    };

    const getCropStyle = (cropType: CropType | undefined): L.PathOptions => {
        const color = cropType && cropColorMapping[cropType] !== 'none' ? cropColorMapping[cropType] : 'none';
        return {
            color: color,
            fillColor: color,
            fillOpacity: color === 'none' ? 0 : 0.9,
        };
    };


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
                    pathOptions={
                        selectedTerritory?.id === territory.id
                            ? selectedStyle
                            : hoveredTerritoryId === territory.id
                                ? hoverStyle
                                : showCropType && territory.cropType
                                    ? getCropStyle(territory.cropType)
                                    : getDefaultStyle(territory.type) // Use the function to determine the style
                    }
                    eventHandlers={{
                        click: () => handlePolygonClick(territory),
                        mouseover: (e) => handlePolygonMouseOver(e, territory.id),
                        mouseout: (e) => handlePolygonMouseOut(e),
                    }}
                />
        ))}


        </MapContainer>


            <Drawer isOpen={isOpen} placement="right" onClose={handleCloseDrawer}>
                <DrawerOverlay sx={{
                    background: 'rgba(0, 0, 0, 0)',
                }}> </DrawerOverlay>
                <DrawerContent bg="gray.900" maxWidth="400px" >
                    <DrawerHeader color="white">See paramaters:</DrawerHeader>
                    <DrawerBody color="white" p={5}>
                        <Text mb={4}>Information about "{selectedTerritory?.name}"</Text>
                        <Text mb={4}>Type of territory : {selectedTerritory?.type}</Text>
                        <Box
                            mb={4}
                            p={4}
                            borderRadius="lg"
                            borderWidth="1px"
                            borderColor="whiteAlpha.500"
                            backgroundColor="whiteAlpha.100"
                        >
                            {isLoading ? (
                                <Spinner color='white ' />// Show loading text when isLoading is true
                            ) : (
                                <Checkbox
                                    colorScheme="green"
                                    isChecked={showCropType}
                                    onChange={handleCheckboxChange}
                                >
                                    See the type of crop
                                </Checkbox>
                            )}
                        </Box>
                        {showCropType && (
                            <VStack spacing={2} alignItems="flex-start">
                                <Text>Crop Types Legend:</Text>
                                <HStack>
                                    <Box w="20px" h="20px" bg="yellow.500" borderRadius="md" mr={2} />
                                    <Text>Wheat</Text>
                                </HStack>
                                <HStack>
                                    <Box w="20px" h="20px" bg="green.500" borderRadius="md" mr={2} />
                                    <Text>Corn</Text>
                                </HStack>
                                <HStack>
                                    <Box w="20px" h="20px" bg="white" borderRadius="md" mr={2} />
                                    <Text>Unsown</Text>
                                </HStack>
                                <HStack>
                                    <Box w="20px" h="20px" bg="pink.500" borderRadius="md" mr={2} />
                                    <Text>Alfafa</Text>
                                </HStack>
                                <HStack>
                                    <Box w="20px" h="20px" bg="gray" borderRadius="md" mr={2} />
                                    <Text>Forest</Text>
                                </HStack>
                            </VStack>
                        )}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default MapPage;