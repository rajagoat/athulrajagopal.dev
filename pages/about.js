import Head from 'next/head';
import Image from 'next/image';
import { Lora } from "next/font/google";
import styles from "../styles/About.module.css";
import memojiLaptop from "../public/assets/memoji-laptop.png";
import rocky from "../public/assets/rocky.png";
import ContactForm from '../components/ContactForm';

const lora = Lora({
    subsets: ['latin'],
    weight: ['400'],
    style: 'italic'
  });

const About = () => {
    return (
        <>
            <Head>
                <title>About | Athul Rajagopal</title>
            </Head>
            <main className={styles.about}>
                <h1>About</h1>
                <div className={styles.profile}>
                    <div className={styles.backdrop}></div>
                    <Image
                        src={memojiLaptop}
                        alt="Apple Memoji behind a laptop"
                        width={201}
                        height={201}
                        className={styles.memoji}
                    />
                </div>
                <div className={styles.textContainer}>
                    <p>My interests are wide and varied, ranging from international affairs to homemade food to space exploration!</p>
                    <p>At the core of it all, however, <b>I am passionate about using new technologies to address our most pressing challenges.</b> I love picking up new tools along the way, and typically learn best in hands-on environments (hence why I enjoy programming).</p>

                    <span>In my free time, you&apos;ll probably find me:</span>
                    <ul>
                        <li>playing on my Nintendo Switch 🎮</li>
                        <li>eating cheesecake 🍰</li>
                        <li>spending time with my dog Rocky 🐕</li>
                    </ul>
                </div>
                <figure className={styles.figure}>
                    <Image
                        src={rocky}
                        alt="labrador retriever"
                        sizes="(max-width: 600px) 70vw,
                            512px"
                        style={{
                            width: '70vw',
                            maxWidth: '512px',
                            height: 'auto',
                            borderRadius: 10,
                            marginBottom: 5
                        }}
                    />
                    <figcaption className={lora.className}>play ball!</figcaption>
                </figure>
                <div className={styles.contactFormContainer}>
                    <ContactForm />
                </div>
            </main>
        </>
    );
}

export default About;