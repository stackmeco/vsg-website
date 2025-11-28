import { useEffect } from "react";
import { useLocation } from "wouter";

interface PageMetaProps {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
}

const BASE_URL = "https://verifiablesystems.com";
const DEFAULT_IMAGE = "/og-image.png";

export function PageMeta({ 
  title, 
  description, 
  image = DEFAULT_IMAGE,
  type = "website",
  publishedTime
}: PageMetaProps) {
  const [location] = useLocation();
  const fullTitle = `${title} | Verifiable Systems`;
  const canonicalUrl = `${BASE_URL}${location}`;
  const imageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;

  useEffect(() => {
    document.title = fullTitle;
    
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        const attrName = selector.includes("property=") ? "property" : "name";
        const attrValue = selector.match(/["']([^"']+)["']/)?.[1] || "";
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="keywords"]', "content", "Verifiable Systems Group LLC, Verifiable Systems Group, Verifiable Systems, VSG, Truth Engineering, AI, Digital Assets, Bitcoin");
    
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:type"]', "content", type);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[property="og:image"]', "content", imageUrl);
    setMeta('meta[property="og:site_name"]', "content", "Verifiable Systems Group");
    
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", imageUrl);
    
    setLink("canonical", canonicalUrl);

    if (type === "article" && publishedTime) {
      setMeta('meta[property="article:published_time"]', "content", publishedTime);
    }
  }, [title, description, image, type, publishedTime, fullTitle, canonicalUrl, imageUrl]);

  return null;
}

export default PageMeta;
