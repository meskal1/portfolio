import React, { memo, useState } from 'react';
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

	return (
		<>
			<section className={s.contacts}>
				<div className={s.contacts__container}>
					<div className={s.contacts__content}>
						<div className={s.contacts__text_container}>
							<h2 className={s.contacts__title}>Contact</h2>
							<p className={s.contacts__text}>Contact me if you have a job or just say hi. :)</p>
						</div>
						<div className={s.contacts__form_container}>
							<label className={s.switcher} htmlFor="checkbox">autocomplete
								<input type="checkbox" id="checkbox" onChange={onChangeAutocomplite} checked={isChecked} />
							</label>
							<form className={s.contacts__form} action="">
								<div className={s.contacts__block_input}>
									<label className={s.background_autocomplite}></label>
									<input className={s.contacts__input_name} id="name" required placeholder="NAME" name="name" type="text" autoComplete={autocomplite} />
									<label className={s.contacts__label_name} htmlFor="name">NAME</label>
								</div>
								<div className={s.contacts__block_input}>
									<label className={s.background_autocomplite}></label>
									<input className={s.contacts__input_email} required placeholder="EMAIL" name="email" type="text" autoComplete={autocomplite} />
									<label className={s.contacts__label_email} htmlFor="email">EMAIL</label>
								</div>
								<div className={s.contacts__block_input}>
									<textarea placeholder="MESSAGE" required className={s.contacts__textarea} name="message" id="contacts" />
									<label className={s.contacts__label_message} htmlFor="message">MESSAGE</label>
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