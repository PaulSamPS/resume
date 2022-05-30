import React from 'react';
import styles from '../styles/Home.module.scss';
import { Header } from '../components/Header/Header';
import { Intro } from '../components/Intro/Intro';
import { Experience } from '../components/Experience/Experience';
import { Skills } from '../components/Skills/Skills';
import { Education } from '../components/Education/Education';
import { Projects } from '../components/Projects/Projects';
import { Download } from '../components/Download/Download';
import { IMenuItem } from '../interfaces/menu.interface';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { IProjectItem } from '../interfaces/project.interface';
import { ISkillItem } from '../interfaces/skills.interfface';
import { useScroll } from '../hooks/useScroll';

const Home = ({ menu, projects, skills }: HomeProps) => {
  const [link, setLink] = React.useState<string>('');
  const { introRef, experienceRef, skillsRef, educationRef, projectsRef, resumeRef } = useScroll(link);

  return (
    <div className={styles.container}>
      <header className={styles.wrapperMenu}>
        <div className={styles.menu}>
          <ul>
            {menu.map((m) => (
              <li key={m._id} onClick={() => setLink(m.name)}>
                {m.name}
              </li>
            ))}
          </ul>
        </div>
      </header>
      <Header ref={introRef} className={styles.title} />
      <Intro className={styles.intro} />
      <Experience ref={experienceRef} className={styles.experience} />
      <Skills ref={skillsRef} skills={skills} />
      <Education ref={educationRef} />
      <Projects ref={projectsRef} projects={projects} />
      <Download ref={resumeRef} />
    </div>
  );
};
export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const getMenu = await axios.get<IMenuItem[]>('http://localhost:4040/api/menu/');
  const getProjects = await axios.get<IProjectItem[]>('http://localhost:4040/api/projects/');
  const getSkills = await axios.get<ISkillItem[]>('http://localhost:4040/api/skills/');
  const menu = getMenu.data;
  const projects = getProjects.data;
  const skills = getSkills.data;
  return {
    props: {
      menu,
      projects,
      skills,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: IMenuItem[];
  projects: IProjectItem[];
  skills: ISkillItem[];
}
