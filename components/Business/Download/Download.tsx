import React, { ForwardedRef, forwardRef } from 'react';
import styles from './Download.module.scss';
import { saveAs } from 'file-saver';

export const Download = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  const saveFile = () => {
    saveAs('/resume.pdf', 'resume.pdf');
  };
  return (
    <div className={styles.wrapper} ref={ref}>
      <div className={styles.download}>
        <a onClick={saveFile}>Скачать резюме</a>
      </div>
    </div>
  );
});
