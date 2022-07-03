import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import s from './InvitationText.module.scss'

type InvitationTextType = {
	canIStartAimate: boolean
}

export const InvitationText: React.FC<InvitationTextType> = React.memo(({ canIStartAimate }) => {
	console.log('render invitation');

	const [autoStart, setAutoStart] = useState(false)
	if (canIStartAimate && autoStart != true) setAutoStart(true)

	return (
		<>
			<div className={s.about__invitation}>AVAILABLE FOR&nbsp;<Typewriter
				options={{
					strings: [`STARTUP`, `EXPERIMENT`, `HUGE SALARY :)`, `BEST COMPANIES`],
					autoStart: autoStart,
					loop: true,
					wrapperClassName: s.typewriter,
					cursorClassName: s.typewriterCursor,
				}}
			/></div>
		</>
	);
});