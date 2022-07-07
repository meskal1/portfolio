import React, { ChangeEvent, memo, useEffect, useState } from 'react';
import usePortal from 'react-useportal';
import s from './Contact.module.scss'
import { TextareaMessage } from './textareaMessage/TextareaMessage';

export type ContactType = {

}

export const Contact: React.FC<ContactType> = memo(({ }) => {
	const { openPortal, closePortal, isOpen, Portal } = usePortal({ bindTo: document.getElementById('wrapper')! })
	// При нажатии на бургер добавляется/убирается атрибут style у body со свойством overflow: hidden.
	// Добавляются/убираются стили отображения бургера.


	console.log('rendered contact');
	const [autocomplite, setAutocomplite] = useState(localStorage.getItem('isOffAutocomplite') || 'off')
	const [isChecked, setIsChecked] = useState<boolean>(localStorage.getItem('isOffAutocomplite') === 'on' ? true : false)
	const onChangeAutocomplite = () => {
		if (autocomplite === 'off') {
			setAutocomplite('on')
			setIsChecked(true)
			localStorage.setItem('isOffAutocomplite', 'on')
		} else {
			setAutocomplite('off')
			setIsChecked(false)
			localStorage.setItem('isOffAutocomplite', 'off')
		}
	};

	const [isAnimationLoaded, setIsAnimationLoaded] = useState(s.animationIsLoading);

	const [buttonErrorStyle, setButtonErrorStyle] = useState<string>('')
	const [nameFieldErrorStyle, setNameFieldErrorStyle] = useState<string>('')
	const [emailFieldErrorStyle, setEmailFieldErrorStyle] = useState<string>('')


	const [fontSizeCyrillicName, setFontSizeCyrillicName] = useState<string>('')
	const [textField, setTextField] = useState<string>(sessionStorage.getItem('textField') || '')
	const [fontSizeCyrillicTextField, setFontSizeCyrillicTextField] = useState<string>('')
	const [textFieldErrorStyle, setTextFieldErrorStyle] = useState<string>('')


	const cyrillicChar = /[а-яёА-ЯЁ]/;
	const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[ a-zA-Z0-9-]+(?:\.[ a-zA-Z0-9-]+) *$/;

	const [nameField, setNameField] = useState<string>(sessionStorage.getItem('nameField') || '')
	const [emailField, setEmailField] = useState<string>(sessionStorage.getItem('emailField') || '')

	const onChangeNameField = (e: ChangeEvent<HTMLInputElement>) => {
		const validate = e.currentTarget.value.replace(/[^a-zA-Zа-яёА-ЯЁ -]/, '').slice(0, 50)
		validate.match(cyrillicChar) ? setFontSizeCyrillicName(s.fontSizeCyrillic) : setFontSizeCyrillicName('')
		setNameField(validate)
		sessionStorage.setItem('nameField', validate)
	};
	const onChangeEmailField = (e: ChangeEvent<HTMLInputElement>) => {
		const validate = e.currentTarget.value.replace(/[а-яёА-ЯЁ]/, '').slice(0, 200)
		setEmailField(validate)
		sessionStorage.setItem('emailField', validate)
	};
	const onClickButtonHandler = () => {
		if (!nameField || !emailField || !textField || !emailField.match(validRegex)) setButtonErrorStyle(s.errorButton)
		if (!nameField) setNameFieldErrorStyle(s.errorBorder)
		if (!emailField || !emailField.match(validRegex)) setEmailFieldErrorStyle(s.errorBorder)
		if (!textField) setTextFieldErrorStyle(s.errorBorder)
		openPortal()
		// document.querySelector('body')?.style.setProperty('overflow', 'hidden')
		// if (isOpen) {
		// 	// document.querySelector('body')?.style.setProperty('overflow', 'hidden')
		// } else {
		// 	// document.querySelector('body')?.removeAttribute('style')
		// 	document.querySelector('body')?.style.setProperty('overflow', 'hidden')
		// }
	};
	const onChangeTextField = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const validate = e.currentTarget.value.slice(0, 3000)
		validate.match(cyrillicChar) ? setFontSizeCyrillicTextField(s.fontSizeCyrillic)
			: setFontSizeCyrillicTextField('')
		setTextField(validate)
		sessionStorage.setItem('textField', validate)
	};
	const onAnimationEnd = () => {
		setIsAnimationLoaded(s.animationIsLoaded);
		setButtonErrorStyle('')
	}
	const onBlurEmailInput = () => {
		if (!emailField.match(validRegex) && emailField) setEmailFieldErrorStyle(s.errorBorder)
	};
	useEffect(() => {
		if (nameField) setNameFieldErrorStyle('')
		if (emailField) setEmailFieldErrorStyle('')
		if (textField) setTextFieldErrorStyle('')
	}, [nameField, emailField, textField])

	return (
		<>
			<section className={s.contacts}>
				<div className={s.contacts__container}>
					<div className={s.contacts__content}>
						<div className={s.contacts__text_container}>
							<h2 className={s.contacts__title}>Contact</h2>
							<p className={s.contacts__text}>Contact me if you have a job or just say hi :)</p>
						</div>
						<div className={s.contacts__form_container}>
							<label className={s.switcher_container} htmlFor="checkbox">autocomplete
								<input type="checkbox" id="checkbox" onChange={onChangeAutocomplite} checked={isChecked} />
								<span className={s.switcher}></span>
							</label>
							<form className={s.contacts__form} action="">
								<div className={s.contacts__block_input}>
									<label className={s.bg_ForAutocompliteText}></label>
									<input className={`${s.contacts__input_name} ${fontSizeCyrillicName} ${nameFieldErrorStyle}`} id="name" required name="name" type="text" autoComplete={autocomplite} value={nameField} onChange={onChangeNameField} />
									<label className={s.contacts__label_name} >NAME</label>
									<label className={s.placeholder} htmlFor="name">NAME</label>
								</div>
								<div className={s.contacts__block_input}>
									<label className={s.bg_ForAutocompliteText}></label>
									<input className={`${s.contacts__input_email} ${emailFieldErrorStyle}`} required name="email" id="email" type="text" autoComplete={autocomplite} value={emailField} onChange={onChangeEmailField} onBlur={onBlurEmailInput} />
									<label className={s.contacts__label_email} >EMAIL</label>
									<label className={s.placeholder} htmlFor="email">EMAIL</label>
								</div>
								<div className={s.contacts__block_input}>
									<textarea required className={`${s.contacts__textarea} ${fontSizeCyrillicTextField} ${textFieldErrorStyle}`} name="message" id="message" value={textField} onChange={onChangeTextField} />
									<label className={s.contacts__label_message} >MESSAGE</label>
									<label className={s.placeholder} htmlFor="message">MESSAGE</label>
									{/* <TextareaMessage cyrillicChar={cyrillicChar} /> */}
								</div>
							</form>
						</div>
						{isOpen && <Portal>
							<div className={s.messageSuccessfullySent}><span>Successfully sent</span></div>
						</Portal>}
						<button className={`${s.contacts__form_button} ${buttonErrorStyle} ${isAnimationLoaded}`} type="submit" form="contacts" onClick={onClickButtonHandler} onAnimationEnd={onAnimationEnd}>SEND ME MESSAGE</button>
					</div>
				</div>
			</section>
		</>
	);
});