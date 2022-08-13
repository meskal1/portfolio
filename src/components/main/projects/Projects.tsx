import React from 'react'
import s from './Projects.module.scss'
// import ProjectsItem from './projectsItem/ProjectsItem';

// type ProjectsType = {}

export const Projects = React.memo(() => {
  return (
    <>
      <section className={s.projects}>
        <div className={s.projects__container}>
          <div className={s.projects__content}>
            <h2 className={s.projects__title}>Projects</h2>
            {/* <div className={s.projects__block_items}>
							<ProjectsItem />
							<ProjectsItem />
						</div> */}
          </div>
        </div>
      </section>
    </>
  )
})
