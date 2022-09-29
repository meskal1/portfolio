import React, { useState } from 'react'
// import './swiped-events.js'
import s from './Projects.module.scss'

const arr = [
  { id: 1, urlDemoName: '1', urlGithubName: '1', img: '1', urlDemo: '1', urlGithub: '1' },
  { id: 2, urlDemoName: '2', urlGithubName: '2', img: '2', urlDemo: '2', urlGithub: '2' },
  { id: 3, urlDemoName: '3', urlGithubName: '3', img: '3', urlDemo: '3', urlGithub: '3' },
  { id: 4, urlDemoName: '4', urlGithubName: '4', img: '4', urlDemo: '4', urlGithub: '4' },
  { id: 5, urlDemoName: '5', urlGithubName: '5', img: '5', urlDemo: '5', urlGithub: '5' },
  { id: 6, urlDemoName: '6', urlGithubName: '6', img: '6', urlDemo: '6', urlGithub: '6' },
]

const Projects = () => {
  const onTitleAnimationEnd = () => {}
  const proj = arr.map(el => {
    return (
      <div key={el.id} className={s.project__item}>
        <div className={s.project__pic}>
          <img className={s.project__img} src={el.img} alt='' />
        </div>
        <a className={s.project__demo} href={el.urlDemo} target={el.urlDemo}>
          {el.urlDemoName}
        </a>
        <a className={s.project__github} href={el.urlGithub} target={el.urlGithub}>
          {el.urlGithubName}
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
  const swiperBlock = document.querySelector('.swiper_container')
  if (swiperBlock) swiperBlock.addEventListener('swiped-left', onClickSwipeLeft)
  if (swiperBlock) swiperBlock.addEventListener('swiped-right', onClickSwipeRight)
  let touchstartX = 0
  let touchendX = 0
  function checkDirection() {
    if (touchendX < touchstartX) {
      alert('swiped left!')
      onClickSwipeLeft()
    }
    if (touchendX > touchstartX) {
      alert('swiped right!')
      onClickSwipeRight()
    }
  }
  document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
  })
  document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    checkDirection()
  })
  return (
    <>
      <section className={s.projects}>
        <div className={s.projects__container}>
          <div className={s.projects__content}>
            <h2 className={s.projects__title} onAnimationEnd={onTitleAnimationEnd}>
              Projects
            </h2>
            <div className={s.swiper_container}>
              <button onClick={onClickSwipeLeft}>влево</button>
              <div className={s.left}>{proj[itemLeft]}</div>
              <div className={s.center}>{proj[itemCenter]}</div>
              <div className={s.right}>{proj[itemRight]}</div>
              <button onClick={onClickSwipeRight}>вправо</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Projects
