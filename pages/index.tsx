import styles from '../styles/Home.module.scss';
import { Menu } from '../components/Menu/Menu';
import { Header } from '../components/Header/Header';
import { Intro } from '../components/Intro/Intro';
import { Experience } from '../components/Experience/Experience';
import { Skills } from '../components/Skills/Skills';
import { Education } from '../components/Education/Education';
import { Projects } from '../components/Projects/Projects';
import React from 'react';
import { Download } from '../components/Download/Download';

const Home = () => {
  const introRef = React.useRef<HTMLDivElement | null>(null);

  const scrollToInfo = () => {
    introRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    introRef.current?.focus();
  };

  return (
    <div className={styles.container}>
      <Menu className={styles.menu} scroll={() => scrollToInfo()} />
      <div className={styles.divider} />
      <Header className={styles.title} />
      <Intro className={styles.intro} />
      <Experience className={styles.experience} />
      <Skills ref={introRef} />
      <Education />
      <Projects />
      <Download />
    </div>
  );
};

export default Home;
