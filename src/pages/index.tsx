import { NextPage } from "next";
import { ProjectCardComponent } from "../components/project-card.component";
import { projectsList } from "../project/project.list";

const HomePage: NextPage = () => {
  return (
    <div className="mx-[-.75rem] flex flex-wrap">
      {projectsList.map((p) => (
        <a
          target="_blank"
          rel="noreferrer"
          href={p.href}
          key={p.src}
          className="flex p-3 w-full sm:w-1/2 lg:w-1/3 cursor-pointer"
        >
          <ProjectCardComponent {...p} />
        </a>
      ))}
    </div>
  );
};

export default HomePage;
