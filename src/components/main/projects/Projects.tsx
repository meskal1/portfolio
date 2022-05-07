import React from 'react';
import s from './Projects.module.scss'
import ProjectsItem from './projectsItem/ProjectsItem';

export type ProjectsType = {

}

const Projects: React.FC<ProjectsType> = ({ }) => {
	return (
		<>
			<section className={s.projects}>
				<div className={s.projects__container}>
					<div className={s.projects__content}>
						<h2 className={s.projects_title}>Мои работы</h2>
						<div className={s.projects__block_items}>
							<ProjectsItem />
							<ProjectsItem />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default React.memo(Projects)