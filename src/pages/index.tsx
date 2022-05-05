import { NextPage } from "next";
import { ProjectCardComponent } from "../components/project-card.component";
import { projectsList } from "../project/project.list";

const HomePage: NextPage = () => {
  return (
    <div className="mx-[-.75rem] flex flex-wrap">
      {projectsList.map((p, index) => (
        <a
          target="_blank"
          rel="noreferrer"
          className="flex p-3 w-full sm:w-1/2 lg:w-1/3 cursor-pointer"
          key={p.src}
          href={p.href}
        >
          <ProjectCardComponent {...p} index={index} />
        </a>
      ))}
    </div>
  );
};

export default HomePage;
