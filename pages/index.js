import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import CircleContainer from '../components/CircleContainer';
import { Icon } from '@iconify/react';
import arrowDown from '@iconify/icons-mdi/arrow-down';
import undrawTeam from "../public/assets/undraw-engineering-team.svg";
import SkillsContainer from '../components/SkillsContainer';

export default function Home() {
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
      <div className={styles.offset}>
        <div className={styles.divider}>
          {/* <Image
          src={layeredWaves}
          fill
          alt="waves in several shades of blue"
        /> */}
        </div>
        <section className={styles.main}>
          <div className={styles.mainText}>
            <p>Welcome to my page!</p>
            <p>I’m currently an undergraduate student at the <b>University of Calgary</b>, pursuing a dual major in <b>Software Engineering</b> and <b>Commerce</b>.</p>
            <p>With more than two years of experience developing software for non-profit organizations, student teams, and hackathons, I am well-versed in creating quality software solutions to address real-world problems.</p>
          </div>
          <Image
            src={undrawTeam}
            width={280}
            height={143}
            alt="team of software engineers speaking with one another"
          />
          <div className={styles.mainText}>
            <p>Here’s some of the tools and technologies I have picked up along the way:</p>
          </div>
          <SkillsContainer
              skills={[
                "C",
                "C++",
                "Java",
                "JavaScript",
                "TypeScript",
                "Node.js",
                "Express",
                "React",
                "Next.js",
                "REST API",
                "SQL",
                "NoSQL"
              ]}
              numberPerRow={2}
            />
          <div className={styles.mainText}>
            <p>To learn even more about me, check out the links below. Or if you prefer, here&apos;s my resume.</p>
          </div>
        </section>
      </div>
    </div>
  )
}
