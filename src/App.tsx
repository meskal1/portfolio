import React, { useState, lazy, Suspense, useEffect, AnimationEvent } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import s from './App.module.scss'
import { Header } from './components/header/Header'
import { AboutModal } from './components/main/about/aboutModal/AboutModal'
import { Page404 } from './components/main/page404/Page404'
import { PATH } from './RoutePaths.enum'

const Home = lazy(() => import('./components/main/home/Home').then(module => ({ default: module.Home })))
const Skills = lazy(() => import('./components/main/skills/Skills').then(module => ({ default: module.Skills })))
const Projects = lazy(() => import('./components/main/projects/Projects').then(module => ({ default: module.Projects })))
const Contact = lazy(() => import('./components/main/contact/Contact').then(module => ({ default: module.Contact })))
const About = lazy(() => import('./components/main/about/About').then(module => ({ default: module.About })))
const Footer = lazy(() => import('./components/footer/Footer').then(module => ({ default: module.Footer })))

function App() {
  const [isContentDisplayed, setIsContentDisplayed] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState('')
  const [mediaQueryWidth, setMediaQueryWidth] = useState(window.matchMedia('(max-width: 535px)').matches)
  const [isImgLoaded, setIsImgLoaded] = useState(false)
  const mainLogo = new Image()
  mainLogo.src = 'https://raw.githubusercontent.com/meskal1/portfolio/9d611fe5476786ce5f3feae21cc78946988c89c1/src/img/main_logo.svg'
  mainLogo.onload = () => setIsImgLoaded(true)

  // Если width больше 535px и применены стили s.menuOpen, то сбросить стили и удалить атрибут style у body со свойством overflow: hidden (функционал если с открытым меню повернуть в landscape (горизонт))
  if (!mediaQueryWidth && isMenuOpen) {
    document.body.style.overflow = 'unset'
    setIsMenuOpen('')
  }

  const onAnimationLogoEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (/scale/.test(e.animationName)) {
      setIsContentDisplayed(true)
    }
  }

  const onClickBurgerMenu = () => {
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
    <>
      <div className={`${s.wrapper} ${isMenuOpen}`} id='wrapper'>
        {isContentDisplayed ? (
          <div className={s.content}>
            <Header onClickBurgerMenu={onClickBurgerMenu} mediaQueryWidth={mediaQueryWidth} />
            <main className={s.main}>
              <Suspense fallback={null}>
                <Routes>
                  <Route path='/' element={<Navigate to={PATH.HOME} replace />} />
                  <Route path={PATH.HOME} element={<Home />} />
                  <Route path={PATH.SKILLS} element={<Skills />} />
                  <Route path={PATH.PROJECTS} element={<Projects />} />
                  <Route path={PATH.CONTACTS} element={<Contact />} />
                  <Route path={PATH.ABOUT} element={<About />}>
                    <Route path={PATH.ABOUT_MODAL} element={<AboutModal />} />
                  </Route>
                  <Route path='*' element={<Page404 />} />
                </Routes>
              </Suspense>
            </main>
            <Suspense fallback={null}>
              <Footer isMenuOpen={isMenuOpen} />
            </Suspense>
          </div>
        ) : isImgLoaded ? (
          <div className={s.logo_container} onAnimationEnd={onAnimationLogoEnd}>
            <img className={s.logo} src={mainLogo.src} alt='' />
            <div className={s.waveContainer}>
              <div className={s.wave}>
                <div className={s.waveSubBlock1}></div>
                <div className={s.waveSubBlock2}></div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  )
}
export default App
