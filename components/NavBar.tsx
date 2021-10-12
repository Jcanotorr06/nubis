import { Flex, Container, Box, Text, IconButton, useColorMode, HStack } from '@chakra-ui/react';
import { ConnectButton } from '.';
import Image from 'next/image'
import logo from '../public/apple-touch-icon.png'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

interface Props{
    handleOpenModal: () => void
}


const NavBar = ({handleOpenModal}:Props) => {

    const {colorMode, toggleColorMode} = useColorMode()

    return (
        <Box w="100%" py="1rem" bg="transparent" as="header">
            <Container maxW="container.xl" as="nav">
                <Flex justifyContent="space-between" alignItems="center">
                    <Flex alignItems="center">
                        <Box>
                            <Image src={logo} height="50px" width="50px" alt="logo"/>
                        </Box>
                        <Text fontSize="3xl" fontWeight="black">
                            Nubis
                        </Text>
                    </Flex>
                    <HStack spacing="1rem">
                        <IconButton aria-label="theme" onClick={toggleColorMode} borderRadius="full">
                            {colorMode==='light'?
                                <MoonIcon color="#8287ff"/>
                                :
                                <SunIcon color="#fee6ac"/>
                            }
                        </IconButton>
                        <ConnectButton handleOpenModal={handleOpenModal}/>
                    </HStack>
                </Flex>        
            </Container>
        </Box>
    )
}

export default NavBar
