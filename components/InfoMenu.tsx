import { Menu, IconButton, Icon, MenuButton, MenuList, MenuItem, Link, Text } from '@chakra-ui/react'
import { FaEllipsisH } from 'react-icons/fa'

const InfoMenu = () => {
    return (
        <Menu flip>
            <MenuButton as={IconButton} aria-label="info menu" borderRadius="full">
                <Icon as={FaEllipsisH}/>
            </MenuButton>
            <MenuList padding="3">
                <MenuItem>
                    <Link href="https://github.com/Jcanotorr06/nubis" target="_blank" rel="noreferrer">
                        <Text fontWeight="bold">Github</Text>
                        <Text fontSize="sm" opacity="50%">Open source repositories</Text>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href="#" target="_blank" rel="noreferrer">
                        <Text fontWeight="bold">Docs</Text>
                        <Text fontSize="sm" opacity="50%">Documentation for users of Nubis</Text>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href="#" target="_blank" rel="noreferrer">
                        <Text fontWeight="bold">Twitter</Text>
                        <Text fontSize="sm" opacity="50%">Interact with us on Twitter</Text>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href="#" target="_blank" rel="noreferrer">
                        <Text fontWeight="bold">Discord</Text>
                        <Text fontSize="sm" opacity="50%">Join the community on Discord</Text>
                    </Link>
                </MenuItem>

            </MenuList>
        </Menu>
    )
}

export default InfoMenu
