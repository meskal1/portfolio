import React from 'react'
import s from './Footer.module.scss'
import github_logo from '../../img/github_logo.svg'
import codears_logo from '../../img/codears_logo.svg'
import telegram_logo from '../../img/telegram_logo.svg'
import linkedin_logo from '../../img/linkedin_logo.svg'
import { FooterAnimate } from './footerAnimate/FooterAnimate'
import { Social } from '../../Links.enum'

type FooterType = {
  isMenuOpen: string
}

const linksSocial = [
  { id: 1, img: github_logo, address: Social.Github },
  { id: 2, img: codears_logo, address: Social.Codewars },
  { id: 3, img: telegram_logo, address: Social.Telegram },
  { id: 4, img: linkedin_logo, address: Social.Linkedin },
]

export const Footer: React.FC<FooterType> = React.memo(({ isMenuOpen }) => {
  const menuOpen = isMenuOpen !== '' ? { display: 'unset' } : {}
  const socialLinks = linksSocial.map(el => {
    return (
      <a key={el.id} className={s.footer__pic_social} href={el.address} target={el.address}>
        <img className={s.footer__social_img} src={el.img} alt={el.img + ''} />
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
              <span className={s.footer__text}>Designed and build by Daniil Kalach</span>
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
