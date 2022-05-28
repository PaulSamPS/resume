import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import { Menu } from '../components/Menu/Menu';
import { Header } from '../components/Header/Header';
import { Intro } from '../components/Intro/Intro';
import { Experience } from '../components/Experience/Experience';
import { Skills } from '../components/Skills/Skills';
import { Education } from '../components/Education/Education';
import { Projects } from '../components/Projects/Projects';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Menu className={styles.menu} />
      <div className={styles.divider} />
      <Header className={styles.title} />
      <Intro className={styles.intro} />
      <Experience className={styles.experience} />
      <Skills />
      <Education />
      <Projects />
    </div>
  );
};

export default Home;
