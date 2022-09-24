import React, { ChangeEvent, useEffect, useState, MouseEvent, AnimationEvent, KeyboardEvent } from 'react'
import { useLocation, useNavigate } from 'react-router'
import FocusLock from 'react-focus-lock'
import s from './AboutModal.module.scss'

const cyrillicChar = /[а-яёА-ЯЁ]/

const AboutModal = () => {
  console.log('render Modal')
  const navigate = useNavigate()
  const location = useLocation()
  //Если в адресной строке напрямую введен адрес с открытым попапом то добавить стили...
  if (location.pathname === '/about/about_modal') {
    document.querySelector('body')?.style.setProperty('overflow', 'hidden')
    document.addEventListener(
      'keydown',
      e => {
        if (e.key === 'Escape') closeModal()
      },
      { once: true }
    )
  }
  const [isDataSent, setIsDataSent] = useState<boolean>(false)
  const [errorStyleButton, setErrorStyleButton] = useState<string>('')
  const [errorStyleCompany, setErrorStyleCompany] = useState<string>('')
  const [errorStyleContact, setErrorStyleContact] = useState<string>('')
  const [cyrillicStyleСompany, setCyrillicStyleСompany] = useState<string>('')
  const [cyrillicStyleContact, setCyrillicStyleContact] = useState<string>('')
  const [companyState, setCompanyState] = useState<string>(sessionStorage.getItem('companyState') || '')
  const [contactState, setContactState] = useState<string>(sessionStorage.getItem('contactState') || '')

  const formStyle = `${!isDataSent ? s.hire__form : s.hire__form_close} ${isDataSent ? s.hire__form_succsess : null}`
  const textStyle = `${s.hire__text} ${isDataSent ? s.hire__text_succsess : null}`

  const onChangeCompany = (e: ChangeEvent<HTMLInputElement>) => {
    const validate = e.currentTarget.value.slice(0, 100).trimStart()
    setCompanyState(validate)
    sessionStorage.setItem('companyState', validate.trimEnd())
  }
  const onChangeContact = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const validate = e.currentTarget.value.slice(0, 1000).trimStart()
    setContactState(validate)
    sessionStorage.setItem('contactState', validate.trimEnd())
  }
  const onClickButton = () => {
    if (!companyState) setErrorStyleCompany(s.errorBorder)
    if (!contactState) setErrorStyleContact(s.errorBorder)
    if (!companyState || !contactState) setErrorStyleButton(s.errorButton)
    else setIsDataSent(true)
  }
  const closeModal = () => {
    document.querySelector('body')?.removeAttribute('style')
    setErrorStyleCompany('')
    setErrorStyleContact('')
    setErrorStyleButton('')
    navigate('/about', { replace: true })
  }
  const onMouseDownOutOffModal = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return
    closeModal()
  }
  const onKeyDownInput = (e: KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (!e.shiftKey && e.key === 'Enter' && e.currentTarget.tagName === 'TEXTAREA') {
      e.preventDefault()
      if (contactState && companyState) onClickButton()
    }
    //Предотвращает обновление страницы
    if (e.key === 'Enter' && e.currentTarget.tagName === 'INPUT') {
      e.preventDefault()
      const messageField = document.getElementById('message')
      if (messageField && companyState) messageField.focus()
    }
  }
  const onFocusCloseElement = () => {
    document.addEventListener(
      'keydown',
      e => {
        if (e.key === 'Enter') closeModal()
      },
      { once: true }
    )
  }
  const onAnimationEndCloseModal = (e: AnimationEvent<HTMLFormElement>) => {
    if (/animateCloseModal/.test(e.animationName)) {
      sessionStorage.clear()
      closeModal()
    }
  }
  const onAnimationEndButtonError = () => setErrorStyleButton('')

  useEffect(() => {
    if (companyState.match(cyrillicChar) && cyrillicStyleСompany === '') setCyrillicStyleСompany(s.fontSizeCyrillic)
    if (!companyState.match(cyrillicChar) && cyrillicStyleСompany !== '') setCyrillicStyleСompany('')
    if (contactState.match(cyrillicChar) && cyrillicStyleContact === '') setCyrillicStyleContact(s.fontSizeCyrillic)
    if (!contactState.match(cyrillicChar) && cyrillicStyleContact !== '') setCyrillicStyleContact('')
    if (companyState && errorStyleCompany !== '') setErrorStyleCompany('')
    if (contactState && errorStyleContact !== '') setErrorStyleContact('')
  }, [companyState, contactState, cyrillicStyleContact, cyrillicStyleСompany, errorStyleCompany, errorStyleContact])

  return (
    <>
      <div className={s.hireModal_container}>
        <FocusLock>
          <div className={s.hireModal} onMouseDown={onMouseDownOutOffModal}>
            <form className={formStyle} action='' id='hireMe' onAnimationEnd={onAnimationEndCloseModal}>
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
                  value={companyState}
                  name='companyName'
                  className={`${s.hire__input_company_name} ${cyrillicStyleСompany} ${errorStyleCompany}`}
                  onChange={onChangeCompany}
                  onKeyDown={onKeyDownInput}
                  autoComplete='off'
                  required
                />
                <label className={s.hire__label_name}>COMPANY</label>
                <label className={s.placeholder} htmlFor='companyName'>
                  COMPANY NAME
                </label>
              </div>
              <div className={s.hire__block_input}>
                <textarea
                  id='message'
                  tabIndex={3}
                  value={contactState}
                  name='message'
                  className={`${s.hire__textarea} ${cyrillicStyleContact} ${errorStyleContact}`}
                  onChange={onChangeContact}
                  onKeyDown={onKeyDownInput}
                  required
                />
                <label className={s.hire__label_contact}>CONTACT</label>
                <label className={s.placeholder} htmlFor='message'>
                  LEAVE CONTACT
                </label>
              </div>
              <button
                type='button'
                form='hireMe'
                tabIndex={4}
                className={`${s.hire__form_button} ${errorStyleButton}`}
                onClick={onClickButton}
                onAnimationEnd={onAnimationEndButtonError}>
                START PARTNERSHIP
              </button>
            </form>
          </div>
        </FocusLock>
      </div>
    </>
  )
}
export default AboutModal
