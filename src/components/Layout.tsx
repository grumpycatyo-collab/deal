import React, {ReactNode, useEffect, useState} from 'react';
import { Box } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import LoadingWelcomeScreen from "./LoadingWelocmeScreen";

// Define a type for the props expected by the Layout component
type LayoutProps = {
    children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isFLoading, setIsFLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isFLoading) {
        return <LoadingWelcomeScreen />;
    }
    return (
        <Box display="flex">
            <Sidebar />
            <Box
                pl="400px" // Padding left should be equal to the width of the sidebar
                w="full" // Take full width of the remaining space
               // ml={"20px"}
                minH="100vh" // Minimum height to fill the viewport height
            >
                {children}
            </Box>
        </Box>
    );
};

export default Layout;