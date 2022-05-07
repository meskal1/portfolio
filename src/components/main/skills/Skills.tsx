import React from 'react';
import s from './Skills.module.scss'
import SkillsItem from './skillsItem/SkillsItem';

export type SkillsType = {

}

const Skills: React.FC<SkillsType> = ({ }) => {
	return (
		<>
			<section className={s.skills}>
				<div className={s.skills__container}>
					<div className={s.skills__content}>
						<h2 className={s.my_skills__title}>Мои скилы</h2>
						<div className={s.my_skills__block_items}>
							<SkillsItem />
							<SkillsItem />
							<SkillsItem />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default React.memo(Skills)