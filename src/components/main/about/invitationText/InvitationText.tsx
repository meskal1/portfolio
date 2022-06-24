import React, { useState } from 'react';
import s from './InvitationText.module.scss'

type InvitationTextType = {
	canIStartAimate: boolean
}

export const InvitationText: React.FC<InvitationTextType> = ({ canIStartAimate }) => {
	const invitationText = `LANCE`.split(``);
	let [counter, setCounter] = useState(0);
	let [typedInvitation, setTypedInvitation] = useState(['']);
	let [showInvitation, setShowInvitation] = useState('');

	if (canIStartAimate) typewriter();

	function typewriter() {
		setTimeout(() => {
			if (showInvitation.length < invitationText.length) {
				setTypedInvitation(typedInvitation.concat(invitationText[counter]));
				setShowInvitation(typedInvitation.join(``));
				setCounter(counter + 1);
			}
		}, 300)
	}

	return (
		<>
			<p className={s.about__invitation}>AVAILABLE FOR FREE{showInvitation}</p>
		</>
	);
}