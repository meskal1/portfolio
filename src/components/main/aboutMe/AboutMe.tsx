import React from 'react';
import s from './AboutMe.module.scss'

export type AboutMeType = {

}

const AboutMe: React.FC<AboutMeType> = ({ }) => {
	return (
		<>
			<section className={s.about_me}>
				<div className={s.about_me__container}>
					<div className={s.about_me__content}>
						<div className={s.about_me__text_block}>
							<p className={s.about_me__hello}>Привет!</p>
							<h1 className={s.about_me__name}>My name is Daniil</h1>
							<p className={s.about_me__i_am}>I`m a super pro frontender)</p>
						</div>
						<div className={s.about_me__pic}>
							<img className={s.about_me__img} src="https://sun9-84.userapi.com/impf/ANhdEutc5pdsfUlx7VWv6J1vPnHi77eWNuEaPA/gUwhKQlbmRc.jpg?size=1080x720&quality=96&sign=0b4e530537e15758f48f055740755b19&type=album" alt="" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default React.memo(AboutMe)