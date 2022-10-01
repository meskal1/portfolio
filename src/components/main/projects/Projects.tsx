import React, { useState } from 'react'
import s from './Projects.module.scss'
import portfolio from '../../../img/2.jpg'

const arr = [
  {
    id: 1,
    img: 'https://github.com/meskal1/CSS_car_animation/raw/main/PreviewCar.jpg',
    name: 'Car animation',
    urlDemoName: 'Live Demo',
    urlDemo: 'https://meskal1.github.io/CSS_car_animation/',
    urlGithub: 'https://github.com/meskal1/CSS_car_animation',
  },
  {
    id: 2,
    img: portfolio,
    name: 'Portfolio',
    urlDemoName: 'Live Demo',
    urlDemo: 'https://meskal1.github.io/portfolio/',
    urlGithub: 'https://github.com/meskal1/portfolio',
  },
  {
    id: 3,
    img: '3',
    name: 'Social network',
    urlDemoName: 'Live Demo in progress',
    urlDemo: 'https://meskal1.github.io/social_network',
    urlGithub: 'https://github.com/meskal1/social_network',
  },
  {
    id: 4,
    img: '4',
    name: 'Todolist',
    urlDemoName: 'Live Demo in progress',
    urlDemo: 'https://meskal1.github.io/my_todo_list/',
    urlGithub: 'https://github.com/meskal1/my_todo_list',
  },
  {
    id: 5,
    img: 'https://github.com/meskal1/Counter/raw/main/PreviewCounter.jpg',
    name: 'Counter',
    urlDemoName: 'Live Demo',
    urlDemo: 'https://meskal1.github.io/Counter',
    urlGithub: 'https://github.com/meskal1/Counter',
  },
  { id: 6, name: '6', urlDemoName: '6', urlGithubName: '6', img: '6', urlDemo: '6', urlGithub: '6' },
]

const Projects = () => {
  const onTitleAnimationEnd = () => {}
  const proj = arr.map(el => {
    return (
      <div key={el.id} className={s.project__item}>
        <a className={s.project__pic} href={el.urlDemo} target={el.urlDemo}>
          <img className={s.project__img} src={el.img} alt='' />
        </a>
        <p className={s.project__text}>{el.name}</p>
        <a className={s.project__demo} href={el.urlDemo} target={el.urlDemo}>
          {el.urlDemoName}
        </a>
        <a className={s.project__github} href={el.urlGithub} target={el.urlGithub}>
          Source
        </a>
      </div>
    )
  })
  const [itemCenter, setItemCenter] = useState<number>(0)
  const projLength = proj.length
  const itemLeft = itemCenter - 1 >= 0 ? itemCenter - 1 : projLength - 1
  const itemRight = itemCenter === projLength - 1 ? 0 : itemCenter + 1
  const onClickSwipeLeft = () => setItemCenter(itemCenter - 1 >= 0 ? itemCenter - 1 : projLength - 1)
  const onClickSwipeRight = () => setItemCenter(itemCenter + 1 > projLength - 1 ? 0 : itemCenter + 1)

  const swiperBlock = document.getElementById('swiper')
  let touchstartX = 0
  let touchendX = 0
  const checkDirection = () => (touchendX < touchstartX ? onClickSwipeRight() : onClickSwipeLeft())

  if (swiperBlock) swiperBlock.addEventListener('touchstart', e => (touchstartX = e.changedTouches[0].screenX), { once: true })
  if (swiperBlock)
    swiperBlock.addEventListener(
      'touchend',
      e => {
        touchendX = e.changedTouches[0].screenX
        checkDirection()
      },
      { once: true }
    )

  return (
    <>
      <section className={s.projects}>
        <div className={s.projects__container}>
          <div className={s.projects__content}>
            <h2 className={s.projects__title} onAnimationEnd={onTitleAnimationEnd}>
              Projects
            </h2>
            <div className={s.swiper_container} id='swiper'>
              <button className={s.left_button} onClick={onClickSwipeLeft} />
              <div className={s.swiper_items_container}>
                <div className={s.left_item}>{proj[itemLeft]}</div>
                <div className={s.center_item}>{proj[itemCenter]}</div>
                <div className={s.right_item}>{proj[itemRight]}</div>
              </div>
              <button className={s.right_button} onClick={onClickSwipeRight} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Projects
