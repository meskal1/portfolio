import React, { useEffect, useState } from 'react';
import react_logo from '../../../img/react_logo.svg'
import heart_logo from '../../../img/heart_logo_white.svg'
import s from './FooterAnimate.module.scss'

export type FooterAnimateType = {

}

export const FooterAnimate: React.FC<FooterAnimateType> = ({ }) => {
	const [heart, setHeart] = useState([21, 1]) //50 21 -7 
	const [react, setReact] = useState([-16, 0])//-16 -44 -73
	const [and1, setAnd1] = useState([26, 0])// 26 0 -25
	const [and2, setAnd2] = useState([4, 0])//4 -22 -48
	useEffect(() => {
		const interval = setInterval(() => {
			if (heart[0] === 21) {
				setHeart([-7, 0])
				setAnd1([0, 1])
				setReact([-16, 0])
				setAnd2([4, 0])
			}
			else if (heart[0] === -7) {
				setHeart([50, 0])
				setAnd1([-25, 0])
				setReact([-44, 1])
				setAnd2([4, 0])
			}
			else if (and1[0] === -25) {
				setAnd2([-22, 1])
				setReact([-73, 0])
				setHeart([50, 0])
				setAnd1([26, 0])
			}
			else if (and2[0] === -22) {
				setReact([-73, 0])
				setAnd1([26, 0])
				setHeart([21, 1])
				setAnd2([-48, 0])
			}
		}, 1200)
		return () => { clearInterval(interval) }
	}, [heart, react, and1, and2])

	return (
		<>
			<div className={s.rotate_copyrights_container}>
				<a className={s.heart_container} style={{ transform: `translate(0,${heart[0]}px)`, opacity: `${heart[1]}` }}> <img className={s.heart_logo} src={heart_logo} alt="react_logo" /></a>
				<a className={s.and1_container} style={{ transform: `translate(0,${and1[0]}px)`, opacity: `${and1[1]}` }}> &amp;&amp;</a>
				<a className={s.and2_container} style={{ transform: `translate(0,${and2[0]}px)`, opacity: `${and2[1]}` }}> &amp;&amp;</a>
				<a className={s.react_logo_container} style={{ transform: `translate(0,${react[0]}px)`, opacity: `${react[1]}` }}> <img className={s.react_logo} src={react_logo} alt="react_logo" /></a>
			</div>
		</>
	);
};