import React from 'react';
import s from './Footer.module.scss'
import telegram_logo from '../../img/telegram_logo.svg'
import github_logo from '../../img/github_logo.svg'
import codears_logo from '../../img/codears_logo.svg'
import { FooterAnimate } from './footerAnimate/FooterAnimate';

export type FooterType = {
	isMenuOpen: string
}
//TODO Сделать переходы по страницам сверху вних опускается шторка или слайдер страниц или анимирование взад и анимированноепоявление новой страницы, увеличивающийся круг закрывающий быстро контент и анимирутеся новый 

export const Footer: React.FC<FooterType> = ({ isMenuOpen }) => {

	const menuOpen = isMenuOpen !== '' ? { display: 'unset' } : {};

	return (
		<>
			<footer className={s.footer} style={menuOpen}>
				<div className={s.footer__container}>
					<div className={s.footer__content}>
						<div className={s.footer__block_social}>
							<a className={s.footer__pic_social} href="https://github.com/meskal1" target="https://github.com/meskal1">
								<img className={s.footer__social_img} src={github_logo} alt="github_logo" />
							</a>
							<a className={s.footer__pic_social} href="https://www.codewars.com/users/meskal1" target="https://www.codewars.com/users/meskal1">
								<img className={s.footer__social_img} src={codears_logo} alt="codears_logo" />
							</a>
							<a className={s.footer__pic_social} href="https://t.me/DaniilKalach" target="https://t.me/DaniilKalach">
								<img className={s.footer__social_img} src={telegram_logo} alt="telegram_logo" />
							</a>
						</div>
						<div className={s.footer__copyrights}>Designed and build by Daniil Kalach
							<div className={s.footer__copyrights_second_line}>&nbsp;with
								<FooterAnimate />
								<p className={s.year_container}>2022</p>
								<a className={s.copyright}>&#169;</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

// let [mediaQueryWidth, setMediaQueryWidth] = useState<boolean>(false);
// useEffect(() => {
// 	const widthWatcher = window.matchMedia("(max-width: 377px)")
// 	setMediaQueryWidth(widthWatcher.matches);

// 	function updateMediaQueryValue() {
// 		setMediaQueryWidth(widthWatcher.matches)
// 	}
// 	widthWatcher.addEventListener('change', updateMediaQueryValue)

// 	return function cleanup() {
// 		widthWatcher.removeEventListener('change', updateMediaQueryValue)
// 	}
// }, [])