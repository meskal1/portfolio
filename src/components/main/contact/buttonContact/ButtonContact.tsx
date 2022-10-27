import React, { useState } from 'react'
import s from '../Contact.module.scss'
import { FormInitStateType } from '../FormReducer'

export type ButtonContactType = {
  //   isAnimationLoaded: string
  onClickButton: () => void
  formState: FormInitStateType
  emailRegexp: RegExp
}

export const ButtonContact: React.FC<ButtonContactType> = React.memo(({ onClickButton, formState, emailRegexp }) => {
  console.log('button rendered')
  const [errorStyleButton, setErrorStyleButton] = useState('')
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(s.animationIsLoading)

  const onAnimationEnd = () => {
    setIsAnimationLoaded(s.animationIsLoaded)
    setErrorStyleButton('')
  }

  const onClick = () => {
    if (!formState.name || !formState.email || !formState.message || !formState.email.match(emailRegexp)) {
      setErrorStyleButton(s.errorButton)
    }
    onClickButton()
  }

  return (
    <>
      <button
        type='submit'
        form='contacts'
        className={`${s.contacts__form_button} ${errorStyleButton} ${isAnimationLoaded}`}
        onClick={onClick}
        onAnimationEnd={onAnimationEnd}>
        send me message
      </button>
    </>
  )
})
