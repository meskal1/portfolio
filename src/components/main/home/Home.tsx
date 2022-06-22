import React from 'react';
import s from './Home.module.scss'
import photo from '../../../img/photo.webp'
export type HomeType = {

}

export const Home: React.FC<HomeType> = ({ }) => {
	return (
		<>
			<section className={s.about_me}>
				<div className={s.about_me__container} >
					<div className={s.about_me__content}>
						<div className={s.about_me__text_block} >
							<h1 className={s.about_me__name}>Daniil Kalach</h1>
							<h3 className={s.about_me__who_i_am}>Front-end Developer</h3>
							<a className={s.about_me__button} href="#" >DOWNLOAD CV</a>
						</div>
						<div className={s.container_pic}>
							<div className={s.about_me__pic}>
								<img className={s.about_me__img} src={photo} alt="Photo" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
};
