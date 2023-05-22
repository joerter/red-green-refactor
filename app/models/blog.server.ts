import { strapi } from "../strapi";

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
    Hero: StrapiMedia;
    Published: string;
    Slug: string;
    Title: string;
  };
}

export function getBlogs() {
  return strapi<Blog[]>("blogs?populate=Hero");
}

export function getBlog(slug: string) {
  return strapi<Blog[]>(`blogs?populate=Hero&filters[Slug][$eq]=${slug}`);
}
