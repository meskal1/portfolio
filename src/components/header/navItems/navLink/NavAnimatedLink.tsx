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
	const [pageTransition, setPageTransition] = useState<string>('');
	// Черный цвет на 0.2 сек при клике
	const [menuColorTransition, setMenuColorTransition] = useState<string>('');
	// Зануляю анимацию перехода
	setTimeout(() => {
		if (pageTransition !== '' && location !== link) {
			setPageTransition('');
			setMenuColorTransition('');
		}
	}, 600)

	const onClickLinkHandler = () => {
		if (location !== link) setPageTransition(s.pageTransition);
		if (location !== link) setMenuColorTransition(s.animationBlackColor)
	}
	// Убираю после загрузки анимации стили animation: forwards, потому что идет перекрытие ссылок волной (кругом)
	const [isAnimationLoaded, setIsAnimationLoaded] = useState(s.animationIsLoading);
	const onAnimationEnd = () => setIsAnimationLoaded(s.animationIsLoaded);

	// Добавил задержку перехода, что бы достигнуть эффекта стирания контента анимационной волной
	const navigate = useNavigate();
	const linkDelay = () => {
		setTimeout(() => {
			navigate(link)
		}, 200)
	};

	return (
		<>
			<li
				className={`${s.nav_item} ${isAnimationLoaded} ${pageTransition}`}
				onAnimationEnd={onAnimationEnd}
				style={{ animationDelay: `${+id * 0.1}s` }}
				onClick={onClickLinkHandler}>
				<a
					className={`${s.nav_item__link} ${menuColorTransition} ${location === link ? s.active_link : null}`}
					onClick={linkDelay}
				// to={link}
				>{name}
				</a>
			</li>
		</>
	);
};