import { StatusType } from './enums/status-type.enum';
import { Project } from './models/project.model';

export const frontendMentorProjectList: Project[] = [
  {
    description:
      'This HTML & CSS-only challenge will be perfect for anyone starting to build responsive projects.',
    tools: ['NextJS', 'TailwindCSS'],
    title: 'Product Preview Card Component',
    src: '/projects/frontend-mentor/product-preview-card-component.jpeg',
    status: StatusType.Done,
    href: 'https://fm-product-preview-card-component-hjcasayas.vercel.app/',
  },
];
