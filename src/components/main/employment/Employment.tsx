import React from 'react';
import s from './Employment.module.scss'

export type EmploymentType = {

}

const Employment: React.FC<EmploymentType> = ({ }) => {
	return (
		<>
			<section className={s.employment}>
				<div className={s.employment__container}>
					<div className={s.employment__content}>
						<h2 className={s.employment__title}>Рассматриваю варианты удаленной работы</h2>
						<a className={s.employment__link} href="#" target="_blank">Нанять меня</a>
					</div>
				</div>
			</section>
		</>
	);
};
export default React.memo(Employment)