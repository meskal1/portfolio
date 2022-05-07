import React from 'react';
import s from './Header.module.scss'

export type HeaderType = {

}

const Header: React.FC<HeaderType> = ({ }) => {
	return (
		<>
			<header className={s.header}>
				<div className={s.header__container}>
					<div className={s.header__content}>
						<a className={s.header__logo} href="#">
							{/* <img className="header__logo_img" src="img/logo/logo.svg" alt="logo" /> */}
						</a>
						<nav className={s.nav_items}>
							<ul className={s.nav_items__list}>
								<li className={s.nav_item}><a className={s.nav_item__link} href="#">Главная</a></li>
								<li className={s.nav_item}><a className={s.nav_item__link} href="#">Скилы</a></li>
								<li className={s.nav_item}><a className={s.nav_item__link} href="#">Работы</a></li>
								<li className={s.nav_item}><a className={s.nav_item__link} href="#">Контакты</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</>
	);
};
export default React.memo(Header)