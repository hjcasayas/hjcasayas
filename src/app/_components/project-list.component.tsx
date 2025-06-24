import Link from "next/link";
import { Project } from "../_project/project.model";
import { ProjectCardComponent } from "./project-card.component";

export const ProjectListComponent = ({
  title,
  projects,
}: {
  title: string;
  projects: Project[];
}) => {
  return (
    <div className="mb-4">
      <h2 className="text-gray-800 text-xl leading-7 font-bold mb-1">
        {title}
      </h2>
      <div className="mx-[-.75rem] flex flex-wrap">
        {projects.map((p, index) => (
          <Link
            target="_blank"
            rel="noreferrer"
            className="flex p-3 w-full sm:w-1/2 lg:w-1/3 cursor-pointer"
            key={p.image.src}
            href={p.href}
          >
            <ProjectCardComponent {...p} index={index} />
          </Link>
        ))}
      </div>
    </div>
  );
};
