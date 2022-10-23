import React, { useState, lazy, Suspense, useEffect, AnimationEvent } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import s from './App.module.scss'
import { Header } from './components/header/Header'
import AboutModal from './components/main/about/aboutModal/AboutModal'

const Home = lazy(() => import('./components/main/home/Home')) //.then(module => ({ default: module.Home }))
const Skills = lazy(() => import('./components/main/skills/Skills'))
const Projects = lazy(() => import('./components/main/projects/Projects'))
const Contact = lazy(() => import('./components/main/contact/Contact'))
const About = lazy(() => import('./components/main/about/About'))
const Footer = lazy(() => import('./components/footer/Footer'))

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
    document.querySelector('body')?.removeAttribute('style')
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
      document.querySelector('body')?.removeAttribute('style')
    } else {
      setIsMenuOpen(s.menuOpen)
      document.querySelector('body')?.style.setProperty('overflow', 'hidden')
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
                  <Route path='/' element={<Navigate to='/home' replace />} />
                  <Route path='home' element={<Home />} />
                  <Route path='skills' element={<Skills />} />
                  <Route path='projects' element={<Projects />} />
                  <Route path='contacts' element={<Contact />} />
                  <Route path='about' element={<About />}>
                    <Route path='about_modal' element={<AboutModal />} />
                  </Route>
                  <Route path='*' element={<p>There's nothing here!</p>} />
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
