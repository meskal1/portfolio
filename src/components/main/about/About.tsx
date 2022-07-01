import React, { useState } from 'react';
import s from './About.module.scss'
import { AboutText } from './aboutText/AboutText';
import { InvitationText } from './invitationText/InvitationText';

type AboutType = {
	contentDisplayed: boolean
}

export const About: React.FC<AboutType> = ({ contentDisplayed }) => {
	const aboutText = `Hi, my name is Daniil, I'm an InfoSec engineer and now a front-end developer. I like to create things that are awesome for users to interact with. As a developer, I pursuit to create simple, understandable and beautiful solutions for the web. It all started when I wanted to create my own website, which served for search of the information, compliting of relevant courses and the achievement of the goal that you are now observing. And I don't forget about sports. Now, no one can stop me. :)`;
	let [canIStartAimate, setCanIStartAimate] = useState(false);
	let [canIStartAimate2, setCanIStartAimate2] = useState(false);

	if (contentDisplayed) setTimeout(() => {
		setCanIStartAimate(true)
	}, 2000)
	if (contentDisplayed) setTimeout(() => {
		setCanIStartAimate2(true)
	}, 21000)

	return (
		<>
			<section className={s.about}>
				<div className={s.about__container}>
					<div className={s.about__content}>
						<h2 className={s.about__title}>About me</h2>
						<div className={s.about__text_container}>
							<p className={s.about__text_substrate}>{aboutText}</p>
							<AboutText canIStartAimate={canIStartAimate} textContent={aboutText} />
						</div>
						<div className={s.about__invitation_block}>
							<InvitationText canIStartAimate={canIStartAimate2} />
							<a className={s.about__invitation_button} href="#">HIRE ME</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};