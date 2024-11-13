import styles from "./SkillsStyles.module.css";
import checkMarkLight from "../../assets/checkmark-light.svg";
import checkMarkDark from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === "light" ? checkMarkLight : checkMarkDark;

  const Basic_skills = ["HTML", "CSS", "JavaScript", "TypeScript", "Node"];
  const Intermediate_skills = ["React", "Angular", "Tailwind CSS", "Selenium", "Redux"];
  const Advanced_skills = ["Next", "Vite", "Git", "Docker", "Kubernetes"];

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">skills</h1>
      <div className={styles.skillList}>
        {Basic_skills.map((skill) => (
          <SkillList key={skill} src={checkMarkIcon} skill={skill} />
        ))}
      </div>
      <hr />
      <div className={styles.skillList}>
        {Intermediate_skills.map((skill) => (
          <SkillList key={skill} src={checkMarkIcon} skill={skill} />
        ))}
      </div>
      <hr />
      <div className={styles.skillList}>
        {Advanced_skills.map((skill) => (
          <SkillList key={skill} src={checkMarkIcon} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;