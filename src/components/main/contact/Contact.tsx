import React, { useState } from 'react';
import s from './Contact.module.scss'

export type ContactType = {

}

export const Contact: React.FC<ContactType> = ({ }) => {

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
						<form className={s.contacts__form} action="">
							<label className={s.switcher} htmlFor="checkbox">autocomplete
								<input type="checkbox" id="checkbox" onChange={onChangeAutocomplite} checked={isChecked} />
							</label>
							<div className={s.contacts__block_input1}>
								<input className={s.contacts__input_name} id="name" required placeholder="NAME" name="name" type="text" autoComplete={autocomplite} />
								<label className={s.contacts__label_name} htmlFor="name">NAME</label>
							</div>
							<div className={s.contacts__block_input}>
								<input className={s.contacts__input_email} required placeholder="EMAIL" name="email" type="text" autoComplete={autocomplite} />
								<label className={s.contacts__label_email} htmlFor="email">EMAIL</label>
							</div>
							<div className={s.contacts__block_input}>
								<textarea placeholder="MESSAGE" required className={s.contacts__textarea} name="message" id="contacts" />
								<label className={s.contacts__label_message} htmlFor="message">MESSAGE</label>
							</div>
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

// Блок зафиксировать абоут

// Мониторить размер ширины и высоты вьюпорта и исходя из этого убрать елемент(компоненту) меню из хедера, или добавить в хедер, того же касается бургер меню списка, тогоже касается футера и добавление его в бургер меню

// Вкладка проекты выпирающий скрол с квадратными видео превью и при ховере выдвигающийся прозрачный гласморфизм с текстом описания примененых стеков технологий

// Убрать багу с открытым меню и переворачиванием в горизонтальный режим телефона (остается фон)
// Исправить баг сотображением логотипа без футера вылазиютжелтыелинии