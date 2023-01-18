import { FC } from 'react'

import { createPortal } from 'react-dom'

import s from './ContactModal.module.scss'

type ContactModalType = {
  isOpen: boolean
  children: string
}

export const ContactModal: FC<ContactModalType> = ({ isOpen, children }) => {
  if (!isOpen) {
    return null
  }

  const modalSucces = children === 'Successfully sent' ? s.textSuccess : null
  const modalError = children === 'Some error occured' ? s.textError : null
  const modalStyle = children === '' ? s.modalSpiner : `${modalSucces || modalError} ${s.modalText}`

  return createPortal(
    <div className={s.modalContainer}>
      <span className={modalStyle}>{children}</span>
    </div>,
    document.getElementById('portal')!
  )
}
