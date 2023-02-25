import { StatusType } from './enums/status-type.enum';
import { Project } from './models/project.model';

export const devChallengesProjectList: Project[] = [
  {
    title: '404 Not Found',
    description:
      'This challenge is suitable for you if you just stated with coding. The challenge will test your basic CSS and HTML skills.',
    src: '/projects/dev-challenges/404-not-found.png',
    tools: ['NextJS', 'TailwindCSS'],
    status: StatusType.InProgress,
    href: 'https://dev-challenges-not-found-hjcasayas.vercel.app/',
  },
];
