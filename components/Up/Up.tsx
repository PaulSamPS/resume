import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import styles from './Up.module.scss';
import UpIcon from '../../images/icons/up.svg';
import { useScrollUp } from '../../hooks/useScrollUp';

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
