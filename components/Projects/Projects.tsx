import React from 'react';
import { H } from '../H/H';
import styles from './Projects.module.scss';
import Image from 'next/image';
import ProjectImage from '../../images/project.jpg';
import ViewIcon from './view.svg';
import { P } from '../P/P';

export const Projects = () => {
  return (
    <section className={styles.wrapper}>
      <H appearance='uppercase' border='bottom'>
        Проекты
      </H>
      <div className={styles.projects}>
        <div className={styles.item}>
          <Image src={ProjectImage} alt='Проект' />
          <div className={styles.overlay}>
            <ViewIcon />
            <P>Краткое описание</P>
          </div>
        </div>
        <div className={styles.item}>
          <Image src={ProjectImage} alt='Проект' />
          <div className={styles.overlay}>
            <ViewIcon />
            <P>Краткое описание</P>
          </div>
        </div>
        <div className={styles.item}>
          <Image src={ProjectImage} alt='Проект' />
          <div className={styles.overlay}>
            <ViewIcon />
            <P>Краткое описание</P>
          </div>
        </div>
        <div className={styles.item}>
          <Image src={ProjectImage} alt='Проект' />
          <div className={styles.overlay}>
            <ViewIcon />
            <P>Краткое описание</P>
          </div>
        </div>
        <div className={styles.item}>
          <Image src={ProjectImage} alt='Проект' />
          <div className={styles.overlay}>
            <ViewIcon />
            <P>Краткое описание</P>
          </div>
        </div>
        <div className={styles.item}>
          <Image src={ProjectImage} alt='Проект' />
          <div className={styles.overlay}>
            <ViewIcon />
            <P>Краткое описание</P>
          </div>
        </div>
      </div>
    </section>
  );
};
