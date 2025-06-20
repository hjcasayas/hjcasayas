import productPreviewCardComponent from "../_images/frontend-mentor/product-preview-card-component.jpeg";
import notFound from "../_images/dev-challenges/404-not-found.png";

import { Project } from "./project.model";

export const componentsProjectList: Project[] = [
  {
    title: "404 Not Found",
    description:
      "This challenge is suitable for you if you just started with coding. The challenge will test your basic CSS and HTML skills.",
    image: notFound,
    tools: ["NextJS", "TailwindCSS"],
    status: "Done",
    href: "https://dev-challenges-not-found-hjcasayas.vercel.app/",
  },
  {
    description:
      "This HTML & CSS-only challenge will be perfect for anyone starting to build responsive projects.",
    tools: ["NextJS", "TailwindCSS"],
    title: "Product Preview Card Component",
    image: productPreviewCardComponent,
    status: "Done",
    href: "https://fm-product-preview-card-component-hjcasayas.vercel.app/",
  },
];
