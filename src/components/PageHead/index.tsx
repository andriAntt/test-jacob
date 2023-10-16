import { FC } from 'react'
import Head from 'next/head'

interface IPageHeadProps {
  title: string;
  description: string;
  url: string;
}

const PageHead: FC<IPageHeadProps> = ({
  title,
  description,
  url
}): JSX.Element => {
  const siteUrl = 'https://test-jacob.com';
  const siteContent = 'https://test-jacob.com';
  
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <title>{title}</title>
      <meta property="og:title" key="title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
      <meta property="og:url" content={siteUrl + '/' + url} />
      <meta property="og:site_name" content={siteContent} />
      <link rel="canonical" href={siteUrl} />
      <meta name="apple-mobile-web-app-title" content={siteContent} />
      <meta name="application-name" content={siteContent} />
    </Head>
  )
}

export default PageHead