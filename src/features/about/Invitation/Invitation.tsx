import { FC, memo, useState } from 'react'

import Typewriter from 'typewriter-effect'

import s from '../Invitation/Invitation.module.scss'

type InvitationTextType = {
  canIStartAimate: boolean
}

export const InvitationText: FC<InvitationTextType> = memo(({ canIStartAimate }) => {
  const [isAnimationLoaded, setIsAnimationLoaded] = useState('')
  const [autoStart, setAutoStart] = useState(false)

  if (canIStartAimate && autoStart !== true) {
    setTimeout(() => {
      setIsAnimationLoaded(s.animationIsLoaded)
    }, 1000)

    setTimeout(() => {
      setAutoStart(true)
    }, 1400)
  }

  return (
    <div className={`${s.about__invitation} ${isAnimationLoaded}`}>
      available for&nbsp;
      <Typewriter
        options={{
          strings: [`startup`, `experiment`, `huge salary :)`, `best companies`],
          autoStart: autoStart,
          loop: true,
          wrapperClassName: s.typewriter,
          cursorClassName: s.typewriterCursor,
        }}
      />
    </div>
  )
})
