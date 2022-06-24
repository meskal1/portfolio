import React, { useState } from 'react';
import s from './App.module.scss';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Home } from './components/main/home/Home';
import { Contact } from './components/main/contact/Contact';
import { About } from './components/main/about/About';
import Projects from './components/main/projects/Projects';
import Skills from './components/main/skills/Skills';
import logo from './img/transparent_logo.svg'
import { Route, Routes } from 'react-router-dom';

function App() {
	let [display, setDisplay] = useState(s.displayNone)
	setTimeout(() => {
		setDisplay(s.display)
	}, 3290)
	const [isMenuOpen, setIsMenuOpen] = useState('')

	const onClickBurgerMenu = () => {
		if (isMenuOpen === s.menuOpen) {
			setIsMenuOpen('')
			document.querySelector('body')?.removeAttribute('style')
		} else {
			setIsMenuOpen(s.menuOpen)
			document.querySelector('body')?.style.setProperty('overflow', 'hidden')
		}
	};

	return (
		<>
			<div className={`${s.wrapper} ${isMenuOpen}`}>
				<div className={s.logo_animated_container}>
					<div className={s.logo2}><img className={s.logo1} src={logo} alt="logo2" /></div>
					<div className={s.wave_container}><div className={s.wave}></div></div>
				</div>
				<div className={display}>
					<Header onClickBurgerMenu={onClickBurgerMenu} />
					<main className={s.main}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/home" element={<Home />} />
							<Route path="/skills" element={<Skills />} />
							<Route path="/projects" element={<Projects />} />
							<Route path="/contacts" element={<Contact />} />
							<Route path="/about" element={<About displayedLogo={display} displayedLogoProps={s.display} />} />
						</Routes>
					</main>
					<Footer />
				</div>
			</div>
		</>
	);
}
export default App;
