import type { NextPage } from "next";
import { useRouter } from "next/router";

import { Button, Layout, PageHead } from "../components";

import { EUrlsPages } from "@src/constants";

const NotFoundPage: NextPage = () => {
 const router = useRouter();

 return (
  <>
   <PageHead
    url={EUrlsPages.ERROR_NOTFOUND}
    title="Error 404: Not Found"
    description="Page not found"
   />
   <Layout>
    <div className="flex items-center justify-center w-full h-screen flex-col gap-5">
     <h2 className="text-center">Error 404:Page Not Found</h2>

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

export default NotFoundPage;
