import { FC, ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";

interface LayoutComponentProps {
  children: ReactNode;
}

export const LayoutComponent: FC<LayoutComponentProps> = ({ children }) => (
  <>
    <Head>
      <meta
        name="description"
        content="Henly Jade Casayas' software developer portfolio."
      />
      <meta name="author" content="hjcasayas" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex flex-col w-screen min-h-screen pt-5 px-6 bg-gray-100">
      <div className="container mx-auto">
        <header className="flex justify-between mb-9 md:mb-16">
          <div>
            <h1 className="text-gray-700 text-2xl leading-7 font-semibold mb-1">
              <Link href="/">
                <a>Henly Jade Casayas</a>
              </Link>
            </h1>
            <p className="text-gray-500 text-lg font-medium">
              Software Developer
            </p>
          </div>
        </header>
        <main>{children}</main>
        <footer></footer>
      </div>
    </div>
  </>
);
