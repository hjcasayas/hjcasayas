import { FC } from "react";
import Image from "next/image";

interface ProjectCardComponent {
  description: string;
  tools?: string[];
  title: string;
  src: string;
}

export const ProjectCardComponent: FC<ProjectCardComponent> = ({
  description,
  tools,
  title,
  src,
}) => (
  <div className="p-5 bg-white rounded-lg">
    <div className="mb-6">
      <Image
        width="1500"
        height="900"
        layout="responsive"
        alt={title}
        src={src}
        className="rounded-lg"
      />
    </div>
    <div className="mb-5">
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
    <h3 className="text-2xl leading-7 font-medium text-gray-700 mb-3">
      {title}
    </h3>
    <p className="text-gray-400 text-base leading-5 font-medium">
      {description}
    </p>
  </div>
);
