import React, { ForwardedRef, forwardRef } from 'react';
import { H, P } from '../../Ui';
import Image from 'next/image';
import { ProjectsProps } from './Projects.props';
import { ViewIcon } from '../../../Icons';

import styles from './Projects.module.scss';

export const Projects = forwardRef(({ projects }: ProjectsProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <section className={styles.wrapper} ref={ref}>
      <H appearance='uppercase' border='bottom'>
        Проекты
      </H>
      <div className={styles.projects}>
        {projects.map((p) => (
          <div className={styles.item} key={p._id}>
            <Image
              src={`http://176.113.83.209:5000/projects/${p.projectImg}`}
              alt={p.name}
              width={356}
              height={241}
              priority={true}
              title={p.name}
            />
            <div className={styles.overlay}>
              {p.projectLink !== '' && (
                <a href={p.projectLink} target={'_blank'}>
                  <ViewIcon />
                </a>
              )}
              <P>{p.description}</P>
              <a href={p.gitHub} target={'_blank'}>
                Посмотреть на github
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
