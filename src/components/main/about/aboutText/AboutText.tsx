import React, { MouseEvent, useEffect, useState } from 'react'
import s from './AboutText.module.scss'

type AboutTextType = {
  textContent: string
  startIvivtationAnimate: () => void
}

export const AboutText: React.FC<AboutTextType> = React.memo(({ textContent, startIvivtationAnimate }) => {
  //   console.log('render About TEXT')
  const aboutText = textContent.split(``)
  const [canIStartTypingAboutText, setCanIStartTypingAboutText] = useState(false)
  const [counter, setCounter] = useState(0)
  const [typedAboutText, setTypedAboutText] = useState<Array<string>>([''])
  const [shownAboutText, setShownAboutText] = useState('')

  const onMouseOver = (e: MouseEvent<HTMLSpanElement>) => {
    if (e.currentTarget.textContent && shownAboutText.length === aboutText.length) {
      e.currentTarget.setAttribute('class', s.active)
    }
  }

  const wrappSpanShownAboutText = shownAboutText.split(``).map((el, i) => (
    <span onMouseOver={onMouseOver} key={i}>
      {el}
    </span>
  ))

  const typewriter = () => {
    setTimeout(() => {
      if (shownAboutText.length < aboutText.length) {
        setTypedAboutText(typedAboutText.concat(aboutText[+counter]))
        setShownAboutText(typedAboutText.join(``))
        setCounter(() => counter + 1)
      }
    }, 30)
  }

  canIStartTypingAboutText
    ? typewriter()
    : setTimeout(() => {
        setCanIStartTypingAboutText(true)
      }, 2000)

  useEffect(() => {
    if (shownAboutText.length === aboutText.length) {
      startIvivtationAnimate()
    }
  }, [shownAboutText, aboutText.length, startIvivtationAnimate])

  return (
    <>
      <p className={s.about__text}>
        {wrappSpanShownAboutText}
        {shownAboutText.length !== aboutText.length ? (
          <span className={`${s.typewriterStick}`}>.</span>
        ) : (
          <span className={`${s.typewriterEndBlink}`}>.</span>
        )}
      </p>
    </>
  )
})
