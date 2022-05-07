import React from 'react';
import s from './ProjectsItem.module.scss'

export type ProjectsItemType = {

}

const ProjectsItem: React.FC<ProjectsItemType> = ({ }) => {
	return (
		<>
			<div className={s.project_item}>
				<div className={s.project_item__link_bg}>
					<a className={s.project_item__link} href="#" target="_blank">Смотреть</a>
				</div>
				<div className={s.project_item__block_text}>
					<p className={s.project_item__title}>Название проекта</p>
					<p className={s.project_item__description}>Краткое описание</p>
				</div>
			</div>
		</>
	);
};
export default React.memo(ProjectsItem)