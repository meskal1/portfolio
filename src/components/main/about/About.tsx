import React, { useEffect, useMemo, useState } from 'react';
import s from './About.module.scss'

export type AboutType = {

}
let i = 0
export const About: React.FC<AboutType> = ({ }) => {

	const aboutText = `Hi, my name is Daniil, I'm an InfoSec engineer and now a front-end developer. I like to create things that are awesome for users to interact with. As a developer, I pursuit to create simple, understandable and beautiful solutions for the web. It all started when I wanted to create my own website, which served for search of the information, compliting of relevant courses and the achievement of the goal that you are now observing. And I don't forget about sports. Now, no one can stop me. :)`
	const [typedAboutText, setW] = useState([''])
	let [typedAboutText2, setE] = useState('')
	i = useMemo(() => i++, [typedAboutText])
	useEffect(() => {
		// setTimeout(() => {
		const arrayOfText = aboutText.split(``)
		function loop() {
			if (typedAboutText2.length < aboutText.length) {
				setW(typedAboutText.concat(arrayOfText[i]))
				setE(typedAboutText.join(``))
				// setI(i)
				i++
				console.log(typedAboutText2);
				console.log(i);
			}
		}
		// }, 3290)
		const interval = setInterval(loop, 2000)
		return () => { clearInterval(interval) }
	}, [typedAboutText])

	return (
		<>
			<section className={s.about}>
				<div className={s.about__container}>
					<div className={s.about__content}>
						<h2 className={s.about__title}>About me</h2>
						<div className={s.about__text_container}>
							<p className={s.about__text}>{typedAboutText2}</p>
						</div>
						<div className={s.about__invitation_block}>
							<p className={s.about__invitation}>AVAILABLE FOR FREELANCE</p>
							<a className={s.about__invitation_button} href="#">HIRE ME</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};