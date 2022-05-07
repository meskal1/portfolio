import React from 'react';
import s from './Footer.module.scss'

export type FooterType = {

}

const Footer: React.FC<FooterType> = ({ }) => {
	return (
		<>
			<footer className={s.footer}>
				<div className={s.footer__container}>
					<div className={s.footer__content}>
						<h2 className={s.footer__title}>Даниил К</h2>
						<div className={s.footer__block_social}>
							<a className={s.footer__pic_social} href="#" target="_blank">
								<img className={s.footer__social_img} src="@img" alt="" />
							</a>
							<a className={s.footer__pic_social} href="#" target="_blank">
								<img className={s.footer__social_img} src="@img" alt="" />
							</a>
							<a className={s.footer__pic_social} href="#" target="_blank">
								<img className={s.footer__social_img} src="@img" alt="" />
							</a>
							<a className={s.footer__pic_social} href="#" target="_blank">
								<img className={s.footer__social_img} src="@img" alt="" />
							</a>
						</div>
						<p className={s.footer__copyrights}>@2022 Все права защищены</p>
					</div>
				</div>
			</footer>
		</>
	);
};
export default React.memo(Footer)