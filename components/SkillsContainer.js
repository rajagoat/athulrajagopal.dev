import styles from "../styles/SkillsContainer.module.css";
import Skill from "./Skill";

const SkillsContainer = ({ skills, color, backgroundColor, numberPerRow, aligned }) => {
    return (
        <div className={aligned ? styles.skillsContainerAligned : styles.skillsContainer}>
            {skills.map((skill, index) =>
                <Skill name={skill} color={color} backgroundColor={backgroundColor} key={index}/>
            ).reduce((r, skill, index) => {
                index % numberPerRow === 0 && r.push([]);
                r[r.length - 1].push(skill);
                return r;
            }, []).map((rowContent, index) =>
                <div className={aligned ? styles.rowAligned :styles.row} key={index}>{rowContent}</div>
            )}
        </div>
    );
}

export default SkillsContainer;