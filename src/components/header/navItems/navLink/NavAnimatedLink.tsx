import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './NavAnimatedLink.module.scss'

export type NavAnimatedLinkType = {
	id: string
	link: string
	name: string
	location: string
}

export const NavAnimatedLink: React.FC<NavAnimatedLinkType> = ({ id, link, name, location }) => {

	const [pageTransition, setPageTransition] = useState('');
	if (pageTransition !== '' && location !== link) setPageTransition('');
	const onClickLinkHandler = () => setPageTransition(s.pageTransition);

	const [isAnimationLoaded, setIsAnimationLoaded] = useState(s.animationIsLoading);
	const onAnimationEnd = () => setIsAnimationLoaded(s.animationIsLoaded);

	return (
		<>
			<li
				className={`${s.nav_item} ${isAnimationLoaded} ${pageTransition}`}
				onAnimationEnd={onAnimationEnd}
				style={{ animationDelay: `${+id * 0.1}s` }}
				onClick={onClickLinkHandler}>
				<Link
					className={`${s.nav_item__link} ${location === link ? s.active_link : null}`}
					to={link}>{name}
				</Link>
			</li>
		</>
	);
};