import React from 'react'
import { createPortal } from 'react-dom'
import s from './ContactModal.module.scss'

type ContactModalType = {
  isOpen: boolean
  children: string
}

export const ContactModal: React.FC<ContactModalType> = ({ isOpen, children }) => {
  if (!isOpen) {
    return null
  }

  const textColor = children === 'Successfully sent' ? s.textSuccess : s.textError

  return createPortal(
    <>
      <div className={s.modalContainer}>
        <span className={`${s.modalText} ${textColor}`}>{children}</span>
      </div>
    </>,
    document.getElementById('portal')!
  )
}
