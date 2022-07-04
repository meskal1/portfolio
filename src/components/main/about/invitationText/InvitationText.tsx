import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import s from './InvitationText.module.scss'

type InvitationTextType = {
	canIStartAimateInvitationText: boolean
}

export const InvitationText: React.FC<InvitationTextType> = React.memo(({ canIStartAimateInvitationText }) => {
	console.log('render invitation');

	const [isAnimationLoaded, setIsAnimationLoaded] = useState('')
	const [autoStart, setAutoStart] = useState(false)

	if (canIStartAimateInvitationText && autoStart != true) {
		setTimeout(() => { setIsAnimationLoaded(s.animationIsLoaded) }, 1000)
		setTimeout(() => { setAutoStart(true) }, 1400)
	}

	return (
		<>
			<div className={`${s.about__invitation} ${isAnimationLoaded}`}>AVAILABLE FOR&nbsp;
				<Typewriter
					options={{
						strings: [`STARTUP`, `EXPERIMENT`, `HUGE SALARY :)`, `BEST COMPANIES`],
						autoStart: autoStart,
						loop: true,
						wrapperClassName: s.typewriter,
						cursorClassName: s.typewriterCursor,
					}}
				/>
			</div>
		</>
	);
});