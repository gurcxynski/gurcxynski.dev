import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home( { allPostsData } : { allPostsData : {id : string, content : string, [index : string] : any}[] } ) {
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
          <b>CV</b>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
<h1 className={utilStyles.headingLg}>Blog</h1>
<ul className={utilStyles.list}>
  {allPostsData.map(({ id, date, title }) => (
    <li className={utilStyles.listItem} key={id}>
      <Link href={`posts/${id}`}> {title} </Link>
      <br />
      <small className={utilStyles.lightText}>
      <Date dateString={date} />
      </small>
    </li>
  ))}
</ul>
</section>
    </Layout>
  )
}
/*
*/
