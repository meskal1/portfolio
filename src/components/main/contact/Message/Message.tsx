import React, { ChangeEvent, KeyboardEvent, MutableRefObject, useRef, useState } from 'react'
import s from '../Contact.module.scss'

type MessageType = {
  setFocus: boolean
  onKeyDownInput: (e: KeyboardEvent<HTMLTextAreaElement>) => void
  errorStyle: boolean
  setErrorStyle: () => void
}

export const Message: React.FC<MessageType> = React.memo(({ setFocus, onKeyDownInput, errorStyle, setErrorStyle }) => {
  console.log('render Message')
  const [message, setMessage] = useState(sessionStorage.getItem('message') || '')
  const cyrillicStyleMessage = message.match(/[а-яёА-ЯЁ]/) ? s.fontSizeCyrillic : ''
  const ref = useRef() as MutableRefObject<HTMLTextAreaElement>
  const borderStyle = errorStyle ? s.errorBorder : ''

  if (setFocus) {
    ref.current?.focus()
  }

  const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const validMessage = e.currentTarget.value.slice(0, 3000).trimStart()
    setMessage(validMessage)
    sessionStorage.setItem('message', validMessage.trimEnd())
  }

  return (
    <>
      <textarea
        ref={ref}
        id='messageContact'
        value={message}
        name='message'
        className={`${s.contacts__textarea} ${cyrillicStyleMessage} ${borderStyle}`}
        onChange={onChangeMessage}
        onKeyDown={onKeyDownInput}
        required
      />
    </>
  )
})
