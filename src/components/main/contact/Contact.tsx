import React, { ChangeEvent, memo, useState } from 'react';
import s from './Contact.module.scss'

export type ContactType = {

}

export const Contact: React.FC<ContactType> = memo(({ }) => {
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

	const [nameField, setNameField] = useState<string>(sessionStorage.getItem('nameField') || '')
	const [emailField, setEmailField] = useState<string>(sessionStorage.getItem('emailField') || '')
	const [textField, setTextField] = useState<string>(sessionStorage.getItem('textField') || '')
	const onChangeNameField = (e: ChangeEvent<HTMLInputElement>) => {
		setNameField(e.currentTarget.value)
		sessionStorage.setItem('nameField', e.currentTarget.value)
	};
	const onChangeEmailField = (e: ChangeEvent<HTMLInputElement>) => {
		setEmailField(e.currentTarget.value)
		sessionStorage.setItem('emailField', e.currentTarget.value)
	};
	const onChangeTextField = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setTextField(e.currentTarget.value)
		sessionStorage.setItem('textField', e.currentTarget.value)
	};

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
									<input className={s.contacts__input_name} id="name" required name="name" type="text" autoComplete={autocomplite} value={nameField} onChange={onChangeNameField} />
									<label className={s.contacts__label_name} >NAME</label>
									<label className={s.placeholder} htmlFor="name">NAME</label>
								</div>
								<div className={s.contacts__block_input}>
									<label className={s.bg_ForAutocompliteText}></label>
									<input className={s.contacts__input_email} required name="email" id="email" type="text" autoComplete={autocomplite} value={emailField} onChange={onChangeEmailField} />
									<label className={s.contacts__label_email} >EMAIL</label>
									<label className={s.placeholder} htmlFor="email">EMAIL</label>
								</div>
								<div className={s.contacts__block_input}>
									<textarea placeholder="" required className={s.contacts__textarea} name="message" id="message" value={textField} onChange={onChangeTextField} />
									<label className={s.contacts__label_message} >MESSAGE</label>
									<label className={s.placeholder} htmlFor="message">MESSAGE</label>
								</div>
							</form>
						</div>
						<button className={s.contacts__form_button} type="submit" form="contacts">SEND ME MESSAGE</button>
					</div>
				</div>
			</section>
		</>
	);
});