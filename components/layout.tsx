import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

export const siteTitle = 'gurcxynski.dev'

export default function Layout({ children, home } : {children : React.ReactNode, home? : React.ReactNode}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/g.dev.icon.ico" />
        <meta
          name="description"
          content="A personal website for project showcasing"
        />
        
        <meta name="og:title" content={siteTitle} />
      </Head>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}