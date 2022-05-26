import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import { Menu } from '../components/Menu/Menu';
import { Header } from '../components/Header/Header';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Menu className={styles.menu} />
      <div className={styles.divider} />
      <Header className={styles.title} />
    </div>
  );
};

export default Home;
