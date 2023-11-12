import React from 'react';
import { Image } from '@chakra-ui/react';

export const FloatingLogo: React.FC = () => {
    return (
        <Image
            src="big_handshake.png" // Replace with the path to your logo image
            alt="HAND_DEAL"
            boxSize="70px" // Set the size of the floating logo
            position="fixed" // Use fixed positioning
            bottom="40px" // Distance from the bottom
            right="40px" // Distance from the right
            zIndex="2000" // Ensure it's above most other elements
        />
    );
};

export default FloatingLogo;