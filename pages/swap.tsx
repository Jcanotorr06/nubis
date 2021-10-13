import { useDisclosure } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { SwapWidget, TokenListModal } from '../components'
import SettingsModal from '../components/SettingsModal'

const Swap:NextPage = () => {
    const firstTokenList= useDisclosure()
    const secondTokenList= useDisclosure()
    const settings = useDisclosure()
    return (
        <>  
            <SettingsModal isOpen={settings.isOpen} onClose={settings.onClose} />
            <TokenListModal isOpen={firstTokenList.isOpen} onClose={firstTokenList.onClose} n={0}/>
            <TokenListModal isOpen={secondTokenList.isOpen} onClose={secondTokenList.onClose} n={1}/>
            <SwapWidget onFirstOpen={firstTokenList.onOpen} onSecondOpen={secondTokenList.onOpen} onSettingsOpen={settings.onOpen}/>
        </>
    )
}

export default Swap
