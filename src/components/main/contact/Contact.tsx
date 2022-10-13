import React, { ChangeEvent, MouseEvent, useEffect, useState, KeyboardEvent } from 'react'
import usePortal from 'react-useportal'
import s from './Contact.module.scss'

const cyrillicChar = /[а-яёА-ЯЁ]/
const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[ a-zA-Z0-9-]+(?:\.[ a-zA-Z0-9-]+) *$/

const Contact = () => {
  console.log('rendered contact')
  const { openPortal, closePortal, isOpen, Portal } = usePortal({ bindTo: document.getElementById('wrapper')! })
  const [isChecked, setIsChecked] = useState<boolean>(localStorage.getItem('isOffAutocomplite') === 'on')
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(s.animationIsLoading)
  const [errorStyleButton, setErrorStyleButton] = useState<string>('')
  const [errorStyleName, setErrorStyleName] = useState<string>('')
  const [errorStyleEmail, setErrorStyleEmail] = useState<string>('')
  const [errorStyleText, setErrorStyleText] = useState<string>('')
  const [cyrillicStyleName, setCyrillicStyleName] = useState<string>('')
  const [cyrillicStyleText, setCyrillicStyleText] = useState<string>('')
  const [nameState, setNameState] = useState<string>(sessionStorage.getItem('nameState') || '')
  const [emailState, setEmailState] = useState<string>(sessionStorage.getItem('emailState') || '')
  const [textState, setTextState] = useState<string>(sessionStorage.getItem('textState') || '')
  const autocomplite = isChecked ? 'on' : 'off'

  const onChangeAutocomplite = () => {
    setIsChecked(!isChecked)
    localStorage.setItem('isOffAutocomplite', `${!isChecked ? 'on' : 'off'}`)
  }
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const validate = e.currentTarget.value
      .replace(/[^a-zA-Zа-яёА-ЯЁ -]/, '')
      .slice(0, 50)
      .trimStart()
    setNameState(validate)
    sessionStorage.setItem('nameState', validate.trimEnd())
  }
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const validate = e.currentTarget.value
      .replace(/[а-яёА-ЯЁ]/, '')
      .slice(0, 200)
      .trimStart()
    setEmailState(validate)
    sessionStorage.setItem('emailState', validate.trimEnd())
  }
  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const validate = e.currentTarget.value.slice(0, 3000).trimStart()
    setTextState(validate)
    sessionStorage.setItem('textState', validate.trimEnd())
  }
  const onClickButton = (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (!nameState || !emailState || !textState || !emailState.match(validEmail)) {
      setErrorStyleButton(s.errorButton)
    } else {
      const data = {
        name: nameState,
        email: emailState,
        message: textState,
      }
      fetch('http://localhost:5000/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(response => response.json())
        .then(jsondata => console.log(jsondata))
        .catch(error => {
          console.log('error: ', error)
        })
      document.querySelector('body')?.style.setProperty('overflow', 'hidden')
      openPortal(e)
      setTimeout(() => {
        closePortal()
        document.querySelector('body')?.removeAttribute('style')
        setNameState('')
        setEmailState('')
        setTextState('')
        sessionStorage.clear()
      }, 2000)
    }
    if (!nameState) setErrorStyleName(s.errorBorder)
    if (!emailState || !emailState.match(validEmail)) setErrorStyleEmail(s.errorBorder)
    if (!textState) setErrorStyleText(s.errorBorder)
  }
  const onKeyDownInput = (e: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.id === 'name') {
      e.preventDefault()
      const emailField = document.getElementById('email')
      if (emailField && nameState) emailField.focus()
    }
    if (e.key === 'Enter' && e.currentTarget.id === 'email') {
      e.preventDefault()
      const messageField = document.getElementById('messageContact')
      if (messageField && emailState) messageField.focus()
    }
    if (!e.shiftKey && e.key === 'Enter' && e.currentTarget.id === 'messageContact') {
      e.preventDefault()
      if (nameState && emailState && textState) {
        onClickButton(e)
        e.currentTarget.blur()
      }
    }
  }
  const onAnimationEndButton = () => {
    setIsAnimationLoaded(s.animationIsLoaded)
    setErrorStyleButton('')
  }
  const onBlurEmail = () => {
    if (!emailState.match(validEmail) && emailState) setErrorStyleEmail(s.errorBorder)
  }
  useEffect(() => {
    if (nameState.match(cyrillicChar) && cyrillicStyleName === '') setCyrillicStyleName(s.fontSizeCyrillic)
    if (!nameState.match(cyrillicChar) && cyrillicStyleName !== '') setCyrillicStyleName('')
    if (textState.match(cyrillicChar) && cyrillicStyleText === '') setCyrillicStyleText(s.fontSizeCyrillic)
    if (!textState.match(cyrillicChar) && cyrillicStyleText !== '') setCyrillicStyleText('')
    if (nameState && errorStyleName !== '') setErrorStyleName('')
    if (emailState && errorStyleEmail !== '' && emailState.match(validEmail)) setErrorStyleEmail('')
    if (textState && errorStyleText !== '') setErrorStyleText('')
  }, [nameState, emailState, textState, cyrillicStyleName, cyrillicStyleText])

  return (
    <>
      <section className={s.contacts}>
        <div className={s.contacts__container}>
          <div className={s.contacts__content}>
            <div className={s.contacts__text_container}>
              <h2 className={s.contacts__title}>Contact</h2>
              <p className={s.contacts__text}>Contact me if you have a job or just say hi :)</p>
            </div>
            <div className={s.contacts__form_container}>
              <label className={s.switcher_container} htmlFor='checkbox'>
                autocomplete
                <input type='checkbox' id='checkbox' onChange={onChangeAutocomplite} checked={isChecked} />
                <span className={s.switcher}></span>
              </label>
              <form className={s.contacts__form} id='contacts'>
                <div className={s.contacts__block_input}>
                  <label className={s.bg_ForAutocompliteText}></label>
                  <input
                    id='name'
                    type='text'
                    value={nameState}
                    name='name'
                    className={`${s.contacts__input_name} ${cyrillicStyleName} ${errorStyleName}`}
                    onChange={onChangeName}
                    onKeyDown={onKeyDownInput}
                    autoComplete={autocomplite}
                    required
                  />
                  <label className={s.contacts__label_name}>NAME</label>
                  <label className={s.placeholder} htmlFor='name'>
                    NAME
                  </label>
                </div>
                <div className={s.contacts__block_input}>
                  <label className={s.bg_ForAutocompliteText}></label>
                  <input
                    id='email'
                    type='text'
                    value={emailState}
                    name='email'
                    className={`${s.contacts__input_email} ${errorStyleEmail}`}
                    onChange={onChangeEmail}
                    onKeyDown={onKeyDownInput}
                    onBlur={onBlurEmail}
                    autoComplete={autocomplite}
                    required
                  />
                  <label className={s.contacts__label_email}>EMAIL</label>
                  <label className={s.placeholder} htmlFor='email'>
                    EMAIL
                  </label>
                </div>
                <div className={s.contacts__block_input}>
                  <textarea
                    id='messageContact'
                    value={textState}
                    name='message'
                    className={`${s.contacts__textarea} ${cyrillicStyleText} ${errorStyleText}`}
                    onChange={onChangeText}
                    onKeyDown={onKeyDownInput}
                    required
                  />
                  <label className={s.contacts__label_message}>MESSAGE</label>
                  <label className={s.placeholder} htmlFor='message'>
                    MESSAGE
                  </label>
                </div>
              </form>
            </div>
            {isOpen && (
              <Portal>
                <div className={s.modalContainer}>
                  <span className={s.modalText}>Successfully sent</span>
                </div>
              </Portal>
            )}
            <button
              type='button'
              form='contacts'
              className={`${s.contacts__form_button} ${errorStyleButton} ${isAnimationLoaded}`}
              onClick={onClickButton}
              onAnimationEnd={onAnimationEndButton}>
              SEND ME MESSAGE
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
export default Contact
