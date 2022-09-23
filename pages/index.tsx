import React from 'react';
import { Header } from '../components/Header/Header';
import { Intro } from '../components/Intro/Intro';
import { Experience } from '../components/Experience/Experience';
import { Skills } from '../components/Skills/Skills';
import { Education } from '../components/Education/Education';
import { Projects } from '../components/Projects/Projects';
import { Download } from '../components/Download/Download';
import { GetStaticProps } from 'next';
import { Menu } from '../components/Menu/Menu';
import { Up } from '../components/Up/Up';
import { motion, useSpring, useScroll } from 'framer-motion';
import { useScrollToBlock } from '../hooks/useScrollToBlock';
import { IEducations, IExp, IMenuItem, IProjectItem, ISkillItem } from '../interfaces';
import axios from 'axios';

import styles from '../styles/Home.module.scss';

const Home = ({ menu, projects, skills, experience, education }: HomeProps) => {
  const [link, setLink] = React.useState<string>('');
  const { introRef, experienceRef, skillsRef, educationRef, projectsRef, resumeRef } = useScrollToBlock(link);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className={styles.container}>
      <motion.div className={styles.progressBar} style={{ scaleX }} />
      <Menu menu={menu} setLink={setLink} />
      <Header ref={introRef} className={styles.title} />
      <Intro className={styles.intro} />
      <Experience ref={experienceRef} className={styles.experience} experience={experience} />
      <Skills ref={skillsRef} skills={skills} />
      <Education ref={educationRef} education={education} />
      <Projects ref={projectsRef} projects={projects} />
      <Download ref={resumeRef} />
      <Up />
    </div>
  );
};
export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const getMenu = await axios.get<IMenuItem[]>('http://176.113.83.209:5000/api/menu');
  const getProjects = await axios.get<IProjectItem[]>('http://176.113.83.209:5000/api/projects');
  const getSkills = await axios.get<ISkillItem[]>('http://176.113.83.209:5000/api/skills');
  const getExperience = await axios.get<IExp[]>('http://176.113.83.209:5000/api/experience');
  const getEducations = await axios.get<IEducations[]>('http://176.113.83.209:5000/api/educations');
  const menu = getMenu.data;
  const projects = getProjects.data;
  const skills = getSkills.data;
  const experience = getExperience.data;
  const education = getEducations.data;
  return {
    props: {
      menu,
      projects,
      skills,
      experience,
      education,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: IMenuItem[];
  projects: IProjectItem[];
  skills: ISkillItem[];
  experience: IExp[];
  education: IEducations[];
}
