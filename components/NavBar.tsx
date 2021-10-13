import { Flex, Container, Box, Text, IconButton, useColorMode, HStack, Icon } from '@chakra-ui/react';
import { ConnectButton } from '.';
import Image from 'next/image'
import logo from '../public/apple-touch-icon.png'
import { InfoIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {FaSun, FaEllipsisH} from 'react-icons/fa'
import Link from 'next/link'

interface Props{
    handleOpenModal: () => void
}


const NavBar = ({handleOpenModal}:Props) => {

    const {colorMode, toggleColorMode} = useColorMode()

    return (
        <Box w="100%" py="1rem" bg="transparent" as="header">
            <Container maxW="container.xl" as="nav">
                <Flex justifyContent="space-between" alignItems="center">
                    <Link href="/">
                        <Flex alignItems="center" _hover={{"cursor":'pointer'}}>
                            <Box>
                                <Image src={logo} height="50px" width="50px" alt="logo"/>
                            </Box>
                            <Text fontSize="3xl" fontWeight="black">
                                Nubis
                            </Text>
                        </Flex>
                    </Link>
                    <HStack spacing="1rem">
                        <IconButton aria-label="mode" onClick={toggleColorMode} borderRadius="full">
                            {colorMode==='light'?
                                <MoonIcon color="#8287ff"/>
                                :
                                <Icon as={FaSun} color="#ffcd54"/>
                            }
                        </IconButton>
                        <ConnectButton handleOpenModal={handleOpenModal}/>
                        <IconButton aria-label="info" borderRadius="full">
                            <Icon as={FaEllipsisH}/>
                        </IconButton>
                    </HStack>
                </Flex>        
            </Container>
        </Box>
    )
}

export default NavBar
