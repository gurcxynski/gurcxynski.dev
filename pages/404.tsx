import Layout from "@/components/layout";
import ErrorPage from 'next/error'

export default function Custom404(){
    return(
        <Layout>
            <ErrorPage statusCode={404} />
        </Layout>
    )
}