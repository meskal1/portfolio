import React, { useState } from 'react';
import s from './Header.module.scss'
import logo from '../../img/logo.svg'
import { Link, useLocation } from 'react-router-dom';

export type HeaderType = {
	onClickBurgerMenu: () => void
}

export const Header: React.FC<HeaderType> = ({ onClickBurgerMenu }) => {
	const header = [
		{ id: '1', link: '/main', name: 'Home' },
		{ id: '2', link: '/skills', name: 'Skills' },
		{ id: '3', link: '/projects', name: 'Projects' },
		{ id: '4', link: '/contacts', name: 'Contact' },
		{ id: '5', link: '/about', name: 'About me' },
	]
	const location = useLocation();
	const [isActive, setIsActive] = useState(s.not_active)
	const [isMenuOpen, setIsMenuOpen] = useState('')

	const onClickMenuBurger = () => {
		isActive === s.not_active ? setIsActive(s.active) : setIsActive(s.not_active)
		isMenuOpen === '' ? setIsMenuOpen(s.menuOpen) : setIsMenuOpen('')
		onClickBurgerMenu();
	};

	const headerLinks = header.map((el, i) => {
		return (
			<li className={s.nav_item} style={{ animationDelay: `${+el.id * 0.1}s` }} key={el.id}>
				<Link
					className={location.pathname === el.link ? s.active_link : s.nav_item__link}
					to={el.link}>{el.name}</Link>
			</li>
		)
	})

	const burgerLinks = header.map((el, i) => {
		return (
			<li className={s.nav_item_burger} style={{ animationDelay: `${+el.id * 0.1}s` }} key={el.id}>
				<Link
					onClick={onClickMenuBurger}
					className={s.nav_item__burger_link}
					to={el.link}>{el.name}</Link>
			</li>
		)
	})

	return (
		<>
			<header className={s.header}>
				<div className={s.header__container}>
					<div className={s.header__content}>
						<a className={s.header__logo} href="/">
							<img className={s.header__logo_img} src={logo} alt="logo" />
						</a>
						<div className={s.menu_burger_container} onClick={onClickMenuBurger}>
							<div className={`${s.menu_burger} ${isActive}`}>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
						<nav className={s.nav_items}>
							<ul className={s.nav_items__list}>
								{headerLinks}
							</ul>
						</nav>
						<nav className={`${s.nav_burger_items} ${isMenuOpen}`}>
							<ul className={s.nav_burger_items__list}>
								{burgerLinks}
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</>
	);
};