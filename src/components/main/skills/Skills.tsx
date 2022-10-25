import React, { useState } from 'react'
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
  const [isTitleLoaded, setIsTitleLoaded] = useState('')

  let style = ''
  const skills = skillsArray.map((el, i) => {
    const random = +(Math.random() * 2).toFixed(2)
    //  let style = ''

    setTimeout(() => {
      //  style = s.showItems
      setIsTitleLoaded(s.showItems)
    }, random)

    console.log(random)

    return (
      <div key={i} className={`${s.hideItems} ${style}`}>
        <p className={s.skills__item}>{el}</p>
      </div>
    )
  })

  const onTitleAnimationEnd = () => {
    //  setIsTitleLoaded(s.showItems)
  }

  return (
    <>
      <section className={s.skills}>
        <div className={s.skills__container}>
          <div className={s.skills__content}>
            <h2 className={s.skills__title} onAnimationEnd={onTitleAnimationEnd}>
              skills
            </h2>
            <div className={s.skills__block_items}>{skills}</div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Skills
