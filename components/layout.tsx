import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'
import Headbar from './headbar'

export const siteTitle = 'gurcxynski.dev'

export default function Layout({ children, home } : {children : React.ReactNode, home? : React.ReactNode}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/g.dev.icon.ico" />
        <meta name="og:title" content={siteTitle} />
        <Headbar />
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
