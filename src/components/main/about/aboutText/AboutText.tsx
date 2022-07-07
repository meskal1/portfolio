import React, { MouseEvent, useEffect, useState } from 'react';
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
	// При наведении на символ растворяет его (добавляя класс s.active)
	const onMouseOver = (e: MouseEvent<HTMLSpanElement>) => {
		if (e.currentTarget.textContent && showAboutText.length === aboutText.length) e.currentTarget.setAttribute('class', s.active)
	};
	// Оборачивает каждый символ в span
	const wrappSpanShowAboutText = showAboutText.split(``).map(el => <span onMouseOver={onMouseOver}>{el}</span>)

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
			<p className={s.about__text}>{wrappSpanShowAboutText}<span className={s.typewriterStick}>.</span></p>
		</>
	);
}