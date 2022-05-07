import React from 'react';
import s from './SkillsItem.module.scss'

export type SkillsItemType = {

}

const SkillsItem: React.FC<SkillsItemType> = ({ }) => {
	return (
		<>
			<div className={s.my_skills__item}>
				<div className={s.my_skills__item_pic}>
					<img className={s.my_skills__item_img} src="@img" alt="" />
				</div>
				<h3 className={s.my_skills__item_title}>React</h3>
				<p className={s.my_skills__item_text}>Подробное описание</p>
			</div>
		</>
	);
};
export default React.memo(SkillsItem)