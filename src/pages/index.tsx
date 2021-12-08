import { NextPage } from "next";
import { ProjectCardComponent } from "../components/project-card.component";
import { projectsList } from "../projects/projects.list";

const HomePage: NextPage = () => {
  return (
    <>
      {projectsList.map((p) => (
        <ProjectCardComponent key={p.src} {...p} />
      ))}
    </>
  );
};

export default HomePage;
