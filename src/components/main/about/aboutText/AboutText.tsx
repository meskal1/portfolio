import React, { useState } from 'react';
import s from './AboutText.module.scss'

type AboutTextType = {
	canIStartAimate: boolean
	textContent: string
}

export const AboutText: React.FC<AboutTextType> = ({ canIStartAimate, textContent }) => {
	const aboutText = textContent.split(``);
	let [counter, setCounter] = useState(0);
	let [typedAboutText, setTypedAboutText] = useState(['']);
	let [showAboutText, setShowAboutText] = useState('');

	if (canIStartAimate) typewriter();

	function typewriter() {
		setTimeout(() => {
			if (showAboutText.length < aboutText.length) {
				setTypedAboutText(typedAboutText.concat(aboutText[counter]));
				setShowAboutText(typedAboutText.join(``));
				setCounter(counter + 1);
			}
		}, 30)
	}

	return (
		<>
			<p className={s.about__text}>{showAboutText}<span className={s.typewriterStick}>.</span></p>
		</>
	);
}