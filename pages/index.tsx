import type { NextPage } from 'next'
import { useDisclosure } from '@chakra-ui/hooks'
import { AccountModal, Layout, NavBar } from '../components'

const Home: NextPage = () => {

  const {isOpen, onOpen, onClose} = useDisclosure()
  return (
    <Layout>
        <NavBar handleOpenModal={onOpen}/>
        <AccountModal isOpen={isOpen} onClose={onClose}/>
    </Layout>
  )
}

export default Home
