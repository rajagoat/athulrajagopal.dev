import styles from "../styles/SkillsContainer.module.css";
import Skill from "./Skill";

const SkillsContainer = ({ skills, numberPerRow }) => {
    return (
        <div className={styles.skillsContainer}>
            {skills.map((skill, index) =>
                <Skill id={skill} name={skill} key={index}/>
            ).reduce((r, skill, index) => {
                index % numberPerRow === 0 && r.push([]);
                r[r.length - 1].push(skill);
                return r;
            }, []).map((rowContent, index) =>
                <div className={styles.row} key={index}>{rowContent}</div>
            )}
        </div>
    );
}

export default SkillsContainer;