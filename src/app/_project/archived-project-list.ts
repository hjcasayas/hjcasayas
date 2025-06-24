import { Project } from "./project.model";

import productPreviewCardComponent from "../_images/frontend-mentor/product-preview-card-component.jpeg";
import skilledELearningLandingPage from "../_images/frontend-mentor/skilled-e-learning-landing-page.jpeg";
import notFound from "../_images/dev-challenges/404-not-found.png";

export const archivedProjectList: Project[] = [
  {
    description:
      "This HTML & CSS-only challenge will be perfect for anyone starting to build responsive projects.",
    tools: ["NextJS", "TailwindCSS"],
    title: "Product Preview Card Component",
    image: productPreviewCardComponent,
    status: "Done",
    href: "https://fm-product-preview-card-component-hjcasayas.vercel.app/",
  },
  {
    description:
      "This responsive page is perfect if you've learned the fundamentals of HTML & CSS, completed a couple of smaller projects, and want to take it up a notch.",
    tools: ["NextJS", "TailwindCSS"],
    title: "Skilled E-learning Landing Page",
    image: skilledELearningLandingPage,
    status: "Done",
    href: "https://fm-skilled-elearning-landing-page-hjcasayas.vercel.app",
  },
  {
    title: "404 Not Found",
    description:
      "This challenge is suitable for you if you just started with coding. The challenge will test your basic CSS and HTML skills.",
    image: notFound,
    tools: ["NextJS", "TailwindCSS"],
    status: "Done",
    href: "https://dev-challenges-not-found-hjcasayas.vercel.app/",
  },
];
