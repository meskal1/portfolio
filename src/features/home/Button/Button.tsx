import { FC, useState, MouseEvent } from 'react'

import s from './Button.module.scss'

type ButtonType = {
  name: string
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export const Button: FC<ButtonType> = ({ name, onClick }) => {
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(s.animationIsLoading)

  const handleAnimationEnd = () => setIsAnimationLoaded(s.animationIsLoaded)

  const handleClickButton = (e: MouseEvent<HTMLButtonElement>) => onClick(e)

  return (
    <button
      className={`${s.button} ${isAnimationLoaded}`}
      onClick={handleClickButton}
      onAnimationEnd={handleAnimationEnd}
    >
      {name}
    </button>
  )
}
