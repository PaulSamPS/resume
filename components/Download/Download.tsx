import React, { ForwardedRef, forwardRef } from 'react';
import { H } from '../H/H';
import styles from './Download.module.scss';
import { saveAs } from 'file-saver';

export const Download = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  const saveFile = () => {
    saveAs('http://localhost:4040/resume.txt', 'resume.txt');
  };
  return (
    <div className={styles.wrapper} ref={ref}>
      <div className={styles.download}>
        <H appearance='uppercase' onClick={saveFile}>
          Скачать резюме
        </H>
      </div>
    </div>
  );
});
