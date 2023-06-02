import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Link href="https://github.com/gurcxynski">@gurcxynski</Link>
        <p>
          Tutaj super interesujacy opis mnie
        </p>
      </section>
      <section>
        <h1 className={utilStyles.headingXl}> My projects </h1>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
             <Link href={`projects/tic-tac-toe`}> Tic Tac Toe </Link> 
             </li>
        </ul>
      </section>
      <section className={utilStyles.headingLg}>
          <Link href="/cv">CV</Link>
      </section>
    </Layout>
  )
}
