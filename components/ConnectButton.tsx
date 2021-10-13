import { Box, Text, Button } from '@chakra-ui/react'
import { useEtherBalance, useEthers } from '@usedapp/core'
import { formatEther } from "@ethersproject/units";
import IdentIcon from './IdentIcon';
import {ChainId} from '@usedapp/core'
import Balance from './Balance';

type Props = {
    handleOpenModal: () => void
}

const ConnectButton = ({handleOpenModal}:Props) => {
    const {activateBrowserWallet, account, chainId} = useEthers()
    const etherBalance = useEtherBalance(account)

    const handleConnectWallet = () => {
        activateBrowserWallet()
    }

    return account&&chainId ? (
        chainId === ChainId.Polygon ?(
            <Balance handleOpenModal={handleOpenModal}/>
        ):(
            <Button colorScheme="red">Wrong Network</Button>

        )
        ): (
        <Button bg="#7508f9" _hover={{bg: '#5b08bf'}} _active={{bg:'#5b08bf'}} color="white" onClick={handleConnectWallet}>Connect to a wallet</Button>
    )
}

export default ConnectButton
