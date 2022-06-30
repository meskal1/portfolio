import React, { useState } from 'react';
import s from './About.module.scss'
import { AboutText } from './aboutText/AboutText';
import { InvitationText } from './invitationText/InvitationText';

type AboutType = {
	contentDisplayed: boolean
}

export const About: React.FC<AboutType> = ({ contentDisplayed }) => {
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
							<AboutText canIStartAimate={canIStartAimate} />
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