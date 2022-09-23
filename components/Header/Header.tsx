import { ForwardedRef, forwardRef } from 'react';
import { HeaderType } from './Header.type';
import ProfilePicture from '../../images/profile.jpg';
import WhatsappIcon from './whatsapp.svg';
import EmailIcon from './email.svg';
import classNames from 'classnames';
import Image from 'next/image';
import { H, P, Span } from '../Ui';

import styles from './Header.module.scss';

export const Header = forwardRef(({ className, ...props }: HeaderType, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={classNames(className, styles.wrapper)} ref={ref} {...props}>
      <H>Frontend - разработчик</H>
      <P className={styles.subtitle}>
        Целеустремленный frontend разработчик со страстью к разработке пользовательского интерфейса, сотрудничеству и
        обучению.
      </P>
      <div className={styles.imageContainer}>
        <Image height={250} width={250} className={styles.image} src={ProfilePicture} alt='ProfilePicture' />
      </div>
      <div className={styles.contacts}>
        <div className={styles.item}>
          <div className={styles.icon}>
            <WhatsappIcon />
            <Span>Whatapp</Span>
          </div>
          <P>+79225576656</P>
        </div>
        <div className={styles.line} />
        <div className={styles.item}>
          <div className={styles.icon}>
            <EmailIcon />
            <Span>Email</Span>
          </div>
          <P>psamoylenko2@gmail.com</P>
        </div>
      </div>
    </div>
  );
});
