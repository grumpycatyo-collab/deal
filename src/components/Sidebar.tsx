import React from 'react';
import {
    Box,
    VStack,
    Heading,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export const Sidebar: React.FC = () => {
    return (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            h="100vh"
            w="300px" // Increased width
            bg="gray.900" // Black theme
            color="white"
            p={5}
        >
            <Heading mb={10}>DEAL</Heading>
            <VStack align="stretch" spacing={4}>
                <Menu>
                    {/*_expanded={{ bg: 'gray.700' }}*/}
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}
                                _hover={{ textDecoration: 'none' }}
                                outline="1px solid" // Outline property
                                outlineColor="blue" // Outline color
                                _focus={{ outline: '2px solid', outlineColor: 'red' }} >
                        Dropdown 1
                    </MenuButton>
                    <MenuList>
                        <MenuItem color={"black"}>Option 1</MenuItem>
                        <MenuItem color={"black"}>Option 2</MenuItem>
                        <MenuItem color={"black"}>Option 3</MenuItem>
                        {/* Add more options as needed */}
                    </MenuList>
                </Menu>
                {/* Removed additional menus */}
            </VStack>
        </Box>
    );
};

export default Sidebar;