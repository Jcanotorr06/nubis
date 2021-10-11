import { Flex, useColorModeValue } from "@chakra-ui/react"
import { ReactNode } from "react"

type Props = {
    children?: ReactNode
}



const Layout = ({children}:Props) => {
    const bg = useColorModeValue('#f2f6fa', "#15163a")
    return (
        <Flex
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
            h="100vh"
            bg={bg}
        >
            {children}
        </Flex>
    )
}

export default Layout
