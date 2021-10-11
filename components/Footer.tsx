import { Flex, Container, Box, Text, Link } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box w="100%" py="1rem" bg="transparent" as="footer">
            <Container maxW="container.xl" as="nav">
                <Flex justifyContent="space-between" alignItems="center">
                    <Text fontSize="smaller" fontWeight="medium" color="gray.200">
                       © 2021 Nubis - All Rights Reserved
                    </Text>
                    <Link fontSize="smaller" fontWeight="medium" color="gray.200" href="https://github.com/Jcanotorr06/Nubis" target="_blank" rel="noreferrer">
                        Github Repo
                    </Link>
                </Flex>        
            </Container>
        </Box>
    )
}

export default Footer
