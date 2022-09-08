import React, { useEffect, useState, lazy, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Lottie } from '@crello/react-lottie'
import animationData from './lottie/wave_logo.json'
import s from './App.module.scss'
import logo from './img/main_logo.svg'
import { Header } from './components/header/Header'
// import Lottie from 'lottie-web/build/player/lottie_light'

const Home = lazy(() => import('./components/main/home/Home')) //.then(module => ({ default: module.Home }))
const Skills = lazy(() => import('./components/main/skills/Skills'))
const Projects = lazy(() => import('./components/main/projects/Projects'))
const Contact = lazy(() => import('./components/main/contact/Contact'))
const About = lazy(() => import('./components/main/about/About'))
const Footer = lazy(() => import('./components/footer/Footer'))

const lottieOptions = {
  loop: true,
  autoplay: true, //Если установлено значение true, анимация будет воспроизводиться сразу после загрузки.
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
    className: `${s.lottie_wave}`,
    progressiveLoad: true, //будет загружать анимацию постепенно, пока требуются слои
    viewBoxOnly: true, //если true, не будет добавлять свойства ширины, высоты и преобразования к корневому элементу
  },
}

function App() {
  //   console.log('render APP')
  //TODO Сделать onAnimationLogoEnd setIsContentDisplayed(true)
  const [isContentDisplayed, setIsContentDisplayed] = useState<boolean>(false)
  //   const onAnimationLogoEnd = () => {} //  setIsContentDisplayed(true)
  //TODO

  // При нажатии на бургер добавляется/убирается атрибут style у body со свойством overflow: hidden. Добавляются/убираются стили отображения бургера.
  const [isMenuOpen, setIsMenuOpen] = useState<string>('')
  const onClickBurgerMenu = () => {
    if (isMenuOpen === s.menuOpen) {
      setIsMenuOpen('')
      document.querySelector('body')?.removeAttribute('style')
    } else {
      setIsMenuOpen(s.menuOpen)
      document.querySelector('body')?.style.setProperty('overflow', 'hidden')
    }
  }

  // Если width больше 535px и применены стили s.menuOpen, то сбросить стили и удалить атрибут style у body со свойством overflow: hidden (функционал если с открытым меню повернуть в landscape (горизонт))
  const [mediaQueryWidth, setMediaQueryWidth] = useState<boolean>(window.matchMedia('(max-width: 535px)').matches)
  if (!mediaQueryWidth && isMenuOpen) {
    document.querySelector('body')?.removeAttribute('style')
    setIsMenuOpen('')
  }

  useEffect(() => {
    const showContent = setTimeout(() => {
      setIsContentDisplayed(true)
    }, 3290)

    const widthWatcher = window.matchMedia('(max-width: 535px)')
    const updateMediaQueryValue = () => setMediaQueryWidth(widthWatcher.matches)
    widthWatcher.addEventListener('change', updateMediaQueryValue)

    return () => {
      widthWatcher.removeEventListener('change', updateMediaQueryValue)
      clearTimeout(showContent)
    }
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
                  <Route path='/' element={<Navigate to='/home' />} />
                  <Route path='home' element={<Home />} />
                  <Route path='skills' element={<Skills />} />
                  <Route path='projects' element={<Projects />} />
                  <Route path='contacts' element={<Contact />} />
                  <Route path='about' element={<About />} />
                </Routes>
              </Suspense>
            </main>
            <Suspense fallback={null}>
              <Footer isMenuOpen={isMenuOpen} />
            </Suspense>
          </div>
        ) : (
          <div className={s.main_logo}>
            <div className={s.logo_container}>
              <img className={s.logo} src={logo} alt='logo2' />
              <Lottie config={lottieOptions} />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
export default App
