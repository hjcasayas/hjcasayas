import { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface ProjectCardComponent {
  description: string;
  title: string;
  image: StaticImageData;
  tools?: string[];
  index: number;
}

export const ProjectCardComponent: FC<ProjectCardComponent> = ({
  description,
  title,
  image,
  tools,
  index,
}) => (
  <div className="bg-white rounded-lg p-4 group">
    <div className="mb-3 overflow-hidden">
      <Image
        width="1500"
        height="900"
        alt={title}
        src={image}
        className="rounded-lg transition group-hover:duration-300 group-hover:scale-105"
        priority={index < 3}
      />
    </div>
    <div className="mb-3">
      {tools?.length
        ? tools.map((t) => (
            <span
              key={t}
              className="text-base text-gray-500 leading-5 font-normal"
            >
              #{t}&nbsp;
            </span>
          ))
        : null}
    </div>
    <h3 className="text-lg leading-7 font-semibold text-gray-600 mb-1">
      {title}
    </h3>
    <p className="text-gray-400 text-base leading-5 font-normal">
      {description}
    </p>
  </div>
);
