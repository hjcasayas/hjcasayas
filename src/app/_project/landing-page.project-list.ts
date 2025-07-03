import modernProductLaunch from "../_images/landing-pages/modern-product-launch.png";
import trustworthyAppDownload from "../_images/landing-pages/trustworthy-app-download.png";

import { Project } from "./project.model";

export const landingPagesProjectList: Project[] = [
  {
    description:
      "Build buzz around your launch with this bold product template. A clean, focused design that makes it easy to highlight features, share updates, and drive early interest.",
    tools: ["NextJS", "Strapi", "TailwindCSS"],
    title: "Modern Product Launch",
    image: modernProductLaunch,
    status: "Done",
    href: "https://modern-product-launch.hjcasayas.info",
  },
  {
    description:
      "Drive downloads with this sleek app template. One page with all the key info—built for conversion.",
    tools: ["NextJS", "Strapi", "TailwindCSS"],
    title: "Trustworthy App Download",
    image: trustworthyAppDownload,
    status: "Done",
    href: "https://trustworthy-app-download.hjcasayas.info",
  },
];
