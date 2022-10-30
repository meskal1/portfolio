import React, { MouseEvent, useEffect, useState } from 'react'
import s from './AboutText.module.scss'

type AboutTextType = {
  textContent: string
  startIvivtationAnimate: () => void
}

export const AboutText: React.FC<AboutTextType> = React.memo(({ textContent, startIvivtationAnimate }) => {
  //   console.log('render About TEXT')
  const [canIStartTypingText, setCanIStartTypingText] = useState(false)
  const [counter, setCounter] = useState(0)
  const [typedText, setTypedText] = useState<Array<string>>([''])
  const [shownText, setShownText] = useState('')
  const aboutText = textContent.split(``)

  const onMouseOver = (e: MouseEvent<HTMLSpanElement>) => {
    if (e.currentTarget.textContent && shownText.length === aboutText.length) {
      e.currentTarget.setAttribute('class', s.active)
    }
  }

  const wrappSpanShownText = shownText.split(``).map((el, i) => (
    <span onMouseOver={onMouseOver} key={i}>
      {el}
    </span>
  ))

  const typewriter = () => {
    setTimeout(() => {
      if (shownText.length < aboutText.length) {
        setTypedText(typedText.concat(aboutText[+counter]))
        setShownText(typedText.join(``))
        setCounter(() => counter + 1)
      }
    }, 30)
  }

  useEffect(() => {
    if (!canIStartTypingText) {
      setTimeout(() => {
        setCanIStartTypingText(true)
      }, 2000)
    }

    typewriter()

    if (shownText.length === aboutText.length) {
      startIvivtationAnimate()
    }
  }, [shownText, aboutText.length, startIvivtationAnimate, canIStartTypingText])

  return (
    <>
      <p className={s.about__text}>
        {wrappSpanShownText}
        {shownText.length !== aboutText.length ? (
          <span className={`${s.typewriterStick}`}>.</span>
        ) : (
          <span className={`${s.typewriterEndBlink}`}>.</span>
        )}
      </p>
    </>
  )
})
