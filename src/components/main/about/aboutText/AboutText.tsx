import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
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

	// const aboutTextRef = useRef() as MutableRefObject<HTMLParagraphElement>;
	// const a = document.querySelector(`#wq`)
	// if (a !== null) a.innerHTML = a.textContent?.replace(/\S/g, "<span>$&</span>")
	// console.log(a?.textContent);
	// aboutTextRef.current
	// let a;
	// if (aboutTextRef.current !== undefined) a = aboutTextRef.current
	// if (aboutTextRef.current !== undefined) a.innerHTML = a.textContent?.replace(/\S/g, "<span>$&</span>")

	// let b = a.innerHTML
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
		if (showAboutText.length === aboutText.length) {
			startIvivtationAnimate()
			setShowAboutText('')
			setShowAboutText(showAboutText.split(``).map(el => `<span>${el}</span>`).join(``))
			// console.log(a);
			// aboutTextRef.innerHTML = aboutTextRef.current.textContent
			// a = aboutTextRef.current
			// a.innerHTML = a.textContent?.replace(/\S/g, "<span>$&</span>")
			// let c = 
		}
	}, [showAboutText])

	return (
		<>
			<p className={s.about__text} id="wq">{showAboutText}<span className={s.typewriterStick}>.</span></p>
		</>
	);
}