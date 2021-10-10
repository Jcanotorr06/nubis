import {ChakraProvider} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'
import { AccountModal, ConnectButton, Layout, NavBar } from './components'

const App = () => {

  const {isOpen, onOpen, onClose} = useDisclosure()
  return(
    <ChakraProvider>
      <Layout>
        <NavBar handleOpenModal={onOpen}/>
        <AccountModal isOpen={isOpen} onClose={onClose}/>
      </Layout>
    </ChakraProvider>  
  )
}

export default App
