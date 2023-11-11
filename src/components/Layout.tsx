import React, { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import Sidebar from './Sidebar';

// Define a type for the props expected by the Layout component
type LayoutProps = {
    children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Box display="flex">
            <Sidebar />
            <Box
                pl="300px" // Padding left should be equal to the width of the sidebar
                w="full" // Take full width of the remaining space
                ml={"20px"}
                minH="100vh" // Minimum height to fill the viewport height
            >
                {children}
            </Box>
        </Box>
    );
};

export default Layout;