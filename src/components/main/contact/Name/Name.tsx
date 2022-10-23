import React, { ChangeEvent, useState, KeyboardEvent } from 'react'
import s from '../Contact.module.scss'

type NameType = {
  autocomplite: string
  onKeyDownInput: (e: KeyboardEvent<HTMLInputElement>) => void
  errorStyle: boolean
  setErrorStyle: () => void
}

export const Name: React.FC<NameType> = React.memo(({ autocomplite, onKeyDownInput, errorStyle, setErrorStyle }) => {
  console.log('render NAME')
  //   const dispatch = useDispatch()
  //   const name = useSelector<AppRootStateType, string>(state => state.formData.name)
  const [name, setName] = useState(sessionStorage.getItem('name') || '')
  const cyrillicStyleName = name.match(/[а-яёА-ЯЁ]/) ? s.fontSizeCyrillic : ''
  //   const borderStyle = errorStyle ? s.errorBorder : ''

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    //  dispatch(onChangeNameAC(e.currentTarget.value))
    const validName = e.currentTarget.value
      .replace(/[^a-zA-Zа-яёА-ЯЁ -]/, '')
      .slice(0, 50)
      .trimStart()
    setName(validName)

    if (validName !== '' && errorStyle) {
      setErrorStyle()
    }

    sessionStorage.setItem('name', validName.trimEnd())
  }

  return (
    <>
      <input
        id='name'
        type='text'
        value={name}
        name='name'
        className={`${s.contacts__input_name} ${cyrillicStyleName} ${''}`}
        onChange={onChangeName}
        onKeyDown={onKeyDownInput}
        autoComplete={autocomplite}
        required
      />
    </>
  )
})
