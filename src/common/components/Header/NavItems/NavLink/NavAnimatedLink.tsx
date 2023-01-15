import { FC, useState } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import s from './NavAnimatedLink.module.scss'

type NavAnimatedLinkType = {
  id: number
  link: string
  name: string
}

export const NavAnimatedLink: FC<NavAnimatedLinkType> = ({ id, link, name }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const pathname = location.pathname
  const buttonStyle = pathname === link || pathname === link + '/about_modal' ? s.active_link : null

  // Enlarging circle on click
  const [pageTransition, setPageTransition] = useState<string>('')

  // Black color for 0.2 sec on click
  const [linkColorTransition, setLinkColorTransition] = useState<string>('')

  // After loading the animation, I remove the styles animation: forwards, because wave (circle) is overlap links
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(s.animationIsLoading)

  // Zeroing the transition animation
  if (pageTransition !== '' && location.pathname !== link) {
    setTimeout(() => {
      setPageTransition('')
      setLinkColorTransition('')
    }, 600)
  }

  const handleAnimationEnd = () => setIsAnimationLoaded(s.animationIsLoaded)

  // Delaying the transition on the link to achieve the effect of erasing content with an animation wave
  const handleClickLink = () => {
    if (pathname !== link) {
      setTimeout(() => navigate(link), 200)
      setPageTransition(s.pageTransition)
      setLinkColorTransition(s.animationBlackColor)
    }
  }

  return (
    <li
      className={`${s.nav_item} ${isAnimationLoaded} ${pageTransition}`}
      onAnimationEnd={handleAnimationEnd}
      style={{ animationDelay: `${id * 0.1}s` }}
    >
      <button
        className={`${s.nav_item__link} ${linkColorTransition} ${buttonStyle}`}
        onClick={handleClickLink}
      >
        {name}
      </button>
    </li>
  )
}
