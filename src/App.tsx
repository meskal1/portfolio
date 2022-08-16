import React, { useEffect, useState } from 'react'
import s from './App.module.scss'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Home } from './components/main/home/Home'
import { Contact } from './components/main/contact/Contact'
import { About } from './components/main/about/About'
import { Projects } from './components/main/projects/Projects'
import { Skills } from './components/main/skills/Skills'
import logo from './img/transparent_logo.svg'
import { Route, Routes, Navigate } from 'react-router-dom'

import animationData from './lottie/skills.json' //
// import animationData from './lottie/9ZxqWN9nht.json' //
// import animationDataa from './components/main/skills/Skills.module' // ЛИБО асинк аваит либо хз
const animationSkills = animationData

function App() {
  // Отображается лого, потом меняется стиль для всего контента с display: none на display: flex
  const [contentDisplayedStyle, setContentDisplayedStyle] = useState<string>(s.displayContentNone)
  //   const onAnimationLogoEnd = () => {} //  setContentDisplayedStyle(s.content)
  setTimeout(() => {
    setContentDisplayedStyle(s.content)
  }, 3290)
  const isContentDisplayed = contentDisplayedStyle === s.content

  const [isMenuOpen, setIsMenuOpen] = useState<string>('')
  // При нажатии на бургер добавляется/убирается атрибут style у body со свойством overflow: hidden.
  // Добавляются/убираются стили отображения бургера.
  const onClickBurgerMenu = () => {
    if (isMenuOpen === s.menuOpen) {
      setIsMenuOpen('')
      document.querySelector('body')?.removeAttribute('style')
    } else {
      setIsMenuOpen(s.menuOpen)
      document.querySelector('body')?.style.setProperty('overflow', 'hidden')
    }
  }

  const [mediaQueryWidth, setMediaQueryWidth] = useState<boolean>(false)
  // Если width больше 535px и применены стили s.menuOpen, то сбросить стили и удалить атрибут style у body со свойством overflow: hidden (функционал если с открытым меню повернуть в landscape (горизонт))
  if (!mediaQueryWidth && isMenuOpen) {
    document.querySelector('body')?.removeAttribute('style')
    setIsMenuOpen('')
  }
  useEffect(() => {
    const widthWatcher = window.matchMedia('(max-width: 535px)')
    setMediaQueryWidth(widthWatcher.matches)

    const updateMediaQueryValue = () => setMediaQueryWidth(widthWatcher.matches)
    widthWatcher.addEventListener('change', updateMediaQueryValue)

    return () => widthWatcher.removeEventListener('change', updateMediaQueryValue)
  }, [])

  return (
    <>
      <div className={`${s.wrapper} ${isMenuOpen}`} id='wrapper'>
        <div className={s.logo_animated_container}>
          <div className={s.logo2}>
            <img className={s.logo1} src={logo} alt='logo2' />
          </div>
          <div className={s.wave_container}>
            <div className={s.wave}></div>
          </div>
        </div>
        {isContentDisplayed && (
          <div className={contentDisplayedStyle}>
            <Header onClickBurgerMenu={onClickBurgerMenu} mediaQueryWidth={mediaQueryWidth} />
            <main className={s.main}>
              <Routes>
                <Route path='/' element={<Navigate to='/home' />} />
                <Route path='home' element={<Home />} />
                <Route path='skills' element={<Skills animationSkills={animationSkills} />} />
                <Route path='projects' element={<Projects />} />
                <Route path='contacts' element={<Contact />} />
                <Route path='about' element={<About />} />
              </Routes>
            </main>
            <Footer isMenuOpen={isMenuOpen} />
          </div>
        )}
      </div>
    </>
  )
}
export default App
