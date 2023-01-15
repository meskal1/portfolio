import { FC } from 'react'

import s from './NavItems.module.scss'
import { NavAnimatedLink } from './NavLink/NavAnimatedLink'

type NavItemsType = {
  headerLinks: Array<{ id: number; link: string; name: string }>
}

export const NavItems: FC<NavItemsType> = ({ headerLinks }) => {
  return (
    <nav className={s.nav_items}>
      <ul className={s.nav_items__list}>
        {headerLinks.map(el => {
          return <NavAnimatedLink key={el.id} id={el.id} link={el.link} name={el.name} />
        })}
      </ul>
    </nav>
  )
}
