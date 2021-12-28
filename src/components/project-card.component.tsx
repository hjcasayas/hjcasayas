import { FC } from "react";
import Image from "next/image";

interface ProjectCardComponent {
  description: string;
  title: string;
  src: string;
  designerHref?: string;
  designer?: string;
  tools?: string[];
}

export const ProjectCardComponent: FC<ProjectCardComponent> = ({
  description,
  title,
  src,
  designerHref,
  designer,
  tools,
}) => (
  <div className="bg-white rounded-lg p-4">
    <div className="mb-1">
      <Image
        width="1500"
        height="900"
        layout="responsive"
        alt={title}
        src={src}
        className="rounded-lg"
      />
    </div>
    <div className="mb-3">
      {tools?.length
        ? tools.map((t) => (
            <span
              key={t}
              className="text-base text-gray-500 leading-5 font-medium"
            >
              #{t}&nbsp;
            </span>
          ))
        : null}
    </div>
    <h3 className="text-2xl leading-7 font-medium text-gray-700 mb-1">
      {title}
    </h3>
    <p className="text-gray-400 text-base leading-5 font-medium">
      {description}
    </p>
    {designer != null && designer?.trim() != "" && (
      <div className="text-gray-400 text-base leading-5 font-medium mt-7">
        <label className="inline-block text-gray-400 text-base leading-5">
          Designed By:
        </label>{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href={designerHref}
          className="inline-block text-gray-600 text-base leading-5 font-bold"
        >
          {designer}
        </a>
      </div>
    )}
  </div>
);
