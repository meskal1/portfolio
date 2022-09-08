import React, { useState } from 'react'
import s from './Button.module.scss'

export type ButtonType = {
  name: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  onEndAnimation?: () => void
  type?: 'button' | 'submit' | 'reset'
  styleButton?: object
  styleButtonClass?: string
}

export const Button: React.FC<ButtonType> = React.memo(({ name, onClick, onEndAnimation, type, styleButton, styleButtonClass }) => {
  console.log('render button')

  const [isAnimationLoaded, setIsAnimationLoaded] = useState(s.animationIsLoading)
  const onAnimationEnd = () => {
    setIsAnimationLoaded(s.animationIsLoaded)
    if (onEndAnimation) onEndAnimation()
  }
  const onClickButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => onClick(e)

  return (
    <>
      <button
        type={type}
        onClick={onClickButtonHandler}
        className={`${styleButtonClass} ${isAnimationLoaded} ${s.defaultButton}`}
        style={styleButton}
        onAnimationEnd={onAnimationEnd}>
        {name}
      </button>
    </>
  )
})
