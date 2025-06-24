import { Metadata, NextPage } from "next";
import Link from "next/link";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { landingPagesProjectList } from "./_project/landing-page.project-list";
import { archivedProjectList } from "./_project/archived-project-list";
import { ResumeDownload } from "./_components/resume-download";
import { ProjectListComponent } from "./_components/project-list.component";

export const metadata: Metadata = {
  title: "hjcasayas - Portfolio",
  description: "Henly Jade Casayas' software developer portfolio.",
};

const HomePage: NextPage = async () => {
  return (
    <div className="flex flex-col w-screen min-h-screen pt-5 px-6 bg-gray-100">
      <div className="container mx-auto">
        <header className="block mb-9 sm:flex sm:justify-between  sm:mb-16">
          <div>
            <h1 className="text-gray-900 text-2xl leading-7 font-bold mb-2">
              <Link className="cursor-pointer" href="/">
                Henly Jade Casayas
              </Link>
            </h1>
            <p className="text-gray-500 text-lg font-medium mb-1">
              Web Developer
            </p>
          </div>
          <address>
            <Link
              className="inline-block sm:flex sm:items-center cursor-pointer"
              href="mailto:henlyjade.casayas@gmail.com"
            >
              <FaEnvelope className="text-gray-500 text-2xl mr-2 sm:text-xl sm:mr-1" />
              <span className="hidden sm:inline-block sm:text-gray-500">
                henlyjade.casayas@gmail.com
              </span>
            </Link>
            <Link
              className="inline-block sm:flex sm:items-center cursor-pointer"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/hjcasayas"
            >
              <FaGithub className="text-gray-500 text-2xl mr-2 sm:text-xl sm:mr-1" />
              <span className="hidden sm:inline-block sm:text-gray-500">
                https://github.com/hjcasayas
              </span>
            </Link>
            <ResumeDownload />
          </address>
        </header>
        <main>
          <div className="container mx-auto flex flex-col gap-y-4">
            <ProjectListComponent
              title="Landing Pages"
              projects={landingPagesProjectList}
            />
            <ProjectListComponent
              title="Archives"
              projects={archivedProjectList}
            />
          </div>
        </main>
        <footer></footer>
      </div>
    </div>
  );
};

export default HomePage;
