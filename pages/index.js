import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import CircleContainer from '../components/CircleContainer';
import { Icon } from '@iconify/react';
import arrowDown from '@iconify/icons-mdi/arrow-down';
import undrawTeam from "../public/assets/undraw-engineering-team.svg";
import SkillsContainer from '../components/SkillsContainer';
import Links from '../components/Links';
import ContactForm from '../components/ContactForm';
import useViewport from "../hooks/useViewport";
import { BREAKPOINT_MD, BREAKPOINT_LG } from '../constants';

export default function Home() {
  const { width } = useViewport();
  
  const handleBreakpoint = (sm, md, lg) => {
    if (width < BREAKPOINT_MD) {
      return sm;
    } else if (width < BREAKPOINT_LG) {
      return md;
    } else {
      return lg;
    }
  };

  return (
    <>
      <Head>
        <title>Home | Athul Rajagopal</title>
      </Head>
      <div className={styles.mainIntroContainer}>
        <CircleContainer />
        <section className={styles.mainIntro}>
          <h1>Hello world!</h1>
          <p>I&apos;m Athul! Keep scrolling to learn a little more about me</p>
          <Icon
            icon={arrowDown}
            width={handleBreakpoint("36", "48" ,"64")}
            height={handleBreakpoint("36", "48" ,"64")}
            className={styles.arrowDown}
          />
        </section>
      </div>
      <div className={styles.offset}>
        <div className={styles.divider} />
        <div className={styles.mainBackground}>
          <section className={styles.main}>
            <div className={styles.mainText}>
              <p>Welcome to my page!</p>
              <p>I’m currently an undergraduate student at the <b>University of Calgary</b>, pursuing a dual major in <b>Software Engineering</b> and <b>Commerce</b>.</p>
              <p>With more than two years of experience developing software for non-profit organizations, student teams, and hackathons, I am well-versed in creating quality software solutions to address real-world problems.</p>
            </div>
            <Image
              src={undrawTeam}
              width={handleBreakpoint(280, 420, 560)}
              height={handleBreakpoint(143, 214.5, 286)}
              style={{ height: "auto" }}
              alt="team of software engineers speaking with one another"
            />
            <div className={styles.mainText}>
              <p>Here are some tools and technologies I have picked up along the way:</p>
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
              numberPerRow={handleBreakpoint(2, 2 ,3)}
            />
            <div className={styles.mainText}>
              <p>To learn even more about me, check out the links below. Or if you prefer,
                <a target="_blank" href="/uploads/Athul_Rajagopal.pdf"> <b><u>here&apos;s my resume</u></b></a>.
              </p>
            </div>
            <Links
              links={[
                "Experience",
                "Projects",
                "About"
              ]}
            />
            <ContactForm />
          </section>
        </div>
      </div>
    </>
  )
}
