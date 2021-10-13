import { Flex, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import { activeTokenContext, settingsContext, tokenContext } from "../context/Context"
import { ReactNode, useEffect, useState } from "react"
import { NavBar, Footer, AccountModal } from "."
import NextNprogress from 'nextjs-progressbar';
import { Tokens } from "../tokens/Tokens"


type Props = {
    children?: ReactNode
}


interface token{
    name: string
    address:string
    symbol:string
    decimals:Number
    network:Number
    img:string
}

interface settings{
    slippage: number
    deadline: number
}


const Layout:React.FC<Props> = ({children}:Props) => {
    const bg = useColorModeValue('#f2f6fa', "#15163a")
    const [activeTokens, setActiveTokens] = useState<token[]>([])
    const [settings, setSettings] = useState<settings>({slippage: 1000, deadline: 60})
    const accountModal = useDisclosure()

    useEffect(() => {
        let x:token[] = Tokens.filter(el => {
            return(
                el.symbol === 'MATIC'
                || el.symbol === 'USDT'
            )
        })
        setActiveTokens([x[0], x[1]])
    }, [])

    return (
        <tokenContext.Provider value={Tokens}>
            <activeTokenContext.Provider value={{activeTokens, setActiveTokens}}>
                <settingsContext.Provider value={{settings, setSettings}}>
                    <NextNprogress
                        color="#7f84fe"
                        startPosition={0.3}
                        stopDelayMs={200}
                        height={5}
                        showOnShallow={true}
                    />
                    <Flex
                        flexDir="column"
                        alignItems="center"
                        justifyContent="space-between"
                        h="100vh"
                        bg={bg}
                    >
                        <NavBar handleOpenModal={accountModal.onOpen}/>
                        <AccountModal isOpen={accountModal.isOpen} onClose={accountModal.onClose}/>
                        {children}
                        <Footer handleOpenModal={accountModal.onOpen}/>
                    </Flex>
            </settingsContext.Provider>
            </activeTokenContext.Provider>
        </tokenContext.Provider>
    )
}



export default Layout
