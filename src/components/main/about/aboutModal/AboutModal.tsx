import React, {
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
} from 'react'
import { useNavigate } from 'react-router'
import FocusLock from 'react-focus-lock'
import s from './AboutModal.module.scss'
import { FormModalReducer, formModalInitState, onChangeCompanyAC, onChangeContactAC } from './FormModalReducer'
import { errorStyleModalState, ErrorModalReducer, companyAC, contactAC, buttonAC } from './ErrorModalReducer'
import { Social } from '../../../../Links.enum'

const cyrillicRegex = /[а-яёА-ЯЁ]/

export const AboutModal = () => {
  //   console.log('render Modal')
  const navigate = useNavigate()
  const [errorState, errorDispatch] = useReducer(ErrorModalReducer, errorStyleModalState)
  const [formState, formDispatch] = useReducer(FormModalReducer, formModalInitState)
  const [sendStatus, setSendStatus] = useState(false)
  const [statusTextStyle, setStatusTextStyle] = useState('')
  const errorStyleCompany = errorState.company ? s.errorBorder : ''
  const errorStyleContact = errorState.contact ? s.errorBorder : ''
  const errorStyleButton = errorState.button ? s.errorButton : ''
  const cyrillicStyleСompany = formState.company.match(cyrillicRegex) ? s.fontSizeCyrillic : ''
  const cyrillicStyleContact = formState.contact.match(cyrillicRegex) ? s.fontSizeCyrillic : ''
  const refContact = useRef() as MutableRefObject<HTMLTextAreaElement>
  const formStyle = sendStatus ? `${s.hire__form_close} ${s.hire__form_procced_success}` : s.hire__form
  const proccedErrorStyle = statusTextStyle === s.hire__text_error ? s.hire__form_procced_error : ''
  const textMessage =
    formState.contact || formState.company
      ? ({ '--message': sendStatus ? `'New partnership started'` : `'Github error demo'` } as React.CSSProperties)
      : {}
  const postData = {
    company: formState.company.trimEnd(),
    contact: formState.contact.trimEnd(),
  }

  document.body.style.overflow = 'hidden'

  const fetchAboutData = async () => {
    try {
      await fetch('http://192.168.1.105/api/about', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      // console.log(await response.text())
      setStatusTextStyle(s.hire__text_success)

      if (sendStatus !== true) {
        setSendStatus(true)
      }
    } catch {
      setStatusTextStyle(s.hire__text_error)

      if (sendStatus !== false) {
        setSendStatus(false)
      }

      setTimeout(() => {
        setStatusTextStyle('')
      }, 3000)
      console.log('Some error occured')
    }
  }

  const onChangeCompany = (e: ChangeEvent<HTMLInputElement>) => {
    formDispatch(onChangeCompanyAC(e.currentTarget.value))
  }

  const onChangeContact = (e: ChangeEvent<HTMLTextAreaElement>) => {
    formDispatch(onChangeContactAC(e.currentTarget.value))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formState.contact || !formState.company) {
      errorDispatch(buttonAC(true))
    } else {
      fetchAboutData()
    }
  }

  const onClickButton = () => {
    if (!formState.company && !errorState.company) {
      errorDispatch(companyAC(true))
    }

    if (!formState.contact && !errorState.contact) {
      errorDispatch(contactAC(true))
    }
  }

  const closeModal = () => {
    document.body.style.overflow = 'unset'
    navigate('/about', { replace: true })
  }

  const onMouseDownOutOffModal = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return
    closeModal()
  }

  const onKeyDownInput = (e: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
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

  const onFocusCloseElement = () => {
    document.addEventListener(
      'keydown',
      e => {
        if (e.key === 'Enter') {
          closeModal()
        }
      },
      { once: true }
    )
  }

  const onAnimationEndCloseModal = (e: AnimationEvent<HTMLFormElement>) => {
    if (/animateCloseModal/.test(e.animationName)) {
      closeModal()
    }
  }

  const onAnimationEndButtonError = () => errorDispatch(buttonAC(false))

  useEffect(() => {
    ///////////////////////////////
    const onEscape = (e: any) => {
      if ((e as KeyboardEvent).key === 'Escape') {
        closeModal()
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
    <>
      <div className={s.hireModal_container}>
        <FocusLock>
          <div className={s.hireModal} onMouseDown={onMouseDownOutOffModal}>
            <form
              className={`${formStyle} ${proccedErrorStyle}`}
              id='hireMe'
              onAnimationEnd={onAnimationEndCloseModal}
              onSubmit={onSubmit}
              noValidate>
              <div className={s.hire__text_container}>
                <span className={`${s.hire__status_text} ${statusTextStyle}`} style={textMessage}>
                  Thank you, I appreciate your trust. You can contact me via{' '}
                  <a tabIndex={1} className={s.contactLinks} href={Social.Telegram} target={Social.Telegram}>
                    telegram
                  </a>{' '}
                  or leave your details down below:
                </span>
                <div tabIndex={5} className={s.close_modal} onClick={closeModal} onFocus={onFocusCloseElement}></div>
              </div>
              <div className={s.hire__block_input}>
                <input
                  id='companyName'
                  type='text'
                  tabIndex={2}
                  value={formState.company}
                  name='companyName'
                  className={`${s.hire__input_company_name} ${cyrillicStyleСompany} ${errorStyleCompany}`}
                  onChange={onChangeCompany}
                  onKeyDown={onKeyDownInput}
                  autoComplete='off'
                  required
                />
                <label className={s.hire__label_name}>company</label>
                <label className={s.placeholder} htmlFor='companyName'>
                  company name
                </label>
              </div>
              <div className={s.hire__block_input}>
                <textarea
                  ref={refContact}
                  id='message'
                  tabIndex={3}
                  value={formState.contact}
                  name='message'
                  className={`${s.hire__textarea} ${cyrillicStyleContact} ${errorStyleContact}`}
                  onChange={onChangeContact}
                  onKeyDown={onKeyDownInput}
                  required
                />
                <label className={s.hire__label_contact}>contact</label>
                <label className={s.placeholder} htmlFor='message'>
                  leave contact
                </label>
              </div>
              <button
                type='submit'
                form='hireMe'
                tabIndex={4}
                className={`${s.hire__form_button} ${errorStyleButton}`}
                onClick={onClickButton}
                onAnimationEnd={onAnimationEndButtonError}>
                start partnership
              </button>
            </form>
          </div>
        </FocusLock>
      </div>
    </>
  )
}
