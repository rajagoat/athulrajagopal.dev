import Image from 'next/image'
import Circle from '../components/Circle'
import styles from '../styles/CircleContainer.module.css'
import useViewport from "../hooks/useViewport";

const CircleContainer = () => {
    const { width } = useViewport();
    const BREAKPOINT = 827;

    return (
        <div className={styles.circleContainer}>
            <Circle size={89} backgroundColor={"#0559DB"} minTop={-10} top={72.8} minLeft={-21} left={35} />
            <Circle size={208} backgroundColor={"#4088EC"} minTop={-102} top={-72} minLeft={240} left={370} />
            <Circle size={220} backgroundColor={"#C0DFFC"} minTop={116} top={271} minLeft={6} left={111.5} />
            <Circle size={78} backgroundColor={"#7DB5F6"} minTop={284} top={539.5} minLeft={227} left={459} />
            <Image
                src="/assets/memoji-wave.jpg"
                width={width < BREAKPOINT ? 220 : 346.27}
                height={width < BREAKPOINT ? 256 : 402.93}
                className={styles.memoji}
                alt="Apple Memoji waving"
                priority
            />
        </div>
    );
}

export default CircleContainer;