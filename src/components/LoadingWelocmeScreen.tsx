// Import necessary dependencies
import React from 'react';
import { Center, Spinner, Image, Box } from '@chakra-ui/react';

// Import your logo image
import logo from 'big_handshake.png';

// Create the LoadingWelcomeScreen component
const LoadingWelcomeScreen: React.FC = () => {
    return (
        <Box height="100vh" width="100vw" bg="gray.100">
            {/* Center the content vertically and horizontally */}
            <Center height="100%">
                {/* Content inside a box with some padding */}
                <Box textAlign="center" p={8}>
                    {/* Your logo */}
                    <Image src={'big_handshake.png'} alt="Logo" mb={4} />
                    <Spinner size="xl" color="gray.700" />
                    <Box mt={4}>
                        <p>Welcome! Loading...</p>
                    </Box>
                </Box>
            </Center>
        </Box>
    );
};

export default LoadingWelcomeScreen;
