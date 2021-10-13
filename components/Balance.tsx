import { Box, Text, Button } from '@chakra-ui/react'
import { useEtherBalance, useEthers } from '@usedapp/core'
import { formatEther } from "@ethersproject/units";
import {IdentIcon} from '.';

type Props = {
    handleOpenModal: () => void
}

const Balance = ({handleOpenModal}:Props) => {
    const {account} = useEthers()
    const etherBalance = useEtherBalance(account)

    return (
        <Box
            display="flex"
            alignItems="center"
            background="gray.700"
            borderRadius="xl"
            overflow="hidden"
            py="0"
            >
                <Box px="3">
                    <Text color="white" fontSize="md">
                        {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(5)}
                    </Text>
                </Box>
                <Button
                    onClick={handleOpenModal}
                    bg="gray.800"
                    border="1px solid transparent"
                    _hover={{
                        border: "1px solid",
                        borderColor: "blue.400",
                        backgroundColor: "gray.700"
                    }}
                    borderRadius="xl"
                    m="1px"
                    px={3}
                    height="45px"
                >
                    <Text color="white" fontSize="md" fontWeight="medium" mr="2">
                        {
                            account &&
                                `${account.slice(0,6)}...${account.slice(account.length-4,account.length)}`
                        }
                    </Text>
                    <IdentIcon/>
                </Button>
            </Box>
    )
}

export default Balance
