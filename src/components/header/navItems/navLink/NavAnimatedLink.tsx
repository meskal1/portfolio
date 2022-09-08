import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import s from './NavAnimatedLink.module.scss'

type NavAnimatedLinkType = {
  id: string
  link: string
  name: string
}

export const NavAnimatedLink: React.FC<NavAnimatedLinkType> = ({ id, link, name }) => {
  console.log('render nav link')
  const location = useLocation()
  // Увеличивающийся круг при клике
  const [pageTransition, setPageTransition] = useState<string>('')
  // Черный цвет на 0.2 сек при клике
  const [menuColorTransition, setMenuColorTransition] = useState<string>('')
  // Зануляю анимацию перехода
  setTimeout(() => {
    if (pageTransition !== '' && location.pathname !== link) {
      setPageTransition('')
      setMenuColorTransition('')
    }
  }, 600)

  // Убираю после загрузки анимации стили animation: forwards, потому что идет перекрытие ссылок волной (кругом)
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(s.animationIsLoading)
  const onAnimationEnd = () => setIsAnimationLoaded(s.animationIsLoaded)

  // Задержка перехода по ссылке, что бы достигнуть эффекта стирания контента анимационной волной
  const navigate = useNavigate()
  const onClickLinkHandler = () => {
    setTimeout(() => {
      navigate(link)
    }, 200)
    if (location.pathname !== link) {
      setPageTransition(s.pageTransition)
      setMenuColorTransition(s.animationBlackColor)
    }
  }

  return (
    <>
      <li
        className={`${s.nav_item} ${isAnimationLoaded} ${pageTransition}`}
        onAnimationEnd={onAnimationEnd}
        style={{ animationDelay: `${+id * 0.1}s` }}>
        <button
          className={`${s.nav_item__link} ${menuColorTransition} ${location.pathname === link ? s.active_link : null}`}
          onClick={onClickLinkHandler}>
          {name}
        </button>
      </li>
    </>
  )
}
