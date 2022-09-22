import React, { ForwardedRef, forwardRef } from 'react';
import { H } from '../Ui/H/H';
import styles from './Download.module.scss';
import { saveAs } from 'file-saver';

export const Download = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  const saveFile = () => {
    saveAs('http://176.113.83.209:5000/resume.txt', 'resume.txt');
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
