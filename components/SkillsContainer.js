import styles from "../styles/SkillsContainer.module.css";
import Skill from "./Skill";

const SkillsContainer = ({ skills, numberPerRow }) => {
    return (
        <div className={styles.skillsContainer}>
            {skills.map(skill =>
                <Skill id={skill} name={skill} />
            ).reduce((r, skill, index) => {
                index % numberPerRow === 0 && r.push([]);
                r[r.length - 1].push(skill);
                return r;
            }, []).map(rowContent =>
                <div className={styles.row}>{rowContent}</div>
            )}
        </div>
    );
}

export default SkillsContainer;