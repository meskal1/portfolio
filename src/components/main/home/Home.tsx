import React from 'react'
import s from './Home.module.scss'
import photo from '../../../img/photo.webp'
import photo_safari from '../../../img/photo_safari.jpg'
import { Button } from './button/Button'
import { canIuseWEBP } from '../../../canIuse'

export const Home = () => {
  const preferedPhoto = canIuseWEBP ? photo : photo_safari

  const onButtonClickDownload = () => {
    window.open('https://drive.google.com/file/d/1UIdO0a3vqbNfsmLyLbOv8G2ha9YgLZ0s/view?usp=share_link', '_blank')
  }

  return (
    <>
      <section className={s.home}>
        <div className={s.home__container}>
          <div className={s.home__content}>
            <div className={s.home__text_block}>
              <h2 className={s.home__name}>Daniil Kalach</h2>
              <h1 className={s.home__profession}>Front-end Developer</h1>
              <Button name={'download cv'} onClick={onButtonClickDownload} />
            </div>
            <div className={s.container_pic}>
              <div className={s.home__pic}>
                <img className={s.home__img} src={preferedPhoto} alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
