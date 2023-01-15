import { useState, lazy, Suspense, useEffect, AnimationEvent } from 'react'

import { Header } from '../common/components/Header/Header'
import { AppRoutes } from '../routes/routes'

import s from './App.module.scss'

const Footer = lazy(() =>
  import('../common/components/Footer/Footer').then(module => ({ default: module.Footer }))
)

function App() {
  const [isContentDisplayed, setIsContentDisplayed] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState('')
  const [isImgLoaded, setIsImgLoaded] = useState(false)
  const [mediaQueryWidth, setMediaQueryWidth] = useState(
    window.matchMedia('(max-width: 535px)').matches
  )
  const mainLogo = new Image()

  mainLogo.src =
    'https://raw.githubusercontent.com/meskal1/portfolio/9d611fe5476786ce5f3feae21cc78946988c89c1/src/img/main_logo.svg'
  mainLogo.onload = () => setIsImgLoaded(true)

  // If the width is greater than 535px and the s.menuOpen styles are applied, then reset the styles and remove the style attribute from the body with the property overflow: hidden (functional if rotated to landscape with the menu open)
  if (!mediaQueryWidth && isMenuOpen) {
    document.body.style.overflow = 'unset'
    setIsMenuOpen('')
  }

  const handleAnimationLogoEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (/scale/.test(e.animationName)) {
      setIsContentDisplayed(true)
    }
  }

  const handleClickBurgerMenu = () => {
    if (isMenuOpen === s.menuOpen) {
      setIsMenuOpen('')
      document.body.style.overflow = 'unset'
    } else {
      setIsMenuOpen(s.menuOpen)
      document.body.style.overflow = 'hidden'
    }
  }

  useEffect(() => {
    const widthWatcher = window.matchMedia('(max-width: 535px)')

    const updateMediaQueryValue = () => setMediaQueryWidth(widthWatcher.matches)

    widthWatcher.addEventListener('change', updateMediaQueryValue)

    return () => widthWatcher.removeEventListener('change', updateMediaQueryValue)
  }, [])

  return (
    <div className={`${s.wrapper} ${isMenuOpen}`} id="wrapper">
      {isContentDisplayed && (
        <div className={s.content}>
          <Header onClickBurgerMenu={handleClickBurgerMenu} mediaQueryWidth={mediaQueryWidth} />
          <main className={s.main}>
            <AppRoutes />
          </main>
          <Suspense fallback={null}>
            <Footer isMenuOpen={isMenuOpen} />
          </Suspense>
        </div>
      )}
      {isImgLoaded && (
        <div className={s.logo_container} onAnimationEnd={handleAnimationLogoEnd}>
          <img className={s.logo} src={mainLogo.src} alt="" />
          <div className={s.waveContainer}>
            <div className={s.wave}>
              <div className={s.waveSubBlock1}></div>
              <div className={s.waveSubBlock2}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default App
