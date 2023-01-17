import {
  useReducer,
  useState,
  useRef,
  MutableRefObject,
  ChangeEvent,
  FormEvent,
  useEffect,
  KeyboardEvent,
} from 'react'

import s from './Contact.module.scss'
import { errorReducer, errorStyleState, emailAC, nameAC, messageAC } from './errorReducer'
import {
  formReducer,
  formInitState,
  onChangeNameAC,
  onChangeEmailAC,
  onChangeMessageAC,
} from './formReducer'
import { ContactModal } from './Modal/ContactModal'

const cyrillicRegex = /[а-яёА-ЯЁ]/
const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[ a-zA-Z0-9-]+(?:\.[ a-zA-Z0-9-]+) *$/

export const Contact = () => {
  const [errorState, errorDispatch] = useReducer(errorReducer, errorStyleState)
  const [formState, formDispatch] = useReducer(formReducer, formInitState)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isChecked, setIsChecked] = useState(localStorage.getItem('isOffAutocomplite') === 'on')
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(s.animationIsLoading)
  const [errorStyleButton, setErrorStyleButton] = useState('')
  const [sendStatus, setSendStatus] = useState('Successfully sent')
  const refEmail = useRef() as MutableRefObject<HTMLInputElement>
  const refMessage = useRef() as MutableRefObject<HTMLTextAreaElement>
  const cyrillicStyleName = formState.name.match(cyrillicRegex) ? s.fontSizeCyrillic : ''
  const cyrillicStyleMessage = formState.message.match(cyrillicRegex) ? s.fontSizeCyrillic : ''
  const errorStyleName = errorState.name ? s.errorBorder : ''
  const errorStyleEmail = errorState.email ? s.errorBorder : ''
  const errorStyleMessage = errorState.message ? s.errorBorder : ''
  const autocomplite = isChecked ? 'on' : 'off'
  const postData = {
    name: formState.name.trimEnd(),
    email: formState.email.trimEnd(),
    message: formState.message.trimEnd(),
  }

  const fetchContactData = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_CONTACT_URL as RequestInfo | URL, {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

      response.text().then(text => console.log(text))
      if (sendStatus !== 'Successfully sent') {
        setSendStatus('Successfully sent')
      }

      document.body.style.overflow = 'hidden'
      setIsOpenModal(true)

      setTimeout(() => {
        setIsOpenModal(false)
        document.body.style.overflow = 'unset'
        formDispatch(onChangeNameAC(''))
        formDispatch(onChangeEmailAC(''))
        formDispatch(onChangeMessageAC(''))
      }, 2000)
    } catch {
      if (sendStatus !== 'Github error demo') {
        setSendStatus('Github error demo')
      }

      document.body.style.overflow = 'hidden'
      setIsOpenModal(true)

      setTimeout(() => {
        setIsOpenModal(false)
        document.body.style.overflow = 'unset'
      }, 2000)
      console.log('Some error occured')
    }
  }

  const handleChangeAutocomplite = () => {
    setIsChecked(!isChecked)
    localStorage.setItem('isOffAutocomplite', `${!isChecked ? 'on' : 'off'}`)
  }

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    formDispatch(onChangeNameAC(e.currentTarget.value))
  }

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    formDispatch(onChangeEmailAC(e.currentTarget.value))
  }

  const handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    formDispatch(onChangeMessageAC(e.currentTarget.value))
  }

  const handleBlurEmail = () => {
    if (formState.email && !formState.email.match(emailRegexp)) {
      errorDispatch(emailAC(true))
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (
      !formState.name ||
      !formState.email ||
      !formState.message ||
      !formState.email.match(emailRegexp)
    ) {
      setErrorStyleButton(s.errorButton)
    } else {
      fetchContactData()
    }
  }

  const handleKeyDownInput = (e: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const target = e.currentTarget
    const NEXT_FIELD_KEY = 'Enter'

    if (e.key === NEXT_FIELD_KEY && target.id === 'name' && target.value) {
      e.preventDefault()
      refEmail.current?.focus()
    }

    if (
      e.key === NEXT_FIELD_KEY &&
      target.id === 'email' &&
      target.value &&
      target.value.match(emailRegexp)
    ) {
      e.preventDefault()
      refMessage.current?.focus()
    }

    if (e.key === NEXT_FIELD_KEY && target.id === 'messageContact' && !e.shiftKey) {
      e.preventDefault()

      if (
        formState.name &&
        formState.email &&
        formState.message &&
        formState.email.match(emailRegexp)
      ) {
        target.blur()
        fetchContactData()
      }
    }
  }

  const handleClickButton = () => {
    if (!formState.name && !errorState.name) {
      errorDispatch(nameAC(true))
    }

    if ((!formState.email || !formState.email.match(emailRegexp)) && !errorState.email) {
      errorDispatch(emailAC(true))
    }

    if (!formState.message && !errorState.message) {
      errorDispatch(messageAC(true))
    }
  }

  const handleButtonAnimationEnd = () => {
    setIsAnimationLoaded(s.animationIsLoaded)
    setErrorStyleButton('')
  }

  useEffect(() => {
    if (formState.name && errorState.name) {
      errorDispatch(nameAC(false))
    }

    if (formState.email && errorState.email && formState.email.match(emailRegexp)) {
      errorDispatch(emailAC(false))
    }

    if (formState.message && errorState.message) {
      errorDispatch(messageAC(false))
    }
  }, [formState])

  return (
    <section className={s.contacts}>
      <ContactModal isOpen={isOpenModal}>{sendStatus}</ContactModal>
      <div className={s.contacts__container}>
        <div className={s.contacts__content}>
          <div className={s.contacts__text_container}>
            <h2 className={s.contacts__title}>contact</h2>
            <p className={s.contacts__text}>Contact me if you have a job or just say hi :)</p>
          </div>
          <div className={s.contacts__form_container}>
            <label className={s.switcher_container} htmlFor="checkbox">
              autocomplete
              <input
                type="checkbox"
                id="checkbox"
                onChange={handleChangeAutocomplite}
                checked={isChecked}
              />
              <span className={s.switcher}></span>
            </label>
            <form className={s.contacts__form} id="contacts" onSubmit={handleSubmit} noValidate>
              <div className={s.contacts__block_input}>
                <label className={s.bg_ForAutocompliteText} />
                <input
                  id="name"
                  type="text"
                  value={formState.name}
                  name="name"
                  className={`${s.contacts__input_name} ${cyrillicStyleName} ${errorStyleName}`}
                  onChange={handleChangeName}
                  onKeyDown={handleKeyDownInput}
                  autoComplete={autocomplite}
                  required
                />
                <label className={s.contacts__label_name}>name</label>
                <label className={s.placeholder} htmlFor="name">
                  name
                </label>
              </div>
              <div className={s.contacts__block_input}>
                <label className={s.bg_ForAutocompliteText}></label>
                <input
                  ref={refEmail}
                  id="email"
                  type="text"
                  value={formState.email}
                  name="email"
                  className={`${s.contacts__input_email} ${errorStyleEmail}`}
                  onChange={handleChangeEmail}
                  onKeyDown={handleKeyDownInput}
                  onBlur={handleBlurEmail}
                  autoComplete={autocomplite}
                  required
                />
                <label className={s.contacts__label_email}>email</label>
                <label className={s.placeholder} htmlFor="email">
                  email
                </label>
              </div>
              <div className={s.contacts__block_input}>
                <textarea
                  ref={refMessage}
                  id="messageContact"
                  value={formState.message}
                  name="message"
                  className={`${s.contacts__textarea} ${cyrillicStyleMessage} ${errorStyleMessage}`}
                  onChange={handleChangeMessage}
                  onKeyDown={handleKeyDownInput}
                  required
                />
                <label className={s.contacts__label_message}>message</label>
                <label className={s.placeholder} htmlFor="message">
                  message
                </label>
              </div>
            </form>
          </div>
          <button
            type="submit"
            form="contacts"
            className={`${s.contacts__form_button} ${errorStyleButton} ${isAnimationLoaded}`}
            onClick={handleClickButton}
            onAnimationEnd={handleButtonAnimationEnd}
          >
            send me message
          </button>
        </div>
      </div>
    </section>
  )
}
