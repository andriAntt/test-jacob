import type { NextPage } from "next";
import { useRouter } from "next/router";

import { Button, Layout, PageHead } from "../components";

import { EUrlsPages } from "@src/constants";

const ServerErrorPage: NextPage = () => {
 const router = useRouter();

 return (
  <>
   <PageHead
    url={EUrlsPages.ERROR_SERVER}
    title="Error 500: Internal Server Error"
    description="Internal Server Error"
   />
   <Layout>
    <div className="flex items-center justify-center w-full h-screen flex-col gap-5">
     <h2 className="text-center">Error 500: Internal Server Error</h2>

     <Button
      className="min-w-[120px] h-[43px]"
      onClick={() => {
       router.push(EUrlsPages.HOMEPAGE);
      }}
     >
      <span className="text-base">Go Home</span>
     </Button>
    </div>
   </Layout>
  </>
 );
};

export default ServerErrorPage;
