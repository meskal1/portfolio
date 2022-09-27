import React from 'react'
import s from './Home.module.scss'
import photo from '../../../img/photo.webp'
import { Button } from './button/Button'

const Home = () => {
  console.log('render Home')
  const onButtonClickDownload = () => {
    //  window.location.href = 'https://download.cdn.viber.com/desktop/windows/ViberSetup.exe'
  }

  return (
    <>
      <section className={s.home}>
        <div className={s.home__container}>
          <div className={s.home__content}>
            <div className={s.home__text_block}>
              <h2 className={s.home__name}>Daniil Kalach</h2>
              <h1 className={s.home__profession}>Front-end Developer</h1>
              <Button name={'DOWNLOAD CV'} onClick={onButtonClickDownload} />
            </div>
            <div className={s.container_pic}>
              <div className={s.home__pic}>
                <img className={s.home__img} src={photo} alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home
