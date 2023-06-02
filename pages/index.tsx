import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
import styles from '../components/layout.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
        <Image
              priority
              src="/images/profile1.jpg"
              className={utilStyles.borderCircle}
              height={150}
              width={150}
              alt="profile-picture"
            />
      </header>
      <div className={utilStyles.headingMd}>
        Tutaj super interesujacy opis projektow
      </div>
    </Layout>
  )
}
