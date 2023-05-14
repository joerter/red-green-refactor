import { strapi } from "./strapi";

export interface StrapiMediaFormat {
  url: string;
}

export interface StrapiMedia {
  data: {
    attributes: {
      formats: {
        large: StrapiMediaFormat;
        medium: StrapiMediaFormat;
        small: StrapiMediaFormat;
        thumbnail: StrapiMediaFormat;
      };
    };
  };
}

export interface Blog {
  id: number;
  attributes: {
    Content: string;
    Excerpt: string;
    Published: string;
    Title: string;
    Hero: StrapiMedia;
  };
}

export function getBlogs() {
  return strapi<Blog[]>("blogs?populate=Hero");
}
