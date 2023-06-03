import Layout from "@/components/layout";
import Post from "@/components/post";
import { PostData, getLipsum } from "@/lib/lipsum";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
    const postData = await getLipsum();
    return {
      props: {
        postData,
      },
    };
  }

export default function AboutMe({postData} : PostData){
    return(
        <Layout>
            <Post postData={postData} />
        </Layout>
    )
}