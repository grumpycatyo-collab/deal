import React from 'react';

import { Link } from 'react-router-dom';
import {
    Box,
    VStack,
    Heading,
    Button,
    Divider,
    Spacer,
    Container,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react';
import {
    ViewIcon as MapIcon,
    SunIcon as BugIcon,
    InfoIcon as DocumentIcon,
    AtSignIcon,
    ChevronDownIcon
} from '@chakra-ui/icons';


export const Sidebar: React.FC = () => {
    return (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            h="100vh"
            w="400px" // Increased width
            bg="gray.900" // Black theme
            color="white"
            p={5}

        >
            <Heading mb={10}>DEAL</Heading>
            <VStack align="stretch" spacing={4}>

                <Menu>
                    <MenuButton
                        as={Button}
                        leftIcon={<MapIcon />}
                        justifyContent="flex-start"
                        color='white'
                        variant="ghost"
                        _hover={{ bg: 'gray.700', color: 'white' }}
                        iconSpacing={4}
                        rightIcon={<ChevronDownIcon />}
                        textAlign={"left"}
                    >
                        Segmented & Cadastral Data
                    </MenuButton>
                    <MenuList bgColor={'gray.900'}>
                        <Link to="/" >
                            <MenuItem bgColor={'gray.900'} _hover={{ bg: 'gray.700', color: 'white' }}>
                                Segmented
                            </MenuItem>
                        </Link>
                        <Link to="/cadastral"  >
                            <MenuItem bgColor={'gray.900'} _hover={{ bg: 'gray.700', color: 'white' }}>
                                Cadastral
                            </MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
                <Link to="/ndvi">
                <Button
                    color='white'
                    leftIcon={<BugIcon />}
                    justifyContent="flex-start"
                    variant="ghost"
                    _hover={{ bg: 'gray.700', color: 'white' }} // Adjust hover styles
                    iconSpacing={4}
                >
                   Health Control
                </Button>
                </Link>


                {/* Spacer to push the lower part to the bottom */}
                <Spacer my={80} />

                {/* Divider */}
                <Divider borderColor="gray.600" my={4} />

                {/* Documentation and Profile */}
                <VStack align={"right"}>
                <Button
                    color='white'
                    leftIcon={<DocumentIcon />}
                    justifyContent="flex-start"
                    variant="ghost"
                    _hover={{ bg: 'gray.700', color: 'white' }} // Adjust hover styles
                    iconSpacing={4}
                >
                    Documentation
                </Button>
                <Button
                    color='white'
                    leftIcon={<AtSignIcon />}
                    justifyContent="flex-start"
                    variant="ghost"
                    _hover={{ bg: 'gray.700', color: 'white' }} // Adjust hover styles
                    iconSpacing={4}
                >
                    Profile
                </Button>
                </VStack>
            </VStack>
        </Box>
    );
};

export default Sidebar;