import React, { useState } from 'react';
import s from './AboutText.module.scss'

type AboutTextType = {
	canIStartAimate: boolean
}

export const AboutText: React.FC<AboutTextType> = ({ canIStartAimate }) => {
	const aboutText = `Hi, my name is Daniil, I'm an InfoSec engineer and now a front-end developer. I like to create things that are awesome for users to interact with. As a developer, I pursuit to create simple, understandable and beautiful solutions for the web. It all started when I wanted to create my own website, which served for search of the information, compliting of relevant courses and the achievement of the goal that you are now observing. And I don't forget about sports. Now, no one can stop me. :)`.split(``);
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
			<p className={s.about__text}>{showAboutText}</p>
		</>
	);
}