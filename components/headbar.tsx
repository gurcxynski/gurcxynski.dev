import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
export default function HeadBar(){
    return(
        <header className={utilStyles.headbar}>
            <Link href="/" className={utilStyles.logo}>
              <Image
                src="/images/gurcxynskidev-low-resolution-logo-white-on-transparent-background.png"
                height={100}
                width={180}
                alt="logo"
              />
            </Link>
            <div className={utilStyles.pageTitle}> gurcxynski.dev </div>
            <NavButton href={"/projects"}> PROJECTS </NavButton>
            <NavButton href={"/cv"}> CV </NavButton>
        </header>
    )
}

function NavButton({children, href} : {children : string, href : string}){
    return(
        <Link href={href} className={utilStyles.navButton}> <button className={utilStyles.button19}> {children} </button> </Link>
    )
}