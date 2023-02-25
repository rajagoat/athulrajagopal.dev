import Head from 'next/head'
import Image from 'next/image';
import useTheme from "../hooks/useTheme";
import styles from '../styles/Home.module.css'
import CircleContainer from '../components/CircleContainer';
import { Icon } from '@iconify/react';
import arrowDown from '@iconify/icons-mdi/arrow-down';
import layeredWavesDark from "../public/assets/layered-waves-haikei-dark.svg";
import layeredWavesLight from "../public/assets/layered-waves-haikei-light.svg";

export default function Home() {
  const { activeTheme } = useTheme();

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Athul Rajagopal</title>
        <meta name="description" content="Portfolio and personal website of Athul Rajagopal - Software Engineering and Commerce student at the University of Calgary." />
        <link rel="icon" type="image/png" href="/icons/favicon.png" />
      </Head>
      <CircleContainer />
      <section className={styles.mainIntro}>
        <h1>Hello<br />world!</h1>
        <p>I&apos;m Athul! Keep scrolling to learn a little more about me</p>
        <Icon
          icon={arrowDown}
          width="36"
          height="36"
          className={styles.arrowDown}
        />
      </section>
      <div className={styles.divider}>
        <Image
          src={activeTheme === "dark" ? layeredWavesDark : layeredWavesLight}
          fill
          alt="waves in several shades of blue"
        />
      </div>

    </div>
  )
}
