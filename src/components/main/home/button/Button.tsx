import React, { useState } from 'react'
import s from './Button.module.scss'

type ButtonType = {
  name: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<ButtonType> = ({ name, onClick }) => {
  console.log('render button')
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(s.animationIsLoading)

  const onAnimationEnd = () => setIsAnimationLoaded(s.animationIsLoaded)

  const onClickButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => onClick(e)

  return (
    <>
      <button className={`${s.button} ${isAnimationLoaded}`} onClick={onClickButtonHandler} onAnimationEnd={onAnimationEnd}>
        {name}
      </button>
    </>
  )
}
