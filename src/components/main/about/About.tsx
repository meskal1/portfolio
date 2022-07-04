import React, { useState } from 'react';
import s from './About.module.scss'
import { AboutText } from './aboutText/AboutText';
import { InvitationText } from './invitationText/InvitationText';
// import { useComponentWillMount } from 'use-lifecycle-hooks';

type AboutType = {
	contentDisplayed: boolean
}

export const About: React.FC<AboutType> = ({ contentDisplayed }) => {
	const aboutText = `Hi, my name is Daniil, I'm an InfoSec engineer and now a front-end developer. I like to create things that are awesome for users to interact with. As a developer, I pursuit to create simple, understandable and beautiful solutions for the web. It all started when I wanted to create my own website, which served for search of the information, compliting of relevant courses and the achievement of the goal that you are now observing. And I don't forget about sports. Now, no one can stop me. :)`;
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


	// useComponentWillMount(() => {
	// 	const timeout = new Date().getTime() + 500;

	// 	//Do your 500ms animation here

	// 	while (new Date().getTime() < timeout) { }
	// })
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
							<a className={`${s.about__invitation_button} ${canIStartAimateButton}`} onAnimationEnd={onAnimationEnd} href="#">HIRE ME</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};