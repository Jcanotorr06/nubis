import { Flex } from "@chakra-ui/react"
import { ReactNode } from "react"

type Props = {
    children?: ReactNode
}

const Layout = ({children}:Props) => {
    return (
        <Flex
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
            h="100vh"
            bg="gray.100"
        >
            {children}
        </Flex>
    )
}

export default Layout
