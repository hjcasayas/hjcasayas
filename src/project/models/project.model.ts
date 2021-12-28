import { StatusType } from "../enums/status-type.enum";

export interface Project {
  description: string;
  tools: string[];
  title: string;
  src: string;
  status: StatusType;
  href: string;
  designer?: string;
  designerHref?: string;
}
