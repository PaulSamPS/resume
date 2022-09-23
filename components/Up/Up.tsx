import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useScrollUp } from '../../hooks/useScrollUp';
import { UpIcon } from '../../Icons';

import styles from './Up.module.scss';

export const Up = (): JSX.Element => {
  const controls = useAnimation();
  const y = useScrollUp();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div className={styles.up} animate={controls} initial={{ opacity: 0 }}>
      <button onClick={scrollToTop}>
        <UpIcon />
      </button>
    </motion.div>
  );
};
