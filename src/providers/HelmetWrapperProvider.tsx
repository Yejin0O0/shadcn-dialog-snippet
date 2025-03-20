import { SITE_CONFIG } from "@/statics/site";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface HelmetWrapperProviderProps {
  title?: string;
  element: React.ReactNode;
}

export default function HelmetWrapperProvider({
  title,
  element,
}: HelmetWrapperProviderProps) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title || SITE_CONFIG.title}</title>
        <meta name="description" content={SITE_CONFIG.description} />
        <meta name="keywords" content={SITE_CONFIG.keywords} />
        <meta name="author" content={SITE_CONFIG.author} />
        <meta name="og:title" content={SITE_CONFIG.title} />
        <meta name="og:type" content={SITE_CONFIG.ogType} />
        <meta name="og:url" content={SITE_CONFIG.url} />
        <meta name="og:image" content={SITE_CONFIG.ogImage} />
      </Helmet>
      {element}
    </HelmetProvider>
  );
}
