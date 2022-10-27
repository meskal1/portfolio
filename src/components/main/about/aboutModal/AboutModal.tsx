import React, {
  ChangeEvent,
  useEffect,
  useState,
  MouseEvent,
  AnimationEvent,
  KeyboardEvent,
  MutableRefObject,
  useRef,
  useReducer,
} from 'react'
import { useNavigate } from 'react-router'
import FocusLock from 'react-focus-lock'
import s from './AboutModal.module.scss'
import { FormModalReducer, formModalInitState, onChangeCompanyAC, onChangeContactAC } from './FormModalReducer'
import { errorStyleModalState, ErrorModalReducer, companyAC, contactAC, buttonAC } from './ErrorModalReducer'

const cyrillicRegex = /[а-яёА-ЯЁ]/

const AboutModal = () => {
  console.log('render Modal')
  const navigate = useNavigate()
  const [errorState, errorDispatch] = useReducer(ErrorModalReducer, errorStyleModalState)
  const [formState, formDispatch] = useReducer(FormModalReducer, formModalInitState)
  const [isDataSent, setIsDataSent] = useState(false)
  const errorStyleCompany = errorState.company ? s.errorBorder : ''
  const errorStyleContact = errorState.contact ? s.errorBorder : ''
  const errorStyleButton = errorState.button ? s.errorButton : ''
  const cyrillicStyleСompany = formState.company.match(cyrillicRegex) ? s.fontSizeCyrillic : ''
  const cyrillicStyleContact = formState.contact.match(cyrillicRegex) ? s.fontSizeCyrillic : ''
  const refContact = useRef() as MutableRefObject<HTMLTextAreaElement>
  const formStyle = isDataSent ? `${s.hire__form_close} ${s.hire__form_succsess}` : s.hire__form
  const textStyle = `${s.hire__text} ${isDataSent ? s.hire__text_succsess : ''}`
  const postData = {
    company: formState.company.trimEnd(),
    contact: formState.contact.trimEnd(),
  }

  document.body.style.overflow = 'hidden'

  const fetchAboutData = async () => {
    await fetch('http://192.168.1.105/about', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      // .then(response => response.json())
      .then(response => {
        console.log('response', response)
        // response.status === 200
      })
      .catch(error => console.log('Some error ocured'))
  }

  const onChangeCompany = (e: ChangeEvent<HTMLInputElement>) => {
    formDispatch(onChangeCompanyAC(e.currentTarget.value))
  }

  const onChangeContact = (e: ChangeEvent<HTMLTextAreaElement>) => {
    formDispatch(onChangeContactAC(e.currentTarget.value))
  }

  const onClickButton = () => {
    if (!formState.company && !errorState.company) {
      errorDispatch(companyAC(true))
    }

    if (!formState.contact && !errorState.contact) {
      errorDispatch(contactAC(true))
    }

    if (!formState.contact || !formState.company) {
      errorDispatch(buttonAC(true))
    } else {
      fetchAboutData()
      setIsDataSent(true)
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
        onClickButton()
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
  }, [formState])

  return (
    <>
      <div className={s.hireModal_container}>
        <FocusLock>
          <div className={s.hireModal} onMouseDown={onMouseDownOutOffModal}>
            <form className={formStyle} id='hireMe' onAnimationEnd={onAnimationEndCloseModal}>
              <div className={s.hire__text_container}>
                <span className={textStyle}>
                  Thank you, I appreciate your trust. You can contact me via{' '}
                  <a tabIndex={1} className={s.contactLinks} href='https://t.me/DaniilKalach' target='https://t.me/DaniilKalach'>
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
                type='button'
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
export default AboutModal
// Ни одна перегрузка не соответствует этому вызову.
//   Перегрузка 1 из 2, "(type: "keydown", listener: (this: Document, ev: KeyboardEvent) => any, options?: boolean | AddEventListenerOptions | undefined): void", возвратила следующую ошибку.
//     Аргумент типа "(e: KeyboardEvent) => void" нельзя назначить параметру типа "(this: Document, ev: KeyboardEvent) => any".
//       Типы параметров "e" и "ev" несовместимы.
//         В типе "KeyboardEvent" отсутствуют следующие свойства из типа "KeyboardEvent<Element>": locale, nativeEvent, isDefaultPrevented, isPropagationStopped, persist
//   Перегрузка 2 из 2, "(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void", возвратила следующую ошибку.
//     Аргумент типа "(e: KeyboardEvent) => void" нельзя назначить параметру типа "EventListenerOrEventListenerObject".
//       Тип "(e: KeyboardEvent) => void" не может быть назначен для типа "EventListener".
//         Типы параметров "e" и "evt" несовместимы.
//           В типе "Event" отсутствуют следующие свойства из типа "KeyboardEvent<Element>": altKey, charCode, ctrlKey, code и еще 15.
