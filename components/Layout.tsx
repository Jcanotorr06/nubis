import { Flex, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import { tokenContext } from "../context/Context"
import { ReactNode, useEffect, useState } from "react"
import { NavBar, Footer, AccountModal } from "."
import axios from "axios"

type Props = {
    children?: ReactNode
}

interface fetch{
    fetched: boolean
    tokens: token[]
    error: string | null
}

interface token{
    symbol:string
    address:string
    decimals:Number
    img:string
    network:Number
}

interface data{
    tokens:token[]
}

const Layout:React.FC<Props> = ({children}:Props) => {
    const bg = useColorModeValue('#f2f6fa', "#15163a")
    const [response, setResponse] = useState<fetch>({fetched: false, tokens: [], error: null})
    const {isOpen, onOpen, onClose} = useDisclosure()

    useEffect(() => {
        const getData = async () => {
            await axios.get('https://apiv5.paraswap.io/tokens/137')
            .then(res => {
                let data:data = res.data
                setResponse({fetched: true, tokens:data.tokens, error:null})
            })
            .catch(err =>{
                setResponse({fetched:true, tokens:[], error:err})
            })
        }
        getData()
    }, [])

    return (
        <tokenContext.Provider value={response}>
            <Flex
                flexDir="column"
                alignItems="center"
                justifyContent="space-between"
                h="100vh"
                bg={bg}
            >
                <NavBar handleOpenModal={onOpen}/>
                    <AccountModal isOpen={isOpen} onClose={onClose}/>
                {children}
                <Footer/>
            </Flex>
        </tokenContext.Provider>
    )
}



export default Layout
