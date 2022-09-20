import React from 'react'
import s from './Footer.module.scss'
import github_logo from '../../img/github_logo.svg'
import codears_logo from '../../img/codears_logo.svg'
import telegram_logo from '../../img/telegram_logo.svg'
import linkedin_logo from '../../img/linkedin_logo.svg'
import { FooterAnimate } from './footerAnimate/FooterAnimate'

type FooterType = {
  isMenuOpen: string
}

const linksSocial = [
  { id: 1, name: github_logo, address: 'https://github.com/meskal1' },
  { id: 2, name: codears_logo, address: 'https://www.codewars.com/users/meskal1' },
  { id: 3, name: telegram_logo, address: 'https://t.me/DaniilKalach' },
  { id: 4, name: linkedin_logo, address: 'https://www.linkedin.com/in/daniilkalach/' },
]

const Footer: React.FC<FooterType> = React.memo(({ isMenuOpen }) => {
  console.log('rendered Footer')
  const menuOpen = isMenuOpen !== '' ? { display: 'unset' } : {}
  const socialLinks = linksSocial.map(el => {
    return (
      <a key={el.id} className={s.footer__pic_social} href={el.address} target={el.address}>
        <img className={s.footer__social_img} src={el.name} alt={el.name + ''} />
      </a>
    )
  })

  return (
    <>
      <footer className={s.footer} style={menuOpen}>
        <div className={s.footer__container}>
          <div className={s.footer__content}>
            <div className={s.footer__block_social}>{socialLinks}</div>
            <div className={s.footer__copyrights}>
              Designed and build by Daniil Kalach
              <div className={s.footer__copyrights_second_line}>
                &nbsp;with
                <FooterAnimate />
                <p className={s.year_container}>2022</p>
                <p className={s.copyright}>&#169;</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
})
export default Footer
