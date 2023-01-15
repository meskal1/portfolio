import { FC, memo } from 'react'

import { Social } from '../../../constants/links.enum'

import s from './Footer.module.scss'
import { FooterAnimation } from './FooterAnimation/FooterAnimation'

type FooterType = {
  isMenuOpen: string
}

const linksSocial = [
  { id: 1, address: Social.Github },
  { id: 2, address: Social.Codewars },
  { id: 3, address: Social.Telegram },
  { id: 4, address: Social.Linkedin },
]

export const Footer: FC<FooterType> = memo(({ isMenuOpen }) => {
  const menuOpen = isMenuOpen !== '' ? { display: 'unset' } : {}

  return (
    <footer className={s.footer} style={menuOpen}>
      <div className={s.footer__container}>
        <div className={s.footer__content}>
          <div className={s.footer__block_social}>
            {linksSocial.map(el => {
              return (
                <a
                  key={el.id}
                  className={s.footer__pic_social}
                  href={el.address}
                  target={el.address}
                ></a>
              )
            })}
          </div>
          <div className={s.footer__copyrights}>
            <span className={s.footer__text}>Designed and build by Daniil Kalach</span>
            <div className={s.footer__copyrights_second_line}>
              &nbsp;with
              <FooterAnimation />
              <p className={s.year_container}>2022</p>
              <p className={s.copyright}>&#169;</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
})
