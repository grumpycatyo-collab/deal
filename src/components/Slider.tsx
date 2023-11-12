import React from 'react';
import { Box, VStack, Button, useColorModeValue } from '@chakra-ui/react';
import {Link} from "react-router-dom";

export const FloatingContainer = () => {
    const bgColor = useColorModeValue('white', 'gray.700'); // Color mode-aware background color
    const hoverBgColor = useColorModeValue('gray.100', 'gray.600'); // Color mode-aware hover background color

    return (
        <Box
            position="fixed" // Fixed position to float over the content
            top="13%" // Positioned in the middle of the screen vertically
            left="25rem" // Positioned 2rem from the left edge of the screen
            transform="translateY(-50%)" // Center the box vertically
            borderRadius="xl" // Rounded corners

            p={4} // Padding
            zIndex={1000} // Ensure it's above other content
        >
           <VStack spacing={4} alignItems="flex-start">
                <Link to={"/ndvi"}>
                <Button
                    colorScheme="teal"
                    variant="solid"
                    size="md"
                    w="full" // Full width of the container
                    _hover={{ bg: hoverBgColor, color:'black'}} // Hover background color
                >
                    NDVI
                </Button>
                </Link>
                <Link to={"/ndre"}>
                <Button
                    colorScheme="orange"
                    variant="solid"
                    size="md"
                    w="full"
                    _hover={{ bg: hoverBgColor, color:'black' }}
                >
                    NDRE
                </Button>
                </Link>
                <Link to={"/mcari"}>
                <Button

                    colorScheme="purple"
                    variant="solid"
                    size="md"
                    w="full"
                    _hover={{ bg: hoverBgColor, color:'black' }}
                >
                    MCARI
                </Button>
                </Link>
            </VStack>
        </Box>
    );
};

export default FloatingContainer;