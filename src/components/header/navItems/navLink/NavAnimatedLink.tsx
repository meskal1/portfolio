import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import s from './NavAnimatedLink.module.scss'

type NavAnimatedLinkType = {
  id: number
  link: string
  name: string
}

export const NavAnimatedLink: React.FC<NavAnimatedLinkType> = ({ id, link, name }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const buttonStyle = location.pathname === link || location.pathname === link + '/about_modal' ? s.active_link : null
  // Увеличивающийся круг при клике
  const [pageTransition, setPageTransition] = useState<string>('')
  // Черный цвет на 0.2 сек при клике
  const [linkColorTransition, setLinkColorTransition] = useState<string>('')
  // Зануляю анимацию перехода
  if (pageTransition !== '' && location.pathname !== link) {
    setTimeout(() => {
      setPageTransition('')
      setLinkColorTransition('')
    }, 600)
  }

  // Убираю после загрузки анимации стили animation: forwards, потому что идет перекрытие ссылок волной (кругом)
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(s.animationIsLoading)
  const onAnimationEnd = () => setIsAnimationLoaded(s.animationIsLoaded)

  // Задержка перехода по ссылке, что бы достигнуть эффекта стирания контента анимационной волной
  const onClickLinkHandler = () => {
    if (location.pathname !== link) {
      setTimeout(() => {
        navigate(link)
      }, 200)
      setPageTransition(s.pageTransition)
      setLinkColorTransition(s.animationBlackColor)
    }
  }

  return (
    <>
      <li
        className={`${s.nav_item} ${isAnimationLoaded} ${pageTransition}`}
        onAnimationEnd={onAnimationEnd}
        style={{ animationDelay: `${id * 0.1}s` }}>
        <button className={`${s.nav_item__link} ${linkColorTransition} ${buttonStyle}`} onClick={onClickLinkHandler}>
          {name}
        </button>
      </li>
    </>
  )
}
