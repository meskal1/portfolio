import React, { useState, MouseEvent, ChangeEvent, useEffect } from 'react';
import usePortal from 'react-useportal';
import s from './About.module.scss'
import { AboutText } from './aboutText/AboutText';
import { InvitationText } from './invitationText/InvitationText';

type AboutType = {
	contentDisplayed: boolean
}

const cyrillicChar = /[а-яёА-ЯЁ]/;

const aboutText = `Hi, my name is Daniil, I'm an InfoSec engineer and now a front-end developer. I like to create things that are awesome for users to interact with. As a developer, I pursuit to create simple, understandable and beautiful solutions for the web. It all started when I wanted to create my own website, which served for search of the information, compliting of relevant courses and the achievement of the goal that you are now observing. And I don't forget about sports. Now, no one can stop me. :)`;

export const About: React.FC<AboutType> = ({ contentDisplayed }) => {
	console.log('render modal');
	const { openPortal, closePortal, isOpen, Portal } = usePortal({ bindTo: document.getElementById('wrapper')! })

	const [buttonErrorStyle, setButtonErrorStyle] = useState<string>('')

	const [сompanyFieldErrorStyle, setCompanyFieldErrorStyle] = useState<string>('')
	const [сontactFieldErrorStyle, setContactFieldErrorStyle] = useState<string>('')
	const [fontSizeCyrillicСompany, setFontSizeCyrillicCompany] = useState<string>('')
	const [fontSizeCyrillicContactField, setFontSizeCyrillicContactField] = useState<string>('')
	const [companyField, setCompanyField] = useState<string>(sessionStorage.getItem('companyField') || '')
	const [contactField, setContactField] = useState<string>(sessionStorage.getItem('contactField') || '')
	const onChangeCompanyField = (e: ChangeEvent<HTMLInputElement>) => {
		const validate = e.currentTarget.value.slice(0, 100)
		validate.match(cyrillicChar) ? setFontSizeCyrillicCompany(s.fontSizeCyrillic) : setFontSizeCyrillicCompany('')
		setCompanyField(validate)
		sessionStorage.setItem('companyField', validate)
	};
	const onChangeContactField = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const validate = e.currentTarget.value.slice(0, 1000)
		validate.match(cyrillicChar) ? setFontSizeCyrillicContactField(s.fontSizeCyrillic)
			: setFontSizeCyrillicContactField('')
		setContactField(validate)
		sessionStorage.setItem('contactField', validate)
	};
	const onClickModalButton = (e: MouseEvent<HTMLButtonElement>) => {
		if (!companyField || !contactField) setButtonErrorStyle(s.errorButton);
		if (!companyField) setCompanyFieldErrorStyle(s.errorBorder);
		if (!contactField) setContactFieldErrorStyle(s.errorBorder);
	};
	const onAnimationButtonErrorEnd = () => setButtonErrorStyle('');

	const [canIStartTypingAboutText, setCanIStartTypingAboutText] = useState<boolean>(false);
	const [canIStartAimateButton, setCanIStartAimateButton] = useState<string>('');

	if (contentDisplayed) setTimeout(() => {
		setCanIStartTypingAboutText(true)
	}, 2000)

	const [canIStartAimateInvitationText, setCanIStartAimateInvitationText] = useState(false);
	const aboutTextCurrentLength = () => {
		setCanIStartAimateInvitationText(true);
		setCanIStartAimateButton(s.animationIsLoading)
	}
	const onAnimationEnd = () => setCanIStartAimateButton(s.animationIsLoaded);

	const onClickHireButton = (e: MouseEvent<HTMLAnchorElement>) => {
		openPortal(e)
		document.querySelector('body')?.style.setProperty('overflow', 'hidden');
	};
	const onClickOutOffModal = (e: MouseEvent<HTMLDivElement>) => {
		if (e.target !== e.currentTarget) return;
		closePortal()
		document.querySelector('body')?.removeAttribute('style')
		setCompanyFieldErrorStyle('')
		setContactFieldErrorStyle('')
		setButtonErrorStyle('')
	};

	// Если введена кирилица то меняю размер шрифта, если поля заполнены, убираю ErrorStyle
	useEffect(() => {
		companyField.match(cyrillicChar) ? setFontSizeCyrillicCompany(s.fontSizeCyrillic) : setFontSizeCyrillicCompany('')
		contactField.match(cyrillicChar) ? setFontSizeCyrillicContactField(s.fontSizeCyrillic) : setFontSizeCyrillicContactField('')
		if (companyField) setCompanyFieldErrorStyle('')
		if (contactField) setContactFieldErrorStyle('')
	}, [companyField, contactField])

	return (
		<>
			<section className={s.about}>
				<div className={s.about__container}>
					<div className={s.about__content}>
						<h2 className={s.about__title}>About me</h2>
						<div className={s.about__text_container}>
							<p className={s.about__text_substrate}>{aboutText}</p>
							<AboutText canIStartTypingAboutText={canIStartTypingAboutText} textContent={aboutText} ivivtationAnimate={aboutTextCurrentLength} />
						</div>
						<div className={s.about__invitation_block}>
							<InvitationText canIStartAimateInvitationText={canIStartAimateInvitationText} />
							<a className={`${s.about__invitation_button} ${canIStartAimateButton}`} onAnimationEnd={onAnimationEnd} onClick={onClickHireButton}>HIRE ME</a>
						</div>
						{isOpen && <Portal>
							<div className={s.hireModal} onClick={onClickOutOffModal} >
								<form className={s.hire__form} action="">
									<span className={s.hire__text}>Thank you, I appreciate your trust. You can contact me via <a className={s.contactLinks} href="https://t.me/DaniilKalach" target="https://t.me/DaniilKalach">telegram</a> or leave your details down below:</span>
									<div className={s.hire__block_input}>
										<input className={`${s.hire__input_company_name} ${fontSizeCyrillicСompany} ${сompanyFieldErrorStyle}`} id="companyName" required name="companyName" autoComplete="off" type="text" value={companyField} onChange={onChangeCompanyField} />
										<label className={s.hire__label_name} >COMPANY</label>
										<label className={s.placeholder} htmlFor="companyName">COMPANY NAME</label>
									</div>
									<div className={s.hire__block_input}>
										<textarea required className={`${s.hire__textarea} ${fontSizeCyrillicContactField} ${сontactFieldErrorStyle}`} name="message" id="message" value={contactField} onChange={onChangeContactField} />
										<label className={s.hire__label_contact} >CONTACT</label>
										<label className={s.placeholder} htmlFor="message">LEAVE CONTACT</label>
									</div>
									<button className={`${s.hire__form_button} ${buttonErrorStyle}`} type="submit" form="hireMe" onClick={onClickModalButton} onAnimationEnd={onAnimationButtonErrorEnd}>START PARTNERSHIP</button>
								</form>
							</div>
						</Portal>}
					</div>
				</div>
			</section>
		</>
	);
};