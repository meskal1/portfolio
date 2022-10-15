import React from 'react'
import s from './Skills.module.scss'

const skillsArray = [
  'React',
  'Redux',
  'JavaScript',
  'TypeScript',
  'Rest API',
  'Axios',
  'Unit Tests',
  'SnapShot',
  'StoryBook',
  'Git',
  'SASS',
  'Illustrator',
  'After Effects',
  'Nginx',
]

const Skills = () => {
  console.log('render Skills')

  const skills = skillsArray.map((el, i) => {
    return (
      <p key={i} className={s.skills__item}>
        {el}
      </p>
    )
  })

  const onTitleAnimationEnd = () => {}

  return (
    <>
      <section className={s.skills}>
        <div className={s.skills__container}>
          <div className={s.skills__content}>
            <h2 className={s.skills__title} onAnimationEnd={onTitleAnimationEnd}>
              Skills
            </h2>
            <div className={s.skills__block_items}>{skills}</div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Skills
