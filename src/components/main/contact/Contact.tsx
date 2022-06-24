import React from 'react';
import s from './Contact.module.scss'

export type ContactType = {

}

export const Contact: React.FC<ContactType> = ({ }) => {

	return (
		<>
			<section className={s.contacts}>
				<div className={s.contacts__container}>
					<div className={s.contacts__content}>
						<h2 className={s.contacts__title}>Contact</h2>
						<form className={s.contacts__form} action="">
							<label htmlFor="name">Name</label>
							<input className={s.contacts__input} required placeholder="" name="name" type="text" />
							{/* atribut autocomplete */}
							<label htmlFor="javascript">Email</label>
							<input className={s.contacts__input} required placeholder="" name="email" type="text" />
							<label htmlFor="javascript">Message</label>
							<textarea contentEditable={true} className={s.contacts__textarea} name="" id="contacts" />
						</form>
						<button className={s.contacts__form_button} type="submit" form="contacts">SEND ME MESSAGE</button>
					</div>
				</div>
			</section>
		</>
	);
};
// Анимсация кнопки градиент черно желтый цветтекста белый сверху вних как на шторке
// Добавить поле с чемто по нажатию на кнопку или ссылку, анимация поля по высоте и по ширине 
// Анимация появления инпутов справа на лево, афтер цетбекграунд, бифореплашка выпуклая растянулась и сжалась
// Анимация лейблов справа на лево
// Анимация неправильного ввода (недостающего) кнопка загорается красным и дергается а также подсвечиваются имена полей красным
// Вместо текстареа сделать контент едитабле спан иограничить по высоте в зависимости от размера окна а также взятьстили с соцсети