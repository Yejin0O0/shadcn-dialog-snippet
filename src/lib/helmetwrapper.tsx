import { siteConfig } from "@/config/site";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface HelmetWrapperProps {
  title?: string;
  element: React.ReactNode;
}

function HelmetWrapper({ title, element }: HelmetWrapperProps) {
  return (
    <HelmetProvider>
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
    </HelmetProvider>
  );
}

export default HelmetWrapper;
