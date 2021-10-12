import { ChevronDownIcon, ChevronUpIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Text, IconButton, Image, HStack, NumberInput, NumberInputField, VStack, useColorModeValue } from '@chakra-ui/react'
import { useEthers, ChainId } from '@usedapp/core'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Head from 'next/head'

interface token{
    symbol:string
    address:string
    decimals:Number
    img:string
    network:Number
}

interface tokens{
    tokens:token[]
}

const SwapWidget = () => {
    const {activateBrowserWallet, account, chainId} = useEthers()
    const [activeTokens, setActiveTokens] = useState<token[]>()
    const [tokens, setTokens] = useState<token[]>()

    useEffect(() => {
        const fetchTokens = async () => {
            await axios.get('https://apiv5.paraswap.io/tokens/137')
            .then(res => {
                const t:tokens = res.data
                setTokens(t.tokens)
                console.log(tokens&&tokens[0].symbol)
                setActiveTokens(t.tokens.filter(el => (
                    el.symbol == 'MATIC' || el.symbol == 'USDT'
                )))
            })
            .catch(err => {
                console.log(err)
            })
        }
        fetchTokens()

    }, [])
    
    const handleConnectWallet = () => {
        activateBrowserWallet()
    }

    const handleReverseTokens = () => {
        activeTokens && (
            setActiveTokens(activeTokens.slice().reverse())
        )
    }

    const bg = useColorModeValue('white', "#24274d")
    const bgDark = useColorModeValue('#f2f6fa', "#15163a")
    const bgBtn = useColorModeValue('#eceefe', '#3a3c65')

    return (
        <Flex w="100%" justifyContent="center" alignItems="center" h="100%">
        <Head>
            <title>Nubis | Swap</title>
        </Head>
            <Flex direction="column" justifyContent="space-between" padding="2rem" borderRadius="40px" bg={bg} h="75%" w='30%'>
                <Flex justifyContent="space-between">
                    <Text fontSize="lg" fontWeight="bold" >Swap</Text>
                    <IconButton aria-label="button" borderRadius="full">
                        <HamburgerIcon/>
                    </IconButton>
                </Flex>
                <VStack direction="column" justifyContent="space-between" alignItems="center" spacing="1rem" h="100%" paddingY="1rem">
                    <Box w="100%">
                        <Text colorScheme="gray" fontSize="md" opacity="50%" marginBottom="1rem">
                            From
                        </Text>
                        <HStack bg={bgDark} spacing="10px" minWidth="full" justifyContent="space-between"  border="1px solid" borderColor="gray.500" borderRadius="xl" p="0.5rem" alignItems="center" >
                            <NumberInput placeholder="0.0" w="80%" borderRight="1px solid">
                                <NumberInputField border="none" fontSize="2xl" placeholder="0.00" _placeholder={{color: '#888'}} _focus={{outline: 'none'}} />
                            </NumberInput>
                                
                            <Button size="lg" bg="transparent" _hover={{bg:'transparent', color: 'purple'}} _active={{bg:'transparent'}} w="40%">
                                <HStack   HStack w="100%" justifyContent="space-between">
                                    <Text>
                                        {activeTokens && activeTokens[0].symbol} 
                                    </Text>
                                    <Image alt="token image" boxSize="25px" src={activeTokens && activeTokens[0].img} borderRadius="full"/>
                                    <ChevronDownIcon/>
                                </HStack>
                            </Button>
                        </HStack>
                    </Box>

                    <Button onClick={() => handleReverseTokens()} paddingY="1.25rem" size="xs" aria-label="switch" border="1px solid" borderColor="gray.500" borderRadius="full">
                        <ChevronDownIcon/>
                        <ChevronUpIcon/>
                    </Button>

                    <Box w="100%">
                        <Text colorScheme="gray" fontSize="md" opacity="50%" marginBottom="1rem">
                            To
                        </Text>
                        <HStack bg={bgDark} spacing="10px" minWidth="full" justifyContent="space-between"  border="1px solid" borderColor="gray.500" borderRadius="xl" p="0.5rem" alignItems="center">
                            <NumberInput placeholder="0.0" w="80%" borderRight="1px solid">
                                <NumberInputField border="none" fontSize="2xl" placeholder="0.00" _placeholder={{color: '#888'}} _focus={{outline: 'none'}} />
                            </NumberInput>
                                
                            <Button size="lg" bg="transparent" _hover={{bg:'transparent', color: 'purple'}} _active={{bg:'transparent'}} w="40%">
                                <HStack w="100%" justifyContent="space-between">
                                    <Text>
                                        {activeTokens && activeTokens[1].symbol} 
                                    </Text>
                                    <Image alt="token image" boxSize="25px" src={activeTokens && activeTokens[1].img} borderRadius="full" />
                                    <ChevronDownIcon/>
                                </HStack>
                            </Button>
                        </HStack>
                    </Box>
                    <HStack justifyContent="space-between" w="100%">
                        <Text fontSize="md">
                            Slippage Tolerance
                        </Text>
                        <Text fontSize="md">
                            0.5%
                        </Text>
                    </HStack>
                </VStack>
                {chainId === ChainId.Polygon ?
                    <Button size="lg" bg={bgBtn} fontWeight="bold" borderRadius="2xl" borderX="4px solid" borderTop="2px solid" borderBottom="8px solid" borderColor="#7f84fe" color="#7f84fe" py="2rem" onClick={handleConnectWallet} w="100%" >
                        {account ?
                        'Swap'
                        :'Connect Wallet'
                        }
                    </Button>
                :   <Button size="lg" colorScheme="red" fontWeight="bold" borderRadius="2xl" borderX="4px solid" borderTop="2px solid" borderBottom="8px solid" py="2rem" w="100%" >
                        Wrong Network
                    </Button>
                }
            </Flex>
        </Flex>
    )
}

export default SwapWidget
