import Head from 'next/head'
import Layout from './layout'


export default function Post({ allPostsData } : { allPostsData : {id : string, content : string, [index : string] : any} }) {
  return (
    <Layout>
      <Head>
        <title>{allPostsData.title}</title>
      </Head>
      <h1>{allPostsData.title}</h1>
      <h4>{allPostsData.data}</h4>
      <p> 
        {allPostsData.content}
      </p>
    </Layout>
  )
}
