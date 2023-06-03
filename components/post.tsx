import { PostData } from "@/lib/lipsum";
import { Heading, Stack } from "@chakra-ui/react";

export default function Post({postData} : { postData : PostData }){
    return(
        <Stack spacing = {3}>
              <Heading size='md'>{postData.title}</Heading>
              <Heading size='sm'>{postData.date}</Heading>
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </Stack>
    )
}