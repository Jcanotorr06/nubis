import { Container, Box, Text, useMediaQuery, HStack, IconButton, Icon } from '@chakra-ui/react';
import { ConnectButton } from '.';
import { FaEllipsisH } from 'react-icons/fa';
import InfoMenu from './InfoMenu';


interface Props{
    handleOpenModal: () => void
}

const Footer = ({handleOpenModal}:Props) => {
    const [lessThan900] = useMediaQuery(['(max-width: 900px)'])


    return (
        <Box w="100%" py="1rem" bg="transparent" as="footer">
            <Container maxW="container.xl" as="nav">
                {
                    lessThan900 && (
                        <HStack spacing={2} justifyContent="space-between" w="full">
                            <ConnectButton handleOpenModal={handleOpenModal}/>
                            <InfoMenu/>
                        </HStack>
                    )
                }
                <Text fontSize="smaller" fontWeight="medium" color="gray" textAlign="center" marginTop="1rem">
                    © 2021 Nubis - All Rights Reserved
                </Text>
            </Container>
        </Box>
    )
}

export default Footer
