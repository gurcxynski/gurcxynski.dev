import Post from "@/components/post_layout";
import { getSortedPostsData } from "@/lib/posts";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
  }


export default function SSG({ allPostsData } : { allPostsData : {id : string, content : string, [index : string] : any}[] }){
    return (
        <Post allPostsData={allPostsData[0]}></Post>
    )
}