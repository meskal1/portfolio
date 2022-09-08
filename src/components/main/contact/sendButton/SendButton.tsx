import React, { useState } from 'react'
import { Button } from '../../../button/Button'
import s from './SendButton.module.scss'

export type SendButtonType = {
  name: string
  onClick: () => void
}

export const SendButton: React.FC<SendButtonType> = React.memo(({ name, onClick }) => {
  //   const onClickButtonHandler = () => onClick()

  const [isAnimationLoaded, setIsAnimationLoaded] = useState(s.animationIsLoading)

  const [buttonErrorStyle, setButtonErrorStyle] = useState<string>('')

  //   const onClickButtonHandler = (e: MouseEvent<HTMLButtonElement>) => {
  //     if (!nameField || !emailField || !textField || !emailField.match(validRegex)) setButtonErrorStyle(s.errorButton)
  //     else {
  //       // Если поля заполнены без ошибок - выпадает модальное окно на 2 секунды и зачищаются поля
  //       openPortal(e)
  //       document.querySelector('body')?.style.setProperty('overflow', 'hidden')
  //       // document.querySelector('#content')?.setAttribute('style', 'opacity: .5;')
  //       setTimeout(() => {
  //         closePortal()
  //         document.querySelector('body')?.removeAttribute('style')
  //         // document.querySelector('#content')?.removeAttribute('style')
  //         setNameField('')
  //         sessionStorage.setItem('nameField', '')
  //         setEmailField('')
  //         sessionStorage.setItem('emailField', '')
  //         setTextField('')
  //         sessionStorage.setItem('textField', '')
  //       }, 2000)
  //     }
  //     if (!nameField) setNameFieldErrorStyle(s.errorBorder)
  //     if (!emailField || !emailField.match(validRegex)) setEmailFieldErrorStyle(s.errorBorder)
  //     if (!textField) setTextFieldErrorStyle(s.errorBorder)
  //   }

  const onAnimationEnd = () => {
    setIsAnimationLoaded(s.animationIsLoaded)
    setButtonErrorStyle('')
  }

  return (
    <>
      <Button
        type={'submit'}
        name={'SEND ME MESSAGE'}
        //   onClick={e => onClickButtonHandler(e)}
        styleButtonClass={`${s.contacts__form_button} ${buttonErrorStyle}`}
        onEndAnimation={onAnimationEnd}
      />
    </>
  )
})
