import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Image,
    Box
  } from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'

export default function Navbar(){
    return(
        <div className={utilStyles.navbar}> 
            <Link href="/">
                <Box boxSize='200px'>
                <Image src="/images/gurcxynskidev-low-resolution-logo-white-on-transparent-background.png" alt="logo" />
                </Box>
            </Link>
            <Link className={utilStyles.pageTitle} href={"/"}> gurcxynski.dev </Link>
            <MyMenu/>
        </div>
    )
}

function MyMenu(){
    return(
        <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                Pages
              </MenuButton>
              <MenuList>
                <MenuItem><Link href={"/posts/lorem-ipsum"}> Lorem ipsum </Link></MenuItem>
                <MenuItem><Link href={"/projects"}> My projects </Link></MenuItem>
                <MenuItem><Link href={"/cv"}> CV </Link></MenuItem>
              </MenuList>
            </Menu>
    )
}