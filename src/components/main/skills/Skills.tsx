import React from 'react';
import s from './Skills.module.scss'
import SkillsItem from './skillsItem/SkillsItem';

type SkillsType = {

}

export const Skills: React.FC<SkillsType> = React.memo(({ }) => {
	return (
		<>
			<section className={s.skills} >
				<div className={s.skills__container} >
					<div className={s.skills__content} >
						<h2 className={s.skills__title} >Skills</h2>
						<div className={s.skills__block_items}>
							<p className={s.skills__item}>React</p>
							<p className={s.skills__item}>Redux</p>
							<p className={s.skills__item}>JavaScript</p>
							<p className={s.skills__item}>TypeScript</p>
							<p className={s.skills__item}>Rest API</p>
							<p className={s.skills__item}>Axios</p>
							<p className={s.skills__item}>Unit Tests</p>
							<p className={s.skills__item}>SnapShot</p>
							<p className={s.skills__item}>StoryBook</p>
							<p className={s.skills__item}>Git</p>
							<p className={s.skills__item}>After Effects</p>
							<p className={s.skills__item}>SASS</p>
							<p className={s.skills__item}>HTML</p>
							<p className={s.skills__item}>CSS</p>
							{/* <p className={`${s.skills__item} ${s.skills__absolute}`}>Handsome</p>
							<p className={`${s.skills__item} ${s.skills__absolute}`}>Awesome</p>
							<p className={`${s.skills__item} ${s.skills__absolute}`}>Curious</p> */}
							{/* <SkillsItem />
							<SkillsItem />
							<SkillsItem /> */}
						</div>
					</div>
				</div>
				{/* <div id="projects" style={{ marginBottom: "70px" }}></div> */}
			</section>
		</>
	);
});