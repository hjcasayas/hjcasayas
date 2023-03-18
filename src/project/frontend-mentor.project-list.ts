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
  {
    description:
      "This responsive page is perfect if you've learned the fundamentals of HTML & CSS, completed a couple of smaller projects, and want to take it up a notch.",
    tools: ['NextJS', 'TailwindCSS'],
    title: 'Skilled E-learning Landing Page',
    src: '/projects/frontend-mentor/skilled-e-learning-landing-page.jpeg',
    status: StatusType.Done,
    href: 'https://fm-skilled-elearning-landing-page-hjcasayas.vercel.app',
  },
];
