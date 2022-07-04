import React from 'react';
import s from './Skills.module.scss'
import SkillsItem from './skillsItem/SkillsItem';

export type SkillsType = {

}

const Skills: React.FC<SkillsType> = ({ }) => {
	return (
		<>
			<section className={s.skills} >
				<div className={s.skills__container} >
					<div className={s.skills__content} >
						<h2 className={s.skills__title} >Skills</h2>
						{/* <div className={s.skills__block_items}>
							<SkillsItem />
							<SkillsItem />
							<SkillsItem />
						</div> */}
					</div>
				</div>
				{/* <div id="projects" style={{ marginBottom: "70px" }}></div> */}
			</section>
		</>
	);
};
export default React.memo(Skills)