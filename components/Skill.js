import { Lora } from "next/font/google";
import styles from "../styles/Skill.module.css";

const lora = Lora({
  subsets: ['latin'],
  weight: ['400']
});

const Skill = ({name}) => {
    return (
        <div className={`${lora.className} ${styles.skill}`}>
          <p>{name}</p>
        </div>
    );
}
 
export default Skill;