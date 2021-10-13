import { Menu, IconButton, Icon, MenuButton, MenuList, MenuItem, Link } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import NLink from 'next/link'
import { useRouter } from 'next/router';

const InfoMenu = () => {
    const {pathname} = useRouter()

    return (
        <Menu flip>
            <MenuButton as={IconButton} aria-label="info menu" borderRadius="full">
                <Icon as={HamburgerIcon}/>
            </MenuButton>
            <MenuList padding="3">
                <NLink href="/">
                    <MenuItem>
                        <Link fontWeight={pathname === '/' ? 'black' : 'normal'} >
                            Home
                        </Link>
                    </MenuItem>
                </NLink>
                <NLink href="/swap">
                    <MenuItem>
                        <Link fontWeight={pathname === '/swap' ? 'black' : 'normal'} >
                            Swap
                        </Link>
                    </MenuItem>
                </NLink>
                <NLink href="/farm">
                    <MenuItem>
                        <Link fontWeight={pathname === '/farm' ? 'black' : 'normal'} >
                            Farm
                        </Link>
                    </MenuItem>
                </NLink>
                <NLink href="/lend">
                    <MenuItem>
                        <Link fontWeight={pathname === '/lend' ? 'black' : 'normal'} >
                            Lend
                        </Link>
                    </MenuItem>
                </NLink>
                

            </MenuList>
        </Menu>
    )
}

export default InfoMenu
