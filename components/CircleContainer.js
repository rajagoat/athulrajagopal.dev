import Image from 'next/image'
import Circle from '../components/Circle'
import styles from '../styles/CircleContainer.module.css'
import useViewport from "../hooks/useViewport";
import { SCALE_FACTOR_MD, SCALE_FACTOR_LG } from "../constants";

const CircleContainer = () => {
    const { handleBreakpoint } = useViewport();

    const determineSize = (size) => {
        return handleBreakpoint(size, size * SCALE_FACTOR_MD, size * SCALE_FACTOR_LG);
    };

    return (
        <div className={styles.circleContainer}>
            <Circle
                size={determineSize(89)}
                backgroundColor={"#0559DB"}
                top={handleBreakpoint(-10, 60, 72.8)}
                left={handleBreakpoint(-21, 30, 35)}
            />
            <Circle
                size={determineSize(198)}
                backgroundColor={"#4088EC"}
                top={handleBreakpoint(-102, -72, -72)}
                left={handleBreakpoint(240, 270, 370)}
            />
            <Circle
                size={determineSize(77)}
                backgroundColor={"#7DB5F6"}
                top={handleBreakpoint(344, 440, 540)}
                left={handleBreakpoint(257, 360, 429)}
            />
            <div className={styles.memoji}>
                <Image
                    src="/assets/memoji-wave.png"
                    fill
                    alt="Apple Memoji of me waving"
                    priority
                    sizes="600px,
                            (min-width :1306px) 900px"
                />
            </div>
        </div>
    );
}

export default CircleContainer;