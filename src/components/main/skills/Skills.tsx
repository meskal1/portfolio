import React, { useEffect, useState } from 'react'
import s from './Skills.module.scss'
import { Lottie } from '@crello/react-lottie'
import animationData from '../../../lottie/skills.json'

type SkillsType = {}

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
//
export const Skills: React.FC<SkillsType> = React.memo(() => {
  console.log('render skills')
  const skills = skillsArray.map((el, i) => {
    return (
      <p key={i} className={s.skills__item}>
        {el}
      </p>
    )
  })
  //Лотти отвечает за анализ данных анимации, поступающих через JSON, вычисление состояния каждой анимации в определенный момент времени и точное ее отображение на экране.
  const defaultOptions = {
    loop: false,
    autoplay: false, //Если установлено значение true, анимация будет воспроизводиться сразу после загрузки.
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      className: `${s.avatarSpeed}`,
      progressiveLoad: true, //будет загружать анимацию постепенно, пока требуются слои
      viewBoxOnly: true, //если true, не будет добавлять свойства ширины, высоты и преобразования к корневому элементу
    },
  }
  const [isAvatarPaused, setIsAvatarPaused] = useState<'playing' | 'stopped' | 'paused'>('stopped')
  const onTitleAnimationEnd = () => setIsAvatarPaused('playing')
  const onClickAnimationPaused = () => {
    isAvatarPaused === 'paused' ? setIsAvatarPaused('playing') : setIsAvatarPaused('paused')
  }

  //Поскольку чтение (анализ) данных тяжелой анимации блокирует основной поток, что заметно глазу при рендере анимационной волны, поставил задержку где не будет заметно.
  const [canIRenderLottie, setCanIRenderLottie] = useState<boolean>(false)
  React.useEffect(() => {
    const lottieRender = setTimeout(() => {
      setCanIRenderLottie(true)
    }, 650)
    return () => clearTimeout(lottieRender)
  }, [])

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
              {canIRenderLottie && <Lottie config={defaultOptions} playingState={isAvatarPaused} speed={1} />}
            </div>
          </div>
        </div>
      </section>
    </>
  )
})
