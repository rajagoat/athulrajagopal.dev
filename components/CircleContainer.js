import Image from 'next/image'
import Circle from '../components/Circle'
import styles from '../styles/CircleContainer.module.css'

const CircleContainer = () => {
    return (
        <div className={styles.circleContainer}>
            <Circle 
                size={89} 
                backgroundColor={"#0559DB"} 
                topSm={-10}
                topMd={60} 
                topLg={72.8} 
                leftSm={-21}
                leftMd={30} 
                leftLg={35} 
            />
            <Circle 
                size={208} 
                backgroundColor={"#4088EC"} 
                topSm={-102} 
                topMd={-72} 
                topLg={-72} 
                leftSm={240}
                leftMd={270}  
                leftLg={370} 
            />
            <Circle 
                size={77} 
                backgroundColor={"#7DB5F6"} 
                topSm={344}
                topMd={440}  
                topLg={510} 
                leftSm={257}
                leftMd={360}
                leftLg={429} 
            />
            <div className={styles.memoji}>
                <Image
                    src="/assets/memoji-wave.png"
                    fill
                    alt="Apple Memoji of me waving"
                    priority
                    sizes="600px,
                            (min-width :1294px) 900px"
                />
            </div>
        </div>
    );
}

export default CircleContainer;