export interface Project {
  description: string;
  tools: string[];
  title: string;
  src: string;
}

export const projectsList: Project[] = [
  {
    title: "Dev Challenges - Responsive",
    description:
      "Learn and Practices Web Development by building 8 Websites with given designs",
    src: "/projects/dev-challenges-responsive.svg",
    tools: ["NextJS", "TailwindCSS"],
  },
];
