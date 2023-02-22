import { NextPage } from 'next';
import { ProjectCardComponent } from '../components/project-card.component';
import { frontendMentorProjectList } from '../project/frontend-mentor.project-list';

const HomePage: NextPage = () => {
  return (
    <div>
      <h2 className="text-gray-800 text-xl leading-7 font-bold mb-1">
        <a
          className="underline"
          rel="noreferrer"
          target="_blank"
          href="https://www.frontendmentor.io/"
        >
          Frontend Mentor
        </a>{' '}
        Solutions
      </h2>
      <div className="mx-[-.75rem] flex flex-wrap">
        {frontendMentorProjectList.map((p, index) => (
          <a
            target="_blank"
            rel="noreferrer"
            className="flex p-3 w-full sm:w-1/2 lg:w-1/3 cursor-pointer"
            key={p.src}
            href={p.href}
          >
            <ProjectCardComponent {...p} index={index} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
