import React, { ForwardedRef, forwardRef } from 'react';
import { H } from '../H/H';
import styles from './Projects.module.scss';
import Image from 'next/image';
import ViewIcon from './view.svg';
import { P } from '../P/P';
import { ProjectsProps } from './Projects.props';
import Link from 'next/link';

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
              src={`http://176.113.83.209:5000/projects/${p.projectImg}`}
              alt={p.name}
              width={356}
              height={241}
              priority={true}
            />
            <div className={styles.overlay}>
              <Link href={p.projectLink} target={'_blank'}>
                <ViewIcon />
              </Link>
              <P>{p.description}</P>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
