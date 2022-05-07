import React from 'react';
import s from './Contacts.module.scss'

export type ContactsType = {

}

const Contacts: React.FC<ContactsType> = ({ }) => {
	return (
		<>
			<section className={s.contacts}>
				<div className={s.contacts__container}>
					<div className={s.contacts__content}>
						<h2 className={s.contacts__title}>Контакты</h2>
						<form className={s.contacts__form} action="">
							<input className={s.contacts__input} required placeholder="" name="name" value="" type="text" />
							{/* atribut autocomplete */}
							<input className={s.contacts__input} required placeholder="" name="name" value="" type="text" />
							<textarea className={s.contacts__textarea} name="" id="contacts" />
						</form>
						<button className={s.contacts__form_button} type="submit" form="contacts">Отправить</button>
					</div>
				</div>
			</section>
		</>
	);
};
export default React.memo(Contacts)