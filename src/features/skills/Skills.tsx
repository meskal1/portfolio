import { useState, CSSProperties } from 'react'

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

export const Skills = () => {
  const [isTitleLoaded, setIsTitleLoaded] = useState('')

  const handleTitleAnimationEnd = () => setIsTitleLoaded(s.showItems)

  return (
    <section className={s.skills}>
      <div className={s.skills__container}>
        <div className={s.skills__content}>
          <h2 className={s.skills__title} onAnimationEnd={handleTitleAnimationEnd}>
            skills
          </h2>
          <div className={s.skills__block_items}>
            {skillsArray.map((el, i) => {
              return (
                <div
                  key={i}
                  className={`${s.hideItems} ${isTitleLoaded}`}
                  style={{ '--delay': `${i / 8}s` } as CSSProperties}
                >
                  <p className={s.skills__item}>{el}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
