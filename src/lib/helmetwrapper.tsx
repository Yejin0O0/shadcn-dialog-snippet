import { siteConfig } from "@/config/site";
import { Helmet } from "react-helmet";

interface HelmetWrapperProps {
  title?: string;
  element: React.ReactNode;
}

function HelmetWrapper({ title, element }: HelmetWrapperProps) {
  return (
    <>
      <Helmet>
        <title>{title || siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="keywords" content={siteConfig.keywords} />
        <meta name="author" content={siteConfig.author} />
        <meta name="og:title" content={siteConfig.title} />
        <meta name="og:type" content={siteConfig.ogType} />
        <meta name="og:url" content={siteConfig.url} />
        <meta name="og:image" content={siteConfig.ogImage} />
      </Helmet>
      {element}
    </>
  );
}

export default HelmetWrapper;
