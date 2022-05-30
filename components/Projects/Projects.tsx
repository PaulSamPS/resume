import React, { ForwardedRef, forwardRef } from 'react';
import { H } from '../H/H';
import styles from './Projects.module.scss';
import Image from 'next/image';
import ViewIcon from './view.svg';
import { P } from '../P/P';
import { ProjectsProps } from './Projects.props';

export const Projects = forwardRef(({ projects }: ProjectsProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={styles.wrapper} ref={ref}>
      <H appearance='uppercase' border='bottom'>
        Проекты
      </H>
      <div className={styles.projects}>
        {projects.map((p) => (
          <div className={styles.item} key={p._id}>
            <Image
              src={`http://localhost:4040/projects/${p.projectImg}`}
              alt={p.name}
              width={356}
              height={241}
              priority={true}
            />
            <div className={styles.overlay}>
              <ViewIcon />
              <P>{p.description}</P>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
