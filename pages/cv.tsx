import {pdfjs, Document, Page} from 'react-pdf'
import Layout from '@/components/layout';
import { HStack } from '@chakra-ui/react';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default function CVPage() {
    return (
      <Layout>
        <Document file="/pdf/CV.pdf"> 
            <HStack>
              <Page pageNumber={1} />
              <Page pageNumber={2} />
            </HStack>
        </Document>
      </Layout>
    );
  }