import "./globals.css";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaFilePdf } from "react-icons/fa";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col w-screen min-h-screen pt-5 px-6 bg-gray-100">
          <div className="container mx-auto">
            <header className="block mb-9 sm:flex sm:justify-between  sm:mb-16">
              <div>
                <h1 className="text-gray-900 text-2xl leading-7 font-bold mb-2">
                  <Link href="/">Henly Jade Casayas</Link>
                </h1>
                <p className="text-gray-500 text-lg font-medium mb-1">
                  Software Developer
                </p>
              </div>
              <address>
                <a
                  className="inline-block sm:flex sm:items-center"
                  href="mailto:henlyjade.casayas@gmail.com"
                >
                  <FaEnvelope className="text-gray-500 text-2xl mr-2 sm:text-xl sm:mr-1" />
                  <span className="hidden sm:inline-block sm:text-gray-500">
                    henlyjade.casayas@gmail.com
                  </span>
                </a>
                <a
                  className="inline-block sm:flex sm:items-center"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/hjcasayas"
                >
                  <FaGithub className="text-gray-500 text-2xl mr-2 sm:text-xl sm:mr-1" />
                  <span className="hidden sm:inline-block sm:text-gray-500">
                    https://github.com/hjcasayas
                  </span>
                </a>
                <a
                  className="inline-block sm:flex sm:items-center"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/hjcasayas"
                >
                  <FaFilePdf className="text-gray-500 text-2xl mr-2 sm:text-xl sm:mr-1" />
                  <span className="hidden sm:inline-block sm:text-gray-500">
                    download resume
                  </span>
                </a>
              </address>
            </header>
            <main>{children}</main>
            <footer></footer>
          </div>
        </div>
      </body>
    </html>
  );
}
