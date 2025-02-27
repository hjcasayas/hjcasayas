import { Project } from "./project.model";
import notFound from "../_images/dev-challenges/404-not-found.png";

export const devChallengesProjectList: Project[] = [
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
