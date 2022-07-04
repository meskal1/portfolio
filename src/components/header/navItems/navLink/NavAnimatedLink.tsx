import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import s from './NavAnimatedLink.module.scss'

export type NavAnimatedLinkType = {
	id: string
	link: string
	name: string
	location: string
}

export const NavAnimatedLink: React.FC<NavAnimatedLinkType> = ({ id, link, name, location }) => {
	console.log('render nav link');
	// Увеличивающийся круг при клике 
	const [pageTransition, setPageTransition] = useState('');
	// Черный цвет на 0.2 сек при клике
	const [menuColorTransition, setMenuColorTransition] = useState('');
	// Зануляю анимацию перехода
	if (pageTransition !== '' && location !== link) {
		setPageTransition('');
		setMenuColorTransition('');
	}


	// const [activeLink, setActiveLink] = useState('')
	const onClickLinkHandler = () => {
		// setActiveLink(s.active_link)
		if (location !== link) setPageTransition(s.pageTransition);
		if (location !== link) setMenuColorTransition(s.animationBlackColor)
	}
	// Убираю после загрузки анимации стили animation: forwards, потому что идет перекрытие ссылок увелич круга
	const [isAnimationLoaded, setIsAnimationLoaded] = useState(s.animationIsLoading);
	const onAnimationEnd = () => setIsAnimationLoaded(s.animationIsLoaded);

	const navigate = useNavigate();
	const linkDelay = () => {
		setTimeout(() => {
			// navigate(link)
		}, 500)
	};

	return (
		<>
			<li
				className={`${s.nav_item} ${isAnimationLoaded} ${pageTransition}`}
				onAnimationEnd={onAnimationEnd}
				style={{ animationDelay: `${+id * 0.1}s` }}
				onClick={onClickLinkHandler}>
				<Link
					// className={`${s.nav_item__link} ${menuColorTransition} ${activeLink}`}
					className={`${s.nav_item__link} ${menuColorTransition} ${location === link ? s.active_link : null}`}
					onClick={linkDelay}
					to={link}
				>{name}
				</Link>
			</li>
		</>
	);
};