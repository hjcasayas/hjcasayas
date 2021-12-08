import Head from "next/head";
import { FunctionComponent } from "react";

interface TitleProps {
  pageName?: string;
}

export const TitleComponent: FunctionComponent<TitleProps> = ({ pageName }) => {
  const appName = "hjcasayas";

  return (
    <Head>
      <title>
        {pageName && pageName.trim().length > 0
          ? `${appName} - ${pageName}`
          : appName}
      </title>
    </Head>
  );
};
