import { StatusType } from "./enums/status-type.enum";
import { Project } from "./models/project.model";

export const projectsList: Project[] = [
  {
    title: "Dev Challenges - Responsive Web",
    description:
      "Learn and Practices Web Development by building 8 Websites with given designs.",
    src: "/projects/dev-challenges-responsive.png",
    tools: ["NextJS", "TailwindCSS"],
    status: StatusType.InProgress,
    href: "https://dev-challenges.hjcasayas.dev/responsive",
    designer: "DevChallenges",
    designerHref: "https://devchallenges.io/",
  },
  {
    title: "Dev Challenges - Front End",
    description:
      "Become front-end developer by building 8 real-life projects, you can use any front-end frameworks.",
    src: "/projects/dev-challenges-front-end.png",
    tools: ["NextJS", "TailwindCSS"],
    status: StatusType.Todo,
    href: "https://dev-challenges.hjcasayas.dev/front-end",
    designer: "DevChallenges",
    designerHref: "https://devchallenges.io/",
  },
  {
    title: "Dev Challenges - Full Stack",
    description:
      "Become a full-stack developer by building 8 advanced full stack web applications.",
    src: "/projects/dev-challenges-full-stack.png",
    tools: ["NextJS", "TailwindCSS", "NestJS"],
    status: StatusType.Todo,
    href: "https://dev-challenges.hjcasayas.dev/full-stack",
    designer: "DevChallenges",
    designerHref: "https://devchallenges.io/",
  },
];
