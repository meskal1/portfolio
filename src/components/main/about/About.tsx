import React, { useCallback, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import s from './About.module.scss'
import { AboutText } from './aboutText/AboutText'
import { InvitationText } from './invitationText/InvitationText'

const aboutText = `Hi, my name is Daniil, I'm an InfoSec engineer and now a front-end developer. I like to create things that are awesome for users to interact with. As a developer, I pursuit to create simple, understandable and beautiful solutions for the web. It all started when I wanted to create my own website, which served for search of the information, compliting of relevant courses and the achievement of the goal that you are now observing. And I don't forget about sports. Now, no one can stop me. :)`

const About = () => {
  console.log('render about')
  const [isAimateButtonLoaded, setIsAimateButtonLoaded] = useState(s.animationIsLoading)
  const [canIStartAimateInvitationText, setCanIStartAimateInvitationText] = useState(false)

  const aboutTextIsShown = useCallback(() => {
    setCanIStartAimateInvitationText(true)
  }, [])

  const onAnimationEnd = () => setIsAimateButtonLoaded(s.animationIsLoaded)

  const onClickButton = () => document.querySelector('body')?.style.setProperty('overflow', 'hidden')

  return (
    <>
      <section className={s.about}>
        <div className={s.about__container}>
          <div className={s.about__content}>
            <h2 className={s.about__title}>About me</h2>
            <div className={s.about__text_container}>
              <p className={s.about__text_substrate}>{aboutText}</p>
              <AboutText textContent={aboutText} startIvivtationAnimate={aboutTextIsShown} />
            </div>
            <div className={s.about__invitation_block}>
              <InvitationText canIStartAimate={canIStartAimateInvitationText} />
              <Link
                onClick={onClickButton}
                onAnimationEnd={onAnimationEnd}
                className={`${s.about__invitation_button} ${canIStartAimateInvitationText ? isAimateButtonLoaded : ''}`}
                to='about_modal'>
                HIRE ME
              </Link>
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default About
