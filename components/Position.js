import Image from "next/image";
import styles from "../styles/Position.module.css";

const Position = (
    {
        logo,
        marginTop,
        positionTitle,
        organization,
        dateRange,
        accomplishments,
        skills
    }
) => {
    return (
        <div className={styles.positionContainer}>
            <div className={styles.logo}>
                <Image
                    src={logo}
                    alt={`${organization} logo`}
                    width={300}
                    style={{width: "100%", height: "auto"}}
                    priority
                />
            </div>
            <div 
                className={styles.positionInformation}
                style={{marginTop}}
            >
                <h2>{positionTitle}</h2>
                <p>{organization}</p>
                <i>{dateRange}</i>
                <ul>
                    {accomplishments.map((accomplishment, index) =>
                        <li key={index}>
                            {accomplishment}
                        </li>
                    )}
                </ul>
                {/* <div className={styles.positionSkills}>
                    <p>Skills</p>
                </div> */}
            </div>
        </div>
    );
}

export default Position;