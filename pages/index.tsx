import type { NextPage } from 'next'
import { useDisclosure } from '@chakra-ui/hooks'
import { AccountModal, Footer, Layout, NavBar, SwapWidget } from '../components'

const Home: NextPage = () => {

  const {isOpen, onOpen, onClose} = useDisclosure()
  return (
    <Layout>
        <NavBar handleOpenModal={onOpen}/>
        <AccountModal isOpen={isOpen} onClose={onClose}/>
        <SwapWidget/>
        <Footer/>
    </Layout>
  )
}

export default Home
