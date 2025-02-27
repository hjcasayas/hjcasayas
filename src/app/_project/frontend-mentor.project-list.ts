import { Project } from "./project.model";
import productPreviewCardComponent from "../_images/frontend-mentor/product-preview-card-component.jpeg";
import skilledELearningLandingPage from "../_images/frontend-mentor/skilled-e-learning-landing-page.jpeg";

export const frontendMentorProjectList: Project[] = [
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
];
