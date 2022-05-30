import React from 'react';
import styles from './Menu.module.scss';
import MenuIcon from '../../images/icons/menu.svg';
import LabelIcon from '../../images/icons/label.svg';
import { MenuProps } from './Menu.props';
import { useScreenSize } from '../../helpers/useScreenSize';
import { Modal } from '../Modal/Modal';
import classNames from 'classnames';

export const Menu = ({ menu, setLink }: MenuProps) => {
  const [modal, setModal] = React.useState<boolean>(false);
  const { screenWidth } = useScreenSize();

  const menuMobile = (link: string) => {
    setLink(link);
    setModal(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        {screenWidth >= 768 ? (
          <ul>
            {menu.map((m) => (
              <li key={m._id} onClick={() => setLink(m.name)}>
                {m.name}
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.burger} onClick={() => setModal(true)}>
            <MenuIcon />
          </div>
        )}
        <Modal setModal={setModal} modal={modal}>
          <ul className={classNames({ [styles.mobile]: screenWidth <= 768 })}>
            {menu.map((m) => (
              <li key={m._id} onClick={() => menuMobile(m.name)}>
                <LabelIcon />
                {m.name}
              </li>
            ))}
          </ul>
        </Modal>
      </div>
    </div>
  );
};
