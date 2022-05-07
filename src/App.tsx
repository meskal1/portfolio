import React from 'react';
import s from './App.module.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AboutMe from './components/main/aboutMe/AboutMe';
import Contacts from './components/main/contacts/Contacts';
import Employment from './components/main/employment/Employment';
import Projects from './components/main/projects/Projects';
import Skills from './components/main/skills/Skills';

function App() {
	return (
		<div className={s.wrapper}>
			<Header />
			<main className={s.main}>
				<AboutMe />
				<Skills />
				<Projects />
				<Employment />
				<Contacts />
			</main>
			<Footer />
		</div>
	);
}

export default App;
