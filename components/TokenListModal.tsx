import { QuestionIcon } from '@chakra-ui/icons'
import { Box, Button, Modal, ModalOverlay, Divider, ModalContent, ModalHeader, Input, Image, HStack, ModalBody, Spinner, ModalCloseButton, List, ListItem, Text, useColorModeValue } from '@chakra-ui/react'
import { MouseEvent, useContext } from 'react'
import { activeTokenContext, tokenContext } from '../context/Context'

type Props = {
    n: number
    isOpen: boolean
    onClose: () => void
}


const TokenListModal = ({n, isOpen, onClose}:Props) => {

    const tokens = useContext(tokenContext)
    const {activeTokens, setActiveTokens} = useContext(activeTokenContext)
    const bg = useColorModeValue('white', "#24274d")
    const bgDark = useColorModeValue('#f2f6fa', "#15163a")

    const handleTokenSelect = (e:MouseEvent<HTMLElement>) => {
        if(n === 0){
            setActiveTokens([tokens[parseInt(e.currentTarget.ariaLabel)], activeTokens[1]])
        }
        else if(n === 1){
            setActiveTokens([activeTokens[0], tokens[parseInt(e.currentTarget.ariaLabel)]])
        }
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
            <ModalOverlay/>
            <ModalContent w="full" maxH="2xl" bg={bg} borderRadius="xl">
                <ModalHeader>
                    Select a token <QuestionIcon/>
                </ModalHeader>
                <ModalCloseButton/>
                <ModalBody paddingStart={0} paddingEnd={0}>
                    <Box paddingX="1.5rem">
                        <Input size="lg" borderRadius="xl" placeholder="Search name" p="1rem" bg={bgDark} border="1px solid" />
                        <Text marginTop="1.5rem" fontWeight="medium">Token Name</Text>
                        <Divider marginBottom="0.5rem"/>
                    </Box>
                    <Box overflowY="scroll" maxH="md" paddingY="0.5rem">
                    {
                        
                        <List spacing="0.25rem">
                            {
                                tokens.map((token, i) => (
                                    <ListItem paddingY="1.5rem" justifyContent="left" paddingX="1.5rem" w="full" aria-label={String(i)} key={i} opacity={activeTokens.includes(token) ? "50%" : "100%"} cursor={activeTokens.includes(token) ? 'initial': 'pointer'} _hover={activeTokens.includes(token) ? {bg: 'transparent'} : {bg: bgDark}} onClick={handleTokenSelect}>
                                        <HStack justifyContent="space-between">
                                            <HStack spacing="2">
                                                <Image src={token.img} alt={token.symbol} boxSize="20px" borderRadius="full"/>
                                                <Text>
                                                    {token.symbol}
                                                </Text>
                                            </HStack>
                                            {
                                                token.balance?
                                                <Text>{(parseFloat(token.balance.toString())/1E18).toFixed(8)}</Text>
                                                :<Spinner/>
                                            }
                                        </HStack>   
                                    </ListItem>
                                ))
                            }
                        </List>
                        
                    }
                    </Box>
                    </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default TokenListModal
