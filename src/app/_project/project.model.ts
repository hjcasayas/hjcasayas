import { StaticImageData } from "next/image";
import { StatusType } from "./status.type";

export interface Project {
  description: string;
  tools: string[];
  title: string;
  image: StaticImageData;
  status: StatusType;
  href: string;
}
