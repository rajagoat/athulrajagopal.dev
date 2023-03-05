import Image from 'next/image'
import Circle from '../components/Circle'
import styles from '../styles/CircleContainer.module.css'
import useViewport from "../hooks/useViewport";
import { BREAKPOINT_MD, BREAKPOINT_LG, SCALE_FACTOR_MD, SCALE_FACTOR_LG } from "../constants";

const CircleContainer = () => {
    const { width } = useViewport();

    const determineDist = (distSm, distMd, distLg) => {
        if (width < BREAKPOINT_MD) {
            return distSm;
        } else if (width < BREAKPOINT_LG) {
            return distMd;
        } else {
            return distLg;
        }
    };

    const determineSize = (size) => {
        if (width < BREAKPOINT_MD) {
            return size;
        } else if (width < BREAKPOINT_LG) {
            return size * SCALE_FACTOR_MD;
        } else {
            return size * SCALE_FACTOR_LG;
        }
    };

    return (
        <div className={styles.circleContainer}>
            <Circle 
                size={determineSize(89)} 
                backgroundColor={"#0559DB"}
                top={determineDist(-10, 60, 72.8)} 
                left={determineDist(-21, 30, 35)}
            />
            <Circle 
                size={determineSize(198)} 
                backgroundColor={"#4088EC"}
                top={determineDist(-102, -72, -72)}
                left={determineDist(240, 270, 370)}
            />
            <Circle 
                size={determineSize(77)} 
                backgroundColor={"#7DB5F6"}
                top={determineDist(344, 440, 540)}
                left={determineDist(257, 360, 429)}
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