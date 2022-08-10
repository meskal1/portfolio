import React, { useState } from 'react';
import s from './Skills.module.scss'
import Lottie from 'react-lottie';
import * as animationData from '../../../lottie/skills.json'
// import lottieJson from '../../../lottie/skills.json'
// import lottieJson from '../../../lottie/animateGUY4.json'
import SkillsItem from './skillsItem/SkillsItem';
// import lottie from 'lottie-web'
// import Lottiew from 'react-lottie-player'

type SkillsType = {

}

export const Skills: React.FC<SkillsType> = React.memo(({ }) => {
	const defaultOptions = {
		loop: false,
		autoplay: false, //Если установлено значение true, анимация будет воспроизводиться сразу после загрузки.
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
			// className: `${s.lottie2}`,
			viewBoxOnly: true //если true, не будет добавлять свойства ширины, высоты и преобразования к корневому элементу
		}
	};
	const [isAvatarPaused, setIsAvatarPaused] = useState<boolean>(true)
	const onTitleAnimationEnd = () => setIsAvatarPaused(false)

	return (
		<>
			<section className={s.skills} >
				<div className={s.skills__container} >
					<div className={s.skills__content} >
						<h2 className={s.skills__title} onAnimationEnd={onTitleAnimationEnd}>Skills</h2>
						<div className={s.skills__block_items}>
							<div><p className={s.skills__item} style={{}}>React</p></div>
							<div><p className={s.skills__item} style={{}}>Redux</p></div>
							<div><p className={s.skills__item} >JavaScript</p></div>
							<div><p className={s.skills__item}>TypeScript</p></div>
							<div><p className={s.skills__item}>Rest API</p></div>
							<div><p className={s.skills__item}>Axios</p></div>
							<div><p className={s.skills__item}>Unit Tests</p></div>
							<div><p className={s.skills__item}>SnapShot</p></div>
							<div><p className={s.skills__item}>StoryBook</p></div>
							<div><p className={s.skills__item}>Git</p></div>
							<div><p className={s.skills__item}>After Effects</p></div>
							<div><p className={s.skills__item}>Illustrator</p></div>
							<div><p className={s.skills__item}>SASS</p></div>
							<div><p className={s.skills__item}>CSS</p></div>
							<div><p className={s.skills__item}>HTML</p></div>
							{/* <p className={`${s.skills__item} ${s.skills__absolute}`}>Handsome</p>
							<p className={`${s.skills__item} ${s.skills__absolute}`}>Awesome</p>
							<p className={`${s.skills__item} ${s.skills__absolute}`}>Curious</p> */}
							{/* <SkillsItem />
							<SkillsItem />
							<SkillsItem /> */}
						</div>
						<div className={s.avatar}>
							<Lottie
								options={defaultOptions}
								// resizeMode={cover}
								// isStopped={false}
								// isClickToPauseDisabled={true} // Отключает поведение при котором при клике на анимацию она становиться на паузу
								isPaused={isAvatarPaused} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
});