import React, { useState } from 'react';
import s from './Home.module.scss'
import photo from '../../../img/photo.webp'

export type HomeType = {

}

export const Home = () => {

	const [isAnimationLoaded, setIsAnimationLoaded] = useState(s.animationIsLoading);
	const onAnimationEnd = () => setIsAnimationLoaded(s.animationIsLoaded);

	return (
		<>
			<section className={s.home}>
				<div className={s.home__container} >
					<div className={s.home__content}>
						<div className={s.home__text_block} >
							<h2 className={s.home__name}>Daniil Kalach</h2>
							<h1 className={s.home__profession}>Front-end Developer</h1>
							<a className={`${s.home__download_cv} ${isAnimationLoaded}`} onAnimationEnd={onAnimationEnd} href="https://meskal1.github.io/portfolio">DOWNLOAD CV</a>
						</div>
						<div className={s.container_pic}>
							<div className={s.home__pic}>
								<img className={s.home__img} src={photo} alt="MyPhoto" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
};
