import styles from './SkillsStyles.module.css';
import checkMarkLight from '../../assets/checkmark-light.svg'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';

function Skills() {
  return <section id='skills' className={styles.container}>

    <h1 className='sectionTitle'>skills</h1>
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill={"HTML"}/>
        <SkillList src={checkMarkIcon} skill={"CSS"}/>
        <SkillList src={checkMarkIcon} skill={"JavaScript"}/>
        <SkillList src={checkMarkIcon} skill={"TypeScript"}/>
        <SkillList src={checkMarkIcon} skill={"Node"}/>
    </div>
    <hr />
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill={"React"}/>
        <SkillList src={checkMarkIcon} skill={"Angular"}/>
        <SkillList src={checkMarkIcon} skill={"Tailwind CSS"}/>
        <SkillList src={checkMarkIcon} skill={"Next"}/>
        <SkillList src={checkMarkIcon} skill={"Vite"}/>
        <SkillList src={checkMarkIcon} skill={"Git"}/>
    </div>
    <hr />
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill={"Redux"}/>
        <SkillList src={checkMarkIcon} skill={"WebPack"}/>
        <SkillList src={checkMarkIcon} skill={"Git"}/>
        <SkillList src={checkMarkIcon} skill={"Selenium"}/>
        <SkillList src={checkMarkIcon} skill={"Bootstrap"}/>
        <SkillList src={checkMarkIcon} skill={"GitHub"}/>
    </div>
  </section>
}

export default Skills