import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Navbar(){
    return(
        <header className={utilStyles.navbar}>
            <Link href="/" className={utilStyles.logo}>
              <Image
                src="/images/gurcxynskidev-low-resolution-logo-white-on-transparent-background.png"
                height={100}
                width={180}
                alt="logo"
                priority={true}
              />
            </Link>
            <Link className={utilStyles.pageTitle} href={"/"}> gurcxynski.dev </Link>
            <div className={utilStyles.buttons}>
            <Navbutton href={"/posts/lorem-ipsum"}> LOREM </Navbutton>
            <Navbutton href={"/projects"}> PROJECTS </Navbutton>
            <Navbutton href={"/cv"}> MY CV </Navbutton>
            </div>
        </header>
    )
}

function Navbutton({children, href} : {children : string, href : string}){
    return(
        <Link href={href} className={utilStyles.navButton}> <button className={utilStyles.button19}> {children} </button> </Link>
    )
}