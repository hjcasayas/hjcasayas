import { Metadata, NextPage } from "next";
import { ProjectCardComponent } from "./_components/project-card.component";
import { frontendMentorProjectList } from "./_project/frontend-mentor.project-list";
import { devChallengesProjectList } from "./_project/dev-challenges.project-list";

export const metadata: Metadata = {
  title: "hjcasayas - Portfolio",
  description: "Henly Jade Casayas' software developer portfolio.",
};

const HomePage: NextPage = () => {
  return (
    <div className="container mx-auto">
      <div className="mb-4">
        <h2 className="text-gray-800 text-xl leading-7 font-bold mb-1">
          <a
            className="underline"
            rel="noreferrer"
            target="_blank"
            href="https://www.frontendmentor.io/"
          >
            Frontend Mentor
          </a>{" "}
          Solutions
        </h2>
        <div className="mx-[-.75rem] flex flex-wrap">
          {frontendMentorProjectList.map((p, index) => (
            <a
              target="_blank"
              rel="noreferrer"
              className="flex p-3 w-full sm:w-1/2 lg:w-1/3 cursor-pointer"
              key={p.image.src}
              href={p.href}
            >
              <ProjectCardComponent {...p} index={index} />
            </a>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-gray-800 text-xl leading-7 font-bold mb-1">
          <a
            className="underline"
            rel="noreferrer"
            target="_blank"
            href="https://www.devchallenges.io/"
          >
            Dev Challenges
          </a>{" "}
          Solutions
        </h2>
        <div className="mx-[-.75rem] flex flex-wrap">
          {devChallengesProjectList.map((p, index) => (
            <a
              target="_blank"
              rel="noreferrer"
              className="flex p-3 w-full sm:w-1/2 lg:w-1/3 cursor-pointer"
              key={p.image.src}
              href={p.href}
            >
              <ProjectCardComponent {...p} index={index} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
