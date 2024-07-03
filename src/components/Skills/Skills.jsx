import React from 'react'
import styles from '../Skills/SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML"/>

        <SkillList src={checkMarkIcon} skill="CSS"/>

        <SkillList src={checkMarkIcon} skill="Javascript"/>

        <SkillList src={checkMarkIcon} skill="TypeScript"/>

        <SkillList src={checkMarkIcon} skill="Node"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React"/>

        <SkillList src={checkMarkIcon} skill="MongoDB"/>

        <SkillList src={checkMarkIcon} skill="PHP"/>

        <SkillList src={checkMarkIcon} skill="Tailwind"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Bootstrap"/>

        <SkillList src={checkMarkIcon} skill="Git"/>

        <SkillList src={checkMarkIcon} skill="C# ASP.NET MVC"/>

        <SkillList src={checkMarkIcon} skill="NEXTjs"/>

        <SkillList src={checkMarkIcon} skill="SQL Server"/>
      </div>
    </section>
  )
}

export default Skills
