import Image from "next/image";
import styles from "../styles/Position.module.css";
import SkillsContainer from "./SkillsContainer";

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
                    style={{ width: "100%", height: "auto" }}
                    priority
                />
            </div>
            <div
                className={styles.information}
                style={{ marginTop }}
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
                <div className={styles.positionSkills}>
                    <p><u>Skills</u></p>
                    <SkillsContainer
                        skills={skills}
                        color={"black"}
                        backgroundColor={"#C0DFFC"}
                        numberPerRow={2}
                        aligned={true}
                    />
                </div>
            </div>
        </div>
    );
}

export default Position;