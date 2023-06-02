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
      <div className={utilStyles.headingMd}>
        Tutaj super interesujacy opis mnie
      </div>
      <div className={utilStyles.headingMd}>
        Tutaj super interesujacy opis projektow
      </div>
    </Layout>
  )
}
