import { Flex, Container, Box, Text } from '@chakra-ui/react';
import { ConnectButton } from '.';

interface Props{
    handleOpenModal: () => void
}


const NavBar = ({handleOpenModal}:Props) => {
    return (
        <Box w="100%" py="1rem" bg="gray.700" as="header">
            <Container maxW="container.xl" as="nav">
                <Flex justifyContent="space-between" alignItems="center">
                    <Text fontSize="3xl" fontWeight="black" color="white">
                        Nubis
                    </Text>
                    <ConnectButton handleOpenModal={handleOpenModal}/>
                </Flex>        
            </Container>
        </Box>
    )
}

export default NavBar
