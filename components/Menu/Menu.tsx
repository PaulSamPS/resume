import styles from './Menu.module.scss';
import { useState } from 'react';
import classNames from 'classnames';
import { MenuType } from './Menu.type';
const links = [
  { id: 0, link: 'Обо мне' },
  { id: 1, link: 'Опыт' },
  { id: 2, link: 'Навыки' },
  { id: 3, link: 'Проекты' },
  { id: 4, link: 'Резюме' },
];

export const Menu = ({ className, ...props }: MenuType) => {
  const [activeLink, setActiveLink] = useState<number>(0);
  return (
    <header className={classNames(className, styles.header)} {...props}>
      <h1>Павел Самойленко</h1>
      <ul>
        {links.map((l, index) => (
          <li
            className={classNames({
              [styles.active]: activeLink === index,
            })}
            key={l.id}
            onClick={() => setActiveLink(index)}
          >
            {l.link}
          </li>
        ))}
      </ul>
    </header>
  );
};
