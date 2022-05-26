import { HeaderType } from './Header.type';
import ProfilePicture from '../../images/profile.jpg';
import styles from './Header.module.scss';
import classNames from 'classnames';
import Image from 'next/image';

export const Header = ({ className, ...props }: HeaderType) => {
  return (
    <div className={classNames(className, styles.wrapper)} {...props}>
      <h1>Frontend</h1>
      <p>
        Mission-driven full stack developer with a passion for thoughtful UI design, collaboration,
        and teaching.
      </p>
      <div className={styles.imageContainer}>
        <Image
          height={250}
          width={250}
          className={styles.image}
          src={ProfilePicture}
          alt='ProfilePicture'
        />
      </div>
    </div>
  );
};
