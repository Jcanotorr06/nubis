import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Text, IconButton, Icon, Image, HStack, NumberInput, NumberInputField, VStack, useColorModeValue, useDisclosure, useBreakpointValue } from '@chakra-ui/react'
import { useEthers, ChainId } from '@usedapp/core'
import { useState, useEffect, useContext, MouseEvent, ChangeEvent } from 'react'
import Head from 'next/head'
import { activeTokenContext, settingsContext, tokenContext } from '../context/Context'
import {MdTune} from 'react-icons/md'
import { BigNumber } from 'ethers'

interface Props{
    onFirstOpen: () => void
    onSecondOpen: () => void
    onSettingsOpen: () => void
}

interface swap{
    from: number | null
    to: number | null
}

const SwapWidget = ({onFirstOpen, onSecondOpen, onSettingsOpen}:Props) => {
    const {activateBrowserWallet, account, chainId} = useEthers()
    const tokens = useContext(tokenContext)
    const {activeTokens, setActiveTokens} = useContext(activeTokenContext)
    const {settings:{slippage}} = useContext(settingsContext)
    const [from, setFrom] = useState<string>()
    const [to, setTo] = useState<string>()

    const handleConnectWallet = () => {
        activateBrowserWallet()
    }

    const handleReverseTokens = () => {
        activeTokens && (
            setActiveTokens(activeTokens.slice().reverse())
        )
    }

    const handleMax = (e:MouseEvent<HTMLButtonElement>) => {
        if(e.currentTarget.name === 'from'){
            setFrom(activeTokens[0].balance ? (parseFloat(activeTokens[0].balance.toString())/1E18).toString():'0')
        }else{
            setTo(activeTokens[1].balance ? (parseFloat(activeTokens[1].balance.toString())/1E18).toString():'0')
        }
    }

    const checkBalanceOverflow = (val:string, x:string) =>{
        const v = BigNumber.from(val)
        if(x==='from' && activeTokens[0].balance){
            console.log(v.gt(activeTokens[0].balance))
        }
    }

    const handleValueInput = (e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.name==="from"){
            setFrom(e.target.value)
        }else{
            setTo(e.target.value)
        }
    }


    const bg = useColorModeValue('white', "#24274d")
    const bgDark = useColorModeValue('#f2f6fa', "#15163a")
    const bgBtn = useColorModeValue('#eceefe', '#3a3c65')
    const swapWidth = useBreakpointValue({base: '95%',xl: '35%', lg:'35%', md: '60%', sm:'95%'})
    const swapHeight = useBreakpointValue({base: '100%',xl: '70%', lg: '75%', md:'85%'})
    const tokenWidth = useBreakpointValue({base: '15px', xl: '25px', lg:'25px', md:'20px'})

    useEffect(() => {

    }, [])

    return activeTokens[0] ?(
        <Flex w="100%" justifyContent="center" alignItems="center" h="100%">

        <Head>
            <title>Nubis | Swap</title>
        </Head>
            <Flex direction="column" justifyContent="space-between" padding="2rem" borderRadius="40px" bg={bg} h={swapHeight} w={swapWidth}>
                <Flex justifyContent="space-between">
                    <Text fontSize="lg" fontWeight="bold" >Swap</Text>
                    <IconButton aria-label="button" borderRadius="full" onClick={onSettingsOpen}>
                        <Icon as={MdTune}/>
                    </IconButton>
                </Flex>
                <VStack direction="column" justifyContent="space-between" alignItems="center" spacing="1rem" h="100%" paddingY="1rem">
                    <Box w="100%">
                        <HStack justifyContent="space-between" alignItems="center" w="full">
                            <Text colorScheme="gray" fontSize="md" opacity="50%" marginBottom="1rem">
                                From
                            </Text>
                            <Button variant="link" fontSize="md" opacity="50%" marginBottom="1rem" onClick={handleMax} name="from">
                                Balance: {activeTokens[0].balance? (parseFloat(activeTokens[0].balance.toString())/1E18).toFixed(activeTokens[0].decimals) : 'Cannot get balance'}
                            </Button>
                        </HStack>
                        <HStack bg={bgDark} spacing="1rem" minWidth="full" justifyContent="space-between"  border="1px solid" borderColor="gray.500" borderRadius="xl" p="0.5rem" alignItems="center" >
                            <NumberInput placeholder="0.0" w="80%" borderRight="1px solid" value={from} name="from">
                                <NumberInputField border="none" fontSize="2xl" placeholder="0.00" _placeholder={{color: '#888'}} _focus={{outline: 'none'}} onChange={handleValueInput} name="from" />
                            </NumberInput>
                                
                            <Button onClick={onFirstOpen} size="lg" bg="transparent" _hover={{bg:'transparent', color: 'purple'}} _active={{bg:'transparent'}} w="40%">
                                <HStack w="100%" justifyContent="space-evenly">
                                    <Text fontSize="md">
                                        {activeTokens[0].symbol} 
                                    </Text>
                                    <Image alt="token image" boxSize={tokenWidth} src={activeTokens[0].img} borderRadius="full"/>
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
                        <HStack justifyContent="space-between" alignItems="center" w="full">
                            <Text colorScheme="gray" fontSize="md" opacity="50%" marginBottom="1rem">
                                To
                            </Text>
                            <Button variant="link" fontSize="md" opacity="50%" marginBottom="1rem" onClick={handleMax} name="to">
                                Balance: {activeTokens[1].balance? (parseFloat(activeTokens[1].balance.toString())/1E18).toFixed(activeTokens[1].decimals) : 'Cannot get balance'}
                            </Button>
                        </HStack>
                        <HStack bg={bgDark} spacing="1rem" minWidth="full" justifyContent="space-between"  border="1px solid" borderColor="gray.500" borderRadius="xl" p="0.5rem" alignItems="center">
                            <NumberInput placeholder="0.0" w="80%" borderRight="1px solid" value={to}>
                                <NumberInputField border="none" fontSize="2xl" placeholder="0.00" _placeholder={{color: '#888'}} _focus={{outline: 'none'}} onChange={handleValueInput} name="to" />
                            </NumberInput>
                                
                            <Button onClick={onSecondOpen} size="lg" bg="transparent" _hover={{bg:'transparent', color: 'purple'}} _active={{bg:'transparent'}} w="40%">
                                <HStack w="100%" justifyContent="space-evenly">
                                    <Text fontSize="md">
                                        {activeTokens[1].symbol} 
                                    </Text>
                                    <Image alt="token image" boxSize={tokenWidth} src={activeTokens[1].img} borderRadius="full" />
                                    <ChevronDownIcon/>
                                </HStack>
                            </Button>
                        </HStack>
                        {
                            <Text fontWeight="bold" color="red">Not enough balance</Text>

                        }
                    </Box>
                    <HStack justifyContent="space-between" w="100%">
                        <Text fontSize="md">
                            Slippage Tolerance
                        </Text>
                        <Text fontSize="md">
                            {slippage/1000}%
                        </Text>
                    </HStack>
                </VStack>
                {account ? 
                    chainId === ChainId.Polygon ?
                    <Button size="lg" bg={bgBtn} fontWeight="bold" borderRadius="2xl" borderX="4px solid" borderTop="2px solid" borderBottom="8px solid" borderColor="#7f84fe" color="#7f84fe" py="2rem" w="100%" >
                        Swap
                    </Button>
                    :
                    <Button size="lg" colorScheme="red" fontWeight="bold" borderRadius="2xl" borderX="4px solid" borderTop="2px solid" borderBottom="8px solid" py="2rem" w="100%" >
                        Wrong Network
                    </Button>
                :   
                    <Button size="lg" bg={bgBtn} fontWeight="bold" borderRadius="2xl" borderX="4px solid" borderTop="2px solid" borderBottom="8px solid" borderColor="#7f84fe" color="#7f84fe" py="2rem" onClick={handleConnectWallet} w="100%" >
                        Connect Wallet
                    </Button>
                }
            </Flex>
        </Flex>
    ) : <h1>Loading</h1>
}

export default SwapWidget
