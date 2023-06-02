import Link from "next/link";
import Image from "next/image"
import utilStyles from '../styles/utils.module.css'

export default function Contact() {
    return (
            <footer>
            <h3 className={utilStyles.headingMd}> Contact me via:</h3>
            <SocialMedia href="https://www.facebook.com/gurcxynski"> 
            <Image src="/images/facebook.png" alt="fb-logo" width={20} height={20} className={utilStyles.socialmedialogo}/> Facebook </SocialMedia>

            <SocialMedia href="https://github.com/gurcxynski"> 
            <Image src="/images/github.png" alt="github-logo" width={20} height={20} className={utilStyles.socialmedialogo}/> GitHub </SocialMedia>

            <SocialMedia href={`mailto:woj.gorczynski@gmail.com`}> 
            <Image src="/images/mail.png" alt="mail-logo" width={20} height={20} className={utilStyles.socialmedialogo}/> E-mail </SocialMedia>
            </footer>
    )
}

function SocialMedia({ children, href } : { children : React.ReactNode, href : string}){
    return (
        <Link href={href} className={utilStyles.socialmedia}> {children} <br/> </Link> 
    )
}