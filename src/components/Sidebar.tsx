import React from 'react';
import { Box, VStack, Link, Heading } from '@chakra-ui/react';

export const Sidebar: React.FC = () => {
    return (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            h="100vh"
            w="200px"
            bg="blue.500"
            color="white"
            p={5}
        >
            <Heading mb={10}>My App</Heading>
            <VStack align="stretch" spacing={4}>
                <Link href="#">Placeholder 1fdsfs</Link>
                <Link href="#">Placeholder 2</Link>
                <Link href="#">Placeholder 3</Link>
                {/* Add more placeholders as needed */}
            </VStack>
        </Box>
    );
};

export default Sidebar;