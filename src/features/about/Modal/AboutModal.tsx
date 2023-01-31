import {
  ChangeEvent,
  useEffect,
  useState,
  MouseEvent,
  AnimationEvent,
  KeyboardEvent,
  MutableRefObject,
  useReducer,
  FormEvent,
  useRef,
  CSSProperties,
} from 'react'

import FocusLock from 'react-focus-lock'
import { useNavigate } from 'react-router'

import { Social } from '../../../constants/links.enum'
import { PATH } from '../../../constants/routePaths.enum'

import s from './AboutModal.module.scss'
import {
  errorStyleModalState,
  companyAC,
  contactAC,
  buttonAC,
  errorAboutReducer,
} from './errorAboutReducer'
import {
  formModalInitState,
  onChangeCompanyAC,
  onChangeContactAC,
  formAboutReducer,
} from './formAboutReducer'

const cyrillicRegex = /[а-яёА-ЯЁ]/

export const AboutModal = () => {
  const navigate = useNavigate()
  const [errorState, errorDispatch] = useReducer(errorAboutReducer, errorStyleModalState)
  const [formState, formDispatch] = useReducer(formAboutReducer, formModalInitState)
  const [sendStatus, setSendStatus] = useState(false)
  const [statusTextStyle, setStatusTextStyle] = useState('')
  const [modalStyle, setModalStyle] = useState('')
  const errorStyleCompany = errorState.company ? s.errorBorder : ''
  const errorStyleContact = errorState.contact ? s.errorBorder : ''
  const errorStyleButton = errorState.button ? s.errorButton : ''
  const cyrillicStyleCompany = formState.company.match(cyrillicRegex) ? s.fontSizeCyrillic : ''
  const cyrillicStyleContact = formState.contact.match(cyrillicRegex) ? s.fontSizeCyrillic : ''
  const refContact = useRef() as MutableRefObject<HTMLTextAreaElement>
  const formStyle = sendStatus
    ? `${s.hire__form_close} ${s.hire__form_procced_success}`
    : s.hire__form
  const proccedErrorStyle = statusTextStyle === s.hire__text_error ? s.hire__form_procced_error : ''
  const textMessage =
    formState.contact || formState.company
      ? ({
          '--message': sendStatus ? `'New partnership started'` : `'Some error occured'`,
        } as CSSProperties)
      : {}
  const postData = {
    company: formState.company.trimEnd(),
    contact: formState.contact.trimEnd(),
  }

  document.body.style.overflow = 'hidden'

  const fetchAboutData = async () => {
    try {
      setModalStyle(s.hireModalSpiner)
      const response = await fetch(process.env.REACT_APP_ABOUT_URL as RequestInfo | URL, {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

      response.text().then(text => console.log(text))
      setStatusTextStyle(s.hire__text_success)
      setModalStyle('')

      if (sendStatus !== true) {
        setSendStatus(true)
      }
    } catch {
      setStatusTextStyle(s.hire__text_error)
      setModalStyle('')

      if (sendStatus !== false) {
        setSendStatus(false)
      }

      setTimeout(() => {
        setStatusTextStyle('')
      }, 3000)
    }
  }

  const handleChangeCompany = (e: ChangeEvent<HTMLInputElement>) => {
    formDispatch(onChangeCompanyAC(e.currentTarget.value))
  }

  const handleChangeContact = (e: ChangeEvent<HTMLTextAreaElement>) => {
    formDispatch(onChangeContactAC(e.currentTarget.value))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formState.contact || !formState.company) {
      errorDispatch(buttonAC(true))
    } else {
      fetchAboutData()
    }
  }

  const handleClickButton = () => {
    if (!formState.company && !errorState.company) {
      errorDispatch(companyAC(true))
    }

    if (!formState.contact && !errorState.contact) {
      errorDispatch(contactAC(true))
    }
  }

  const handleCloseModal = () => {
    document.body.style.overflow = 'unset'
    navigate(PATH.ABOUT, { replace: true })
  }

  const handleMouseDownOutOffModal = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return
    handleCloseModal()
  }

  const handleKeyDownInput = (e: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const target = e.currentTarget
    const NEXT_FIELD_KEY = 'Enter'

    if (e.key === NEXT_FIELD_KEY && target.tagName === 'INPUT' && target.value) {
      e.preventDefault()
      refContact.current?.focus()
    }

    if (e.key === NEXT_FIELD_KEY && target.tagName === 'TEXTAREA' && !e.shiftKey) {
      e.preventDefault()

      if (formState.contact && formState.company) {
        target.blur()
        fetchAboutData()
      }
    }
  }

  const handleKeyDownClose = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      handleCloseModal()
    }
  }

  const handleAnimationEndCloseModal = (e: AnimationEvent<HTMLFormElement>) => {
    if (/animateCloseModal/.test(e.animationName)) {
      handleCloseModal()
    }
  }

  const handleAnimationEndButtonError = () => errorDispatch(buttonAC(false))

  useEffect(() => {
    const onEscape = (e: any) => {
      if ((e as KeyboardEvent).key === 'Escape') {
        handleCloseModal()
      }
    }

    document.addEventListener('keydown', onEscape)

    if (formState.company && errorState.company) {
      errorDispatch(companyAC(false))
    }

    if (formState.contact && errorState.contact) {
      errorDispatch(contactAC(false))
    }

    return () => {
      document.removeEventListener('keydown', onEscape)
    }
  }, [formState, errorState])

  return (
    <div className={s.hireModal_container}>
      <FocusLock>
        <div className={`${s.hireModal} ${modalStyle}`} onMouseDown={handleMouseDownOutOffModal}>
          <form
            className={`${formStyle} ${proccedErrorStyle}`}
            id="hireMe"
            onAnimationEnd={handleAnimationEndCloseModal}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className={s.hire__text_container}>
              <span className={`${s.hire__status_text} ${statusTextStyle}`} style={textMessage}>
                Thank you, I appreciate your trust. You can contact me via{' '}
                <a
                  tabIndex={1}
                  className={s.contactLinks}
                  href={Social.Telegram}
                  target={Social.Telegram}
                >
                  telegram
                </a>{' '}
                or leave your details down below:
              </span>
              <div
                tabIndex={5}
                className={s.close_modal}
                onClick={handleCloseModal}
                onKeyDown={handleKeyDownClose}
              ></div>
            </div>
            <div className={s.hire__block_input}>
              <input
                id="companyName"
                type="text"
                tabIndex={2}
                value={formState.company}
                name="companyName"
                className={`${s.hire__input_company_name} ${cyrillicStyleCompany} ${errorStyleCompany}`}
                onChange={handleChangeCompany}
                onKeyDown={handleKeyDownInput}
                autoComplete="off"
                required
              />
              <label className={s.hire__label_name}>company</label>
              <label className={s.placeholder} htmlFor="companyName">
                company name
              </label>
            </div>
            <div className={s.hire__block_input}>
              <textarea
                ref={refContact}
                id="message"
                tabIndex={3}
                value={formState.contact}
                name="message"
                className={`${s.hire__textarea} ${cyrillicStyleContact} ${errorStyleContact}`}
                onChange={handleChangeContact}
                onKeyDown={handleKeyDownInput}
                required
              />
              <label className={s.hire__label_contact}>contact</label>
              <label className={s.placeholder} htmlFor="message">
                leave contact
              </label>
            </div>
            <button
              type="submit"
              form="hireMe"
              tabIndex={4}
              className={`${s.hire__form_button} ${errorStyleButton}`}
              onClick={handleClickButton}
              onAnimationEnd={handleAnimationEndButtonError}
            >
              start partnership
            </button>
          </form>
        </div>
      </FocusLock>
    </div>
  )
}
