import React, { ChangeEvent, useEffect, useState } from 'react';
import s from './TextareaMessage.module.scss'

type TextareaMessageType = {
	cyrillicChar: RegExp
}

export const TextareaMessage: React.FC<TextareaMessageType> = React.memo(({ cyrillicChar }) => {
	const [textField, setTextField] = useState<string>(sessionStorage.getItem('textField') || '')
	const [fontSizeCyrillicTextField, setFontSizeCyrillicTextField] = useState<string>('')
	const [textFieldErrorStyle, setTextFieldErrorStyle] = useState<string>('')

	const onChangeTextField = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const validate = e.currentTarget.value.slice(0, 3000)
		validate.match(cyrillicChar) ? setFontSizeCyrillicTextField(s.fontSizeCyrillic)
			: setFontSizeCyrillicTextField('')
		setTextField(validate)
		sessionStorage.setItem('textField', validate)
	};
	useEffect(() => {
		if (textField) setTextFieldErrorStyle('')
	}, [textField])

	return (
		<>
			<textarea required className={`${s.contacts__textarea} ${fontSizeCyrillicTextField} ${textFieldErrorStyle}`} name="message" id="message" value={textField} onChange={onChangeTextField} />
			<label className={s.contacts__label_message} >MESSAGE</label>
			<label className={s.placeholder} htmlFor="message">MESSAGE</label>
		</>
	);
});