import { Metadata, NextPage } from "next";
import { ProjectCardComponent } from "./_components/project-card.component";
import Link from "next/link";
import { FaEnvelope, FaFilePdf, FaGithub } from "react-icons/fa";
import { minio } from "@/minio";
import { componentsProjectList } from "./_project/components.project-list";
import { landingPagesProjectList } from "./_project/landing-page.project-list";

export const metadata: Metadata = {
  title: "hjcasayas - Portfolio",
  description: "Henly Jade Casayas' software developer portfolio.",
};

export const dynamic = "force-dynamic";

const HomePage: NextPage = async () => {
  let downloadURL = "";
  try {
    downloadURL = await minio.presignedUrl(
      "GET",
      process.env.MINIO_PERSONAL_BUCKET_NAME!,
      process.env.MINIO_RESUME_FILE_NAME!,
    );
  } catch (error) {
    console.log({ error });
    console.log("Unable to get the downlolad URL of the resume");
  }

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
            {downloadURL === "" ? null : (
              <Link
                className="inline-block sm:flex sm:items-center cursor-pointer"
                target="_blank"
                rel="noreferrer"
                href={downloadURL}
              >
                <FaFilePdf className="text-gray-500 text-2xl mr-2 sm:text-xl sm:mr-1" />
                <span className="hidden sm:inline-block sm:text-gray-500">
                  resume
                </span>
              </Link>
            )}
          </address>
        </header>
        <main>
          {" "}
          <div className="container mx-auto">
            <div className="mb-4">
              <h2 className="text-gray-800 text-xl leading-7 font-bold mb-1">
                Landing Pages
              </h2>
              <div className="mx-[-.75rem] flex flex-wrap">
                {landingPagesProjectList.map((p, index) => (
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
            <div className="mb-4">
              <h2 className="text-gray-800 text-xl leading-7 font-bold mb-1">
                Components
              </h2>
              <div className="mx-[-.75rem] flex flex-wrap">
                {componentsProjectList.map((p, index) => (
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
          </div>
        </main>
        <footer></footer>
      </div>
    </div>
  );
};

export default HomePage;
