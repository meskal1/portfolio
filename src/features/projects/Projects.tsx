import { useEffect, useState, MouseEvent, useRef, MutableRefObject, CSSProperties } from 'react'

import { DemoProject, SourceProject, Image } from '../../constants/links.enum'

import s from './Projects.module.scss'

const items = [
  {
    id: 1,
    img: Image.Cards,
    name: 'Cards',
    urlDemoName: 'Live Demo',
    urlDemo: DemoProject.Cards,
    urlGithub: SourceProject.Cards,
  },
  {
    id: 2,
    img: Image.SimpleChat,
    name: 'Simple chat',
    urlDemoName: 'Live Demo',
    urlDemo: DemoProject.SimpleChat,
    urlGithub: SourceProject.SimpleChat,
  },
  {
    id: 3,
    img: Image.LottieAnimation,
    name: 'Lottie animation',
    urlDemoName: 'Live Demo',
    urlDemo: DemoProject.LottieAnimation,
    urlGithub: SourceProject.LottieAnimation,
  },
  {
    id: 4,
    img: Image.LandingPractice,
    name: 'Landing practice',
    urlDemoName: 'Live Demo',
    urlDemo: DemoProject.LandingPractice,
    urlGithub: SourceProject.LandingPractice,
  },
  {
    id: 5,
    img: Image.Counter,
    name: 'Counter',
    urlDemoName: 'Live Demo',
    urlDemo: DemoProject.Counter,
    urlGithub: SourceProject.Counter,
  },
  {
    id: 6,
    img: Image.DrumKit,
    name: 'Drum Kit',
    urlDemoName: 'Live Demo',
    urlDemo: DemoProject.DrumKit,
    urlGithub: SourceProject.DrumKit,
  },
  {
    id: 7,
    img: Image.GuessTheNumber,
    name: 'Guess the number',
    urlDemoName: 'Live Demo',
    urlDemo: DemoProject.GuessTheNumber,
    urlGithub: SourceProject.GuessTheNumber,
  },
  {
    id: 8,
    img: Image.PigGame,
    name: 'Pig game',
    urlDemoName: 'Live Demo',
    urlDemo: DemoProject.PigGame,
    urlGithub: SourceProject.PigGame,
  },
  {
    id: 9,
    img: Image.CarAnimation,
    name: 'Car animation',
    urlDemoName: 'Live Demo',
    urlDemo: DemoProject.CarAnimation,
    urlGithub: SourceProject.CarAnimation,
  },
  {
    id: 10,
    img: Image.Todolist,
    name: 'Todolist',
    urlDemoName: 'Live Demo',
    urlDemo: DemoProject.Todolist,
    urlGithub: SourceProject.Todolist,
  },
]

export const Projects = () => {
  const [itemCenter, setItemCenter] = useState(0)
  const [styleCurtains, setStyleCurtains] = useState('')
  const swiperRef = useRef() as MutableRefObject<HTMLDivElement>
  const amountItems = items.length

  const handleClickSwipeRight = () => {
    setItemCenter(itemCenter === 0 ? amountItems - 1 : itemCenter - 1)
  }

  const handleClickSwipeLeft = () => setItemCenter((itemCenter + 1) % amountItems)

  const handleClickImage = (offset: number, e: MouseEvent<HTMLAnchorElement>) => {
    if (offset !== 0) {
      e.preventDefault()
    }

    if (offset === 1) {
      handleClickSwipeRight()
    }

    if (offset === -1) {
      handleClickSwipeLeft()
    }
  }

  const handleTitleAnimationEnd = () => setStyleCurtains(s.curtainsMove)

  useEffect(() => {
    let touchstartX = 0
    let touchendX = 0
    const swiper = swiperRef.current

    const checkDirection = () => {
      if (touchstartX - touchendX > 15) {
        handleClickSwipeRight()
      }

      if (touchendX - touchstartX > 15) {
        handleClickSwipeLeft()
      }
    }

    const touchstart = (e: TouchEvent) => (touchstartX = e.changedTouches[0].screenX)

    swiper.addEventListener('touchstart', touchstart)

    const touchend = (e: TouchEvent) => {
      touchendX = e.changedTouches[0].screenX
      checkDirection()
    }

    swiper.addEventListener('touchend', touchend)

    return () => {
      swiper.removeEventListener('touchstart', touchstart)
      swiper.removeEventListener('touchend', touchend)
    }
  }, [itemCenter])

  return (
    <section className={s.projects}>
      <div className={s.projects__container}>
        <div className={s.projects__content}>
          <h2 className={s.projects__title} onAnimationEnd={handleTitleAnimationEnd}>
            projects
          </h2>
          <div ref={swiperRef} className={`${s.swiper_container} ${styleCurtains}`}>
            <button className={s.left_button} onClick={handleClickSwipeLeft} />
            <div className={s.swiper_items_container}>
              {[...items, ...items, ...items].map((element, index) => {
                const offset = amountItems + (itemCenter - index)
                const active = offset === 0 ? true : null

                return (
                  <div
                    key={index}
                    className={s.swipeItem}
                    data-active={active}
                    style={
                      {
                        // This idea slider from https://codepen.io/team/keyframers/pen/rNxmVZN?editors=0110
                        '--offset': offset,
                        '--dir': offset === 0 ? 0 : `${offset > 0 ? 1 : -1}`,
                      } as CSSProperties
                    }
                  >
                    <div className={s.project__item}>
                      {styleCurtains && (
                        <>
                          <a
                            className={s.project__img_loader}
                            href={element.urlDemo}
                            target={element.urlDemo}
                            onClick={e => handleClickImage(offset, e)}
                          >
                            <img className={s.project__img} src={element.img} alt="" />
                          </a>
                          {active && (
                            <>
                              <p className={s.project__text}>{element.name}</p>
                              <a
                                className={s.project__demo}
                                href={element.urlDemo}
                                target={element.urlDemo}
                              >
                                {element.urlDemoName}
                              </a>
                              <a
                                className={s.project__github}
                                href={element.urlGithub}
                                target={element.urlGithub}
                              >
                                source
                              </a>
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
            <button className={s.right_button} onClick={handleClickSwipeRight} />
          </div>
        </div>
      </div>
    </section>
  )
}
