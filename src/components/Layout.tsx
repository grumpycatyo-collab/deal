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
            <Box ml="200px" p={5} w="full">
                {children}
            </Box>
        </Box>
    );
};

export default Layout;