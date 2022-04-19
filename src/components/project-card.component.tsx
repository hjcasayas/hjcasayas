import { FC } from "react";
import Image from "next/image";

interface ProjectCardComponent {
  description: string;
  title: string;
  src: string;
  tools?: string[];
  index: number;
}

export const ProjectCardComponent: FC<ProjectCardComponent> = ({
  description,
  title,
  src,
  tools,
  index,
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
        priority={index < 3}
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
  </div>
);
