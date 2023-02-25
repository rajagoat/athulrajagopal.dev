import Head from 'next/head'
import styles from '../styles/Home.module.css'
import CircleContainer from '../components/CircleContainer';

export default function Home() {
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Athul Rajagopal</title>
        <meta name="description" content="Portfolio and personal website of Athul Rajagopal - Software Engineering and Commerce student at the University of Calgary." />
        <link rel="icon" type="image/png" href="/icons/favicon.png" />
      </Head>
      <CircleContainer />
    </div>
  )
}
