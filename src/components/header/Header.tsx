import React, { useState } from 'react'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'
import { NavItems } from './navItems/NavItems'

type HeaderType = {
  mediaQueryWidth: boolean
  onClickBurgerMenu: () => void
}

const headerLinks = [
  { id: 1, link: '/home', name: 'Home' },
  { id: 2, link: '/skills', name: 'Skills' },
  { id: 3, link: '/projects', name: 'Projects' },
  { id: 4, link: '/contacts', name: 'Contact' },
  { id: 5, link: '/about', name: 'About me' },
]

export const Header: React.FC<HeaderType> = ({ onClickBurgerMenu, mediaQueryWidth }) => {
  console.log('rendered Header')
  const [isActive, setIsActive] = useState(s.not_active)
  const [isMenuOpen, setIsMenuOpen] = useState('')
  const [isImgLoaded, setIsImgLoaded] = useState(false)
  const headerLogo = new Image()
  headerLogo.src = 'https://raw.githubusercontent.com/meskal1/portfolio/9d611fe5476786ce5f3feae21cc78946988c89c1/src/img/logo.svg'

  if (!isImgLoaded) {
    headerLogo.onload = () => setIsImgLoaded(true)
  }

  // Если width больше 535px и применены стили s.active, то сбросить стили (функционал если с открытым меню повернуть в landscape (горизонт), то меню закрывается как по нажатию кнопки)
  if (isMenuOpen && !mediaQueryWidth) {
    setIsActive(s.not_active)
    setIsMenuOpen('')
  }

  const onClickMenuBurger = () => {
    isActive === s.not_active ? setIsActive(s.active) : setIsActive(s.not_active)
    isMenuOpen === '' ? setIsMenuOpen(s.menuOpen) : setIsMenuOpen('')
    onClickBurgerMenu()
  }

  const burgerLinks = headerLinks.map(el => {
    return (
      <li key={el.id} className={s.nav_item_burger} style={{ animationDelay: `${el.id * 0.1}s` }}>
        <Link onClick={onClickMenuBurger} className={s.nav_item__burger_link} to={el.link}>
          {el.name}
        </Link>
      </li>
    )
  })

  return (
    <>
      <header className={s.header}>
        <div className={s.header__container}>
          <div className={s.header__content}>
            {isImgLoaded && (
              <>
                <a className={s.header__logo} href='https://daniilkalach.com'>
                  <img className={s.header__logo_img} src={headerLogo.src} alt='logo' />
                </a>
                {mediaQueryWidth ? (
                  <>
                    <div className={s.menu_burger_container} onClick={onClickMenuBurger}>
                      <div className={`${s.menu_burger} ${isActive}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <nav className={`${s.nav_burger_items} ${isMenuOpen}`}>
                      <ul className={s.nav_burger_items__list}>{burgerLinks}</ul>
                    </nav>
                  </>
                ) : (
                  <NavItems headerLinks={headerLinks} />
                )}
              </>
            )}
          </div>
        </div>
      </header>
    </>
  )
}
