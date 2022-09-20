import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import s from './InputEmail.module.scss'

export type InputType = {
  storageInput: string
  setStorageInput: (storageInput: string) => void
  // onKeyPress: (storageInput: string) => void // Раскоментировать если нужно добавить действие по нажатию кнопки Энтер
}

const Input: React.FC<InputType> = ({ storageInput, setStorageInput }) => {
  //   const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
  //     // if (e.key === "Enter") onKeyPress(storageInput) // Если нажата клавиша Энтер, вызвать функцию нажатия на кнопку
  //   }

  //   const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //     setStorageInput(e.currentTarget.value)
  //   }
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[ a-zA-Z0-9-]+(?:\.[ a-zA-Z0-9-]+) *$/
  const [emailField, setEmailField] = useState<string>(sessionStorage.getItem('emailField') || '')
  const [emailFieldErrorStyle, setEmailFieldErrorStyle] = useState<string>('')

  const onBlurEmailInput = () => {
    if (!emailField.match(validRegex) && emailField) setEmailFieldErrorStyle(s.errorBorder)
  }

  const onChangeEmailField = (e: ChangeEvent<HTMLInputElement>) => {
    const validate = e.currentTarget.value.replace(/[а-яёА-ЯЁ]/, '').slice(0, 200)
    setEmailField(validate)
    sessionStorage.setItem('emailField', validate)
  }
  return (
    <>
      {/* <input type='text' onKeyPress={onKeyPressHandler} onChange={onChangeInputHandler} value={storageInput} /> */}
      <label className={s.bg_ForAutocompliteText}></label>
      <input
        className={`${s.contacts__input_email} ${emailFieldErrorStyle}`}
        required
        name='email'
        id='email'
        type='text'
        //   autoComplete={autocomplite}
        value={emailField}
        onChange={onChangeEmailField}
        onBlur={onBlurEmailInput}
      />
      <label className={s.contacts__label_email}>EMAIL</label>
      <label className={s.placeholder} htmlFor='email'>
        EMAIL
      </label>
    </>
  )
}

// Добавить в родитиельскую компоненту
// import { useState } from 'react';
// let [storageInput, setStorageInput] = useState(""); // Хранилище введенных данных в инпут
export default React.memo(Input)
