import { FC, MouseEvent, useEffect, useState, memo } from 'react'

import s from './AboutText.module.scss'

type AboutTextType = {
  textContent: string
  startIvivtationAnimate: () => void
}

export const AboutText: FC<AboutTextType> = memo(({ textContent, startIvivtationAnimate }) => {
  const [canIStartTypingText, setCanIStartTypingText] = useState(false)
  const [counter, setCounter] = useState(0)
  const [typedText, setTypedText] = useState<Array<string>>([''])
  const [shownText, setShownText] = useState('')
  const aboutText = textContent.split(``)

  const handleMouseOver = (e: MouseEvent<HTMLSpanElement>) => {
    if (e.currentTarget.textContent && shownText.length === aboutText.length) {
      e.currentTarget.setAttribute('class', s.active)
    }
  }

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
      setTimeout(() => setCanIStartTypingText(true), 2000)
    }

    typewriter()

    if (shownText.length === aboutText.length) {
      startIvivtationAnimate()
    }
  }, [shownText, aboutText.length, startIvivtationAnimate, canIStartTypingText])

  return (
    <p className={s.about__text}>
      {shownText.split(``).map((el, i) => (
        <span onMouseOver={handleMouseOver} key={i}>
          {el}
        </span>
      ))}
      <span
        className={shownText.length !== aboutText.length ? s.typewriterStick : s.typewriterEndBlink}
      >
        .
      </span>
    </p>
  )
})
