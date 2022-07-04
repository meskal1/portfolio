import React, { useEffect, useState } from 'react';
import s from './AboutText.module.scss'

type AboutTextType = {
	canIStartTypingAboutText: boolean
	textContent: string
	ivivtationAnimate: () => void
}

export const AboutText: React.FC<AboutTextType> = ({ canIStartTypingAboutText, textContent, ivivtationAnimate }) => {
	const aboutText = textContent.split(``);
	const [counter, setCounter] = useState(0);
	const [typedAboutText, setTypedAboutText] = useState(['']);
	const [showAboutText, setShowAboutText] = useState('');

	const startIvivtationAnimate = () => ivivtationAnimate()

	if (canIStartTypingAboutText) typewriter();

	function typewriter() {
		setTimeout(() => {
			if (showAboutText.length < aboutText.length) {
				setTypedAboutText(typedAboutText.concat(aboutText[counter]));
				setShowAboutText(typedAboutText.join(``));
				setCounter(counter + 1);
			}
		}, 30)
	}
	useEffect(() => {
		if (showAboutText.length === aboutText.length) startIvivtationAnimate()
	}, [showAboutText])

	return (
		<>
			<p className={s.about__text} id="aboutTextLength">{showAboutText}<span className={s.typewriterStick}>.</span></p>
		</>
	);
}