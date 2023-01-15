import logo404 from '../../assets/img/404.svg'

import s from './Page404.module.scss'

export const Page404 = () => {
  return (
    <div className={s.container_page404}>
      <div className={s.container_logo404}>
        <img className={s.logo404} src={logo404} alt="" />
      </div>
      <p className={s.message_404}>Page not found!</p>
    </div>
  )
}
