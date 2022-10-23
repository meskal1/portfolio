import React, { ChangeEvent, KeyboardEvent, LegacyRef, MutableRefObject, useRef, useState } from 'react'
import s from '../Contact.module.scss'

type EmailType = {
  setFocus: boolean
  autocomplite: string
  onKeyDownInput: (e: KeyboardEvent<HTMLInputElement>) => void
  errorStyle: boolean
  setErrorStyle: (error: string) => void
  emailRegexp: RegExp
}

const Email: React.FC<EmailType> = ({ setFocus, autocomplite, onKeyDownInput, errorStyle, setErrorStyle, emailRegexp }) => {
  console.log('render Email')
  const [email, setEmail] = useState(sessionStorage.getItem('email') || '')
  const ref = useRef() as MutableRefObject<HTMLInputElement>
  const borderStyle = errorStyle ? s.errorBorder : ''

  if (setFocus) {
    ref.current?.focus()
  }

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const validEmail = e.currentTarget.value
      .replace(/[а-яёА-ЯЁ]/, '')
      .slice(0, 200)
      .trimStart()
    setEmail(validEmail)
    sessionStorage.setItem('email', validEmail.trimEnd())
  }

  const onBlurEmail = () => {
    if (email && !email.match(emailRegexp) && !errorStyle) {
      setErrorStyle('errorBorder')
    }
  }

  return (
    <>
      <input
        ref={ref}
        id='email'
        type='text'
        value={email}
        name='email'
        className={`${s.contacts__input_email} ${borderStyle}`}
        onChange={onChangeEmail}
        onKeyDown={onKeyDownInput}
        onBlur={onBlurEmail}
        autoComplete={autocomplite}
        required
      />
    </>
  )
}
export default React.memo(Email)
