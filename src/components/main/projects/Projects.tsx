import React, { useEffect, useState, MouseEvent } from 'react'
import s from './Projects.module.scss'

const items = [
  {
    id: 1,
    img: 'https://github.com/meskal1/portfolio/raw/main/PreviewPortfolio.jpg',
    name: 'Portfolio',
    urlDemoName: 'Live Demo',
    urlDemo: 'https://meskal1.github.io/portfolio/',
    urlGithub: 'https://github.com/meskal1/portfolio',
  },
  {
    id: 2,
    img: 'https://github.com/meskal1/portfolio/raw/main/LottiePreview.jpg',
    name: 'Lottie animation',
    urlDemoName: 'Live Demo',
    urlDemo: 'https://lottiefiles.com/122697-get-skills-from-the-box',
    urlGithub: 'https://lottiefiles.com/122697-get-skills-from-the-box',
  },
  {
    id: 3,
    img: 'https://github.com/meskal1/social_network/raw/main/Preview.jpg',
    name: 'Social network',
    urlDemoName: 'In progress',
    urlDemo: 'https://github.com/meskal1/social_network',
    urlGithub: 'https://github.com/meskal1/social_network',
  },
  {
    id: 4,
    img: 'https://github.com/meskal1/my_todo_list/raw/main/Preview.jpg',
    name: 'Todolist',
    urlDemoName: 'Live Demo in progress',
    urlDemo: 'https://meskal1.github.io/my_todo_list/',
    urlGithub: 'https://github.com/meskal1/my_todo_list',
  },
  {
    id: 5,
    img: 'https://github.com/meskal1/Counter/raw/main/Preview.jpg',
    name: 'Counter',
    urlDemoName: 'Live Demo',
    urlDemo: 'https://meskal1.github.io/Counter',
    urlGithub: 'https://github.com/meskal1/Counter',
  },
  {
    id: 6,
    img: 'https://github.com/meskal1/drum_kit/raw/main/PreviewDrumKit.jpg',
    name: 'Drum Kit',
    urlDemoName: 'Live Demo',
    urlDemo: 'https://meskal1.github.io/drum_kit/',
    urlGithub: 'https://github.com/meskal1/drum_kit',
  },
  {
    id: 7,
    img: 'https://github.com/meskal1/guess_my_number/raw/main/Preview.jpg',
    name: 'Guess the number',
    urlDemoName: 'Live Demo',
    urlDemo: 'https://meskal1.github.io/guess_my_number/',
    urlGithub: 'https://github.com/meskal1/guess_my_number',
  },
  {
    id: 8,
    img: 'https://github.com/meskal1/pig_game/raw/main/Preview.jpg',
    name: 'Pig game',
    urlDemoName: 'Live Demo',
    urlDemo: 'https://meskal1.github.io/pig_game/',
    urlGithub: 'https://github.com/meskal1/pig_game',
  },
  {
    id: 9,
    img: 'https://github.com/meskal1/CSS_car_animation/raw/main/PreviewCar.jpg',
    name: 'Car animation',
    urlDemoName: 'Live Demo',
    urlDemo: 'https://meskal1.github.io/CSS_car_animation/',
    urlGithub: 'https://github.com/meskal1/CSS_car_animation',
  },
  {
    id: 10,
    img: 'https://github.com/meskal1/landing_practice/raw/main/PreviewLanding.jpg',
    name: 'Landing practice',
    urlDemoName: 'Live Demo',
    urlDemo: 'https://meskal1.github.io/landing_practice/',
    urlGithub: 'https://github.com/meskal1/landing_practice',
  },
]

const Projects = () => {
  const [itemCenter, setItemCenter] = useState<number>(0)
  const [styleCurtains, setStyleCurtains] = useState<string>('')
  const amountItems = items.length
  const swiperItems = [...items, ...items, ...items].map((element, index) => {
    const offset = amountItems + (itemCenter - index)
    const active = offset === 0 ? true : null
    return (
      <div
        key={index}
        className={s.swipeItem}
        data-active={active}
        style={{
          //@ts-ignore
          // This idea slider from https://codepen.io/team/keyframers/pen/rNxmVZN?editors=0110
          '--offset': offset,
          '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
        }}>
        <div className={s.project__item}>
          {styleCurtains && (
            <>
              <a className={s.project__img_loader} href={element.urlDemo} target={element.urlDemo} onClick={e => onClickImage(offset, e)}>
                <img className={s.project__img} src={element.img} alt='' />
              </a>
              {active && (
                <>
                  <p className={s.project__text}>{element.name}</p>
                  <a className={s.project__demo} href={element.urlDemo} target={element.urlDemo}>
                    {element.urlDemoName}
                  </a>
                  <a className={s.project__github} href={element.urlGithub} target={element.urlGithub}>
                    Source
                  </a>
                </>
              )}
            </>
          )}
        </div>
      </div>
    )
  })

  const onClickSwipeRight = () => {
    setItemCenter(itemCenter === 0 ? amountItems - 1 : itemCenter - 1)
  }

  const onClickSwipeLeft = () => setItemCenter((itemCenter + 1) % amountItems)

  const onClickImage = (offset: number, e: MouseEvent<HTMLAnchorElement>) => {
    if (offset !== 0) {
      e.preventDefault()
    }

    if (offset === 1) {
      onClickSwipeRight()
    }

    if (offset === -1) {
      onClickSwipeLeft()
    }
  }

  const onTitleAnimationEnd = () => setStyleCurtains(s.curtainsMove)

  useEffect(() => {
    const swiperContainer = document.getElementById('swiper')
    let touchstartX = 0
    let touchendX = 0

    const checkDirection = () => {
      if (touchstartX - touchendX > 15) {
        onClickSwipeRight()
      }

      if (touchendX - touchstartX > 15) {
        onClickSwipeLeft()
      }
    }

    const touchstart = (e: TouchEvent) => (touchstartX = e.changedTouches[0].screenX)
    swiperContainer?.addEventListener('touchstart', touchstart)

    const touchend = (e: TouchEvent) => {
      touchendX = e.changedTouches[0].screenX
      checkDirection()
    }
    swiperContainer?.addEventListener('touchend', touchend)

    return () => {
      swiperContainer?.removeEventListener('touchstart', touchstart)
      swiperContainer?.removeEventListener('touchend', touchend)
    }
  }, [itemCenter])

  return (
    <>
      <section className={s.projects}>
        <div className={s.projects__container}>
          <div className={s.projects__content}>
            <h2 className={s.projects__title} onAnimationEnd={onTitleAnimationEnd}>
              Projects
            </h2>
            <div className={`${s.swiper_container} ${styleCurtains}`} id='swiper'>
              <button className={s.left_button} onClick={onClickSwipeLeft} />
              <div className={s.swiper_items_container}>{swiperItems}</div>
              <button className={s.right_button} onClick={onClickSwipeRight} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Projects
