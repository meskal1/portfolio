import React, { useState } from 'react'
import s from './Skills.module.scss'
import { Lottie } from '@crello/react-lottie'
// import animationData from '../../../lottie/skills.json'

type SkillsType = {
  animationSkills: any
}

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
  'After Effects',
  'Illustrator',
  'SASS',
  'CSS',
  'HTML',
]

export const Skills: React.FC<SkillsType> = React.memo(({ animationSkills }) => {
  const skills = skillsArray.map((el, i) => {
    return (
      <p key={i} className={s.skills__item}>
        {el}
      </p>
    )
  })
  const defaultOptions = {
    loop: false,
    autoplay: false, //Если установлено значение true, анимация будет воспроизводиться сразу после загрузки.
    //  animationData: animationData,
    animationData: animationSkills,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      className: `${s.avatarSpeed}`,
      viewBoxOnly: true, //если true, не будет добавлять свойства ширины, высоты и преобразования к корневому элементу
    },
  }
  const [isAvatarPaused, setIsAvatarPaused] = useState<'playing' | 'stopped' | 'paused'>('stopped')
  const onTitleAnimationEnd = () => setIsAvatarPaused('playing')
  const onClickAnimationPaused = () => {
    isAvatarPaused === 'paused' ? setIsAvatarPaused('playing') : setIsAvatarPaused('paused')
  }

  return (
    <>
      <section className={s.skills}>
        <div className={s.skills__container}>
          <div className={s.skills__content}>
            <h2 className={s.skills__title} onAnimationEnd={onTitleAnimationEnd}>
              Skills
            </h2>
            <div className={s.skills__block_items}>
              {skills}
              {/* <p className={`${s.skills__item} ${s.skills__absolute}`}>
                Handsome
              </p>
              <p className={`${s.skills__item} ${s.skills__absolute}`}>
                Awesome
              </p>
              <p className={`${s.skills__item} ${s.skills__absolute}`}>
                Curious
              </p> */}
            </div>
            <div className={s.avatarBackPlate}></div>
            <div className={s.avatar} onClick={onClickAnimationPaused}>
              <Lottie config={defaultOptions} playingState={isAvatarPaused} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
})
