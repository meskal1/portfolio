import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import s from './NavAnimatedLink.module.scss'

type NavAnimatedLinkType = {
  id: string
  link: string
  name: string
  location: string
}

export const NavAnimatedLink: React.FC<NavAnimatedLinkType> = ({ id, link, name, location }) => {
  console.log('render nav link')
  // Увеличивающийся круг при клике
  const [pageTransition, setPageTransition] = useState<string>('')
  // Черный цвет на 0.2 сек при клике
  const [menuColorTransition, setMenuColorTransition] = useState<string>('')
  // Зануляю анимацию перехода
  setTimeout(() => {
    if (pageTransition !== '' && location !== link) {
      setPageTransition('')
      setMenuColorTransition('')
    }
  }, 600)

  const onClickLinkHandler = () => {
    if (location !== link) {
      setPageTransition(s.pageTransition)
      setMenuColorTransition(s.animationBlackColor)
    }
  }

  // Убираю после загрузки анимации стили animation: forwards, потому что идет перекрытие ссылок волной (кругом)
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(s.animationIsLoading)
  const onAnimationEnd = () => {
    setIsAnimationLoaded(s.animationIsLoaded)
  }

  // Задержка перехода по ссылке, что бы достигнуть эффекта стирания контента анимационной волной
  const navigate = useNavigate()
  const changeLocationDelay = () => {
    setTimeout(() => {
      navigate(link)
    }, 200)
  }

  return (
    <>
      <li
        className={`${s.nav_item} ${isAnimationLoaded} ${pageTransition}`}
        onAnimationEnd={onAnimationEnd}
        style={{ animationDelay: `${+id * 0.1}s` }}
        onClick={onClickLinkHandler}>
        <a
          className={`${s.nav_item__link} ${menuColorTransition} ${location === link ? s.active_link : null}`}
          onClick={changeLocationDelay}
          // to={link}
        >
          {name}
        </a>
      </li>
    </>
  )
}
