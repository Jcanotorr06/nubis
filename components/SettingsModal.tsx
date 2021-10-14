import { WarningTwoIcon } from "@chakra-ui/icons"
import { Modal, ModalContent, ModalHeader, ModalBody, NumberInput, Text, Button, NumberInputField, HStack, Box, InputRightElement, InputGroup, useColorModeValue, ModalCloseButton, ModalOverlay } from "@chakra-ui/react" 
import { useContext, MouseEvent, ChangeEvent } from "react"
import { settingsContext } from "../context/Context"

interface Props{
    isOpen: boolean
    onClose: () => void
}

const SettingsModal = ({isOpen, onClose}:Props) => {
    const bg = useColorModeValue('white', "#24274d")
    const bgDark = useColorModeValue('#f2f6fa', "#15163a")

    const {settings:{slippage, deadline}, setSettings} = useContext(settingsContext)

    const handleSlippageButton = (e:MouseEvent<HTMLButtonElement>) => {
        setSettings({
            slippage: parseInt(e.currentTarget.value),
            deadline: deadline
        })
    }

    const handleSlippageInput = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '' || e.target.value === 'NaN'){
            setSettings({
                slippage: 0,
                deadline: deadline
            })
        }
        else{
            setSettings({
                slippage: parseFloat(e.target.value)*1000,
                deadline: deadline
            })
        }
    }
    
    const handleDeadlineInput = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '' || e.target.value === 'NaN'){
            setSettings({
                slippage: slippage,
                deadline: 0
            })
        }
        else{
            setSettings({
                slippage: slippage,
                deadline: parseFloat(e.target.value)
            })
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl" >
            <ModalOverlay/>
            <ModalContent bg={bg} maxH="lg" w="full" borderRadius="xl">
                <ModalHeader>Settings</ModalHeader>
                <ModalCloseButton/>
                <ModalBody p="1rem">
                    <Box marginY="0.5rem">
                        <Text colorScheme="gray" opacity="50%" marginBottom="1">Slippage Tolerance</Text>
                        <InputGroup size="lg" w="100%" bg={bgDark} alignItems="center" borderRadius="xl">
                            <NumberInput borderRadius="xl" p="1rem" borderColor="transparent" value={slippage/1000} step={0.01}>
                                <NumberInputField _focus={{outline:"none"}} _hover={{outline:"none"}} onChange={handleSlippageInput}/>
                                <InputRightElement height="full" alignItems="center">
                                    <Text>%</Text>
                                </InputRightElement>
                            </NumberInput>
                                <InputRightElement w="50%" alignItems="center" h="100%">
                                    <HStack spacing={3} alignItems="center">
                                        <Button borderRadius="3xl" onClick={handleSlippageButton} bg={slippage === 100 ? "#7f84fe": "initial"} value={100}>0.1%</Button>
                                        <Button borderRadius="3xl" onClick={handleSlippageButton} bg={slippage === 500 ? "#7f84fe": "initial"} value={500}>0.5%</Button>
                                        <Button borderRadius="3xl" onClick={handleSlippageButton} bg={slippage === 1000 ? "#7f84fe": "initial"} value={1000}>1%</Button>
                                    </HStack>
                                </InputRightElement>
                        </InputGroup>
                        {
                            slippage <= 100 && (
                                <HStack p="2" spacing="1rem">
                                    <WarningTwoIcon color="#f9c152"/>
                                    <Text color="#f9c152">Transaction may fail</Text>
                                </HStack>
                            )
                        }
                    </Box>
                    <Box marginY="0.5rem" w="full">
                        <Text colorScheme="gray" opacity="50%" marginBottom="1">Transaction deadline</Text>
                        <InputGroup size="lg" w="100%" bg={bgDark} alignItems="center" borderRadius="xl">
                            <NumberInput borderRadius="xl" p="1rem" borderColor="transparent" value={deadline}>
                                <NumberInputField _focus={{outline:"none"}} _hover={{outline:"none"}} onChange={handleDeadlineInput}/>
                            </NumberInput>
                            <InputRightElement h="100%" alignItems="center" w="25%">
                                <Text>Minutes</Text>
                            </InputRightElement>
                        </InputGroup>

                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default SettingsModal
