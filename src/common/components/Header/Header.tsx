import { FC, useState } from 'react'

import { Link } from 'react-router-dom'

import { DemoProject } from '../../../constants/links.enum'
import { PATH } from '../../../constants/routePaths.enum'

import s from './Header.module.scss'
import { NavItems } from './NavItems/NavItems'

type HeaderType = {
  mediaQueryWidth: boolean
  onClickBurgerMenu: () => void
}

const headerLinks = [
  { id: 1, link: PATH.HOME, name: 'Home' },
  { id: 2, link: PATH.SKILLS, name: 'Skills' },
  { id: 3, link: PATH.PROJECTS, name: 'Projects' },
  { id: 4, link: PATH.CONTACTS, name: 'Contact' },
  { id: 5, link: PATH.ABOUT, name: 'About me' },
]

export const Header: FC<HeaderType> = ({ onClickBurgerMenu, mediaQueryWidth }) => {
  const [isActive, setIsActive] = useState(s.not_active)
  const [isMenuOpen, setIsMenuOpen] = useState('')
  const [isImgLoaded, setIsImgLoaded] = useState(false)
  const headerLogo = new Image()

  headerLogo.src =
    'https://raw.githubusercontent.com/meskal1/portfolio/9d611fe5476786ce5f3feae21cc78946988c89c1/src/img/logo.svg'

  if (!isImgLoaded) {
    headerLogo.onload = () => setIsImgLoaded(true)
  }

  // If the width is greater than 535px and the s.active styles are applied, then reset the styles (if it is turned to landscape with menu open, the menu closes as if button pressed)
  if (isMenuOpen && !mediaQueryWidth) {
    setIsActive(s.not_active)
    setIsMenuOpen('')
  }

  const handleClickMenu = () => {
    isActive === s.not_active ? setIsActive(s.active) : setIsActive(s.not_active)
    isMenuOpen === '' ? setIsMenuOpen(s.menuOpen) : setIsMenuOpen('')
    onClickBurgerMenu()
  }

  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <div className={s.header__content}>
          {isImgLoaded && (
            <>
              <a className={s.header__logo} href={DemoProject.Portfolio}>
                <img className={s.header__logo_img} src={headerLogo.src} alt="logo" />
              </a>
              {mediaQueryWidth ? (
                <>
                  <div className={s.menu_burger_container} onClick={handleClickMenu}>
                    <div className={`${s.menu_burger} ${isActive}`}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <nav className={`${s.nav_burger_items} ${isMenuOpen}`}>
                    <ul className={s.nav_burger_items__list}>
                      {headerLinks.map(el => {
                        return (
                          <li
                            key={el.id}
                            className={s.nav_item_burger}
                            style={{ animationDelay: `${el.id * 0.1}s` }}
                          >
                            <Link
                              onClick={handleClickMenu}
                              className={s.nav_item__burger_link}
                              to={el.link}
                            >
                              {el.name}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
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
  )
}
