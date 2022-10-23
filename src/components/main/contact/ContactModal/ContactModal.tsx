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

  return createPortal(
    <>
      <div className={s.modalContainer}>
        <span className={s.modalText}>{children}</span>
      </div>
    </>,
    document.getElementById('portal')!
  )
}
