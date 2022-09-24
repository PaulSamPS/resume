import React from 'react';
import { ModalProps } from './Modal.props';
import { CloseIcon } from '../../../Icons';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './Modal.module.scss';

export const Modal: React.FC<ModalProps> = ({ children, setModal, modal }): JSX.Element => {
  const handleCloseModal = () => {
    setModal(false);
  };

  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  const variantsModal = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  return (
    <AnimatePresence mode='wait'>
      {modal && (
        <motion.div
          className={styles.overlay}
          onClick={handleCloseModal}
          animate={modal ? 'open' : 'closed'}
          variants={variants}
          initial={'closed'}
          exit={'closed'}
          transition={{
            duration: 0.5,
          }}
        >
          <motion.div
            className={styles.modal}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            animate={modal ? 'open' : 'closed'}
            variants={variantsModal}
            initial={'closed'}
            exit={'closed'}
            transition={{
              duration: 0.5,
            }}
          >
            <CloseIcon onClick={handleCloseModal} />
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
