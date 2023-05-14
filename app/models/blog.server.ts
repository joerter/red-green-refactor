import { strapi } from "./strapi";

export interface Blog {
  id: number;
  attributes: {
    Content: string;
    Excertp: string;
    Published: string;
    Title: string;
  }
}

export function getBlogs() {
  return strapi<Blog[]>("blogs");
}
