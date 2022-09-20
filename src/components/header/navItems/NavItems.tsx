import React from 'react'
import s from './NavItems.module.scss'
import { NavAnimatedLink } from './navLink/NavAnimatedLink'

type NavItemsType = {
  headerLinks: Array<{ id: number; link: string; name: string }>
}

export const NavItems: React.FC<NavItemsType> = ({ headerLinks }) => {
  const navLinks = headerLinks.map(el => {
    return <NavAnimatedLink key={el.id} id={el.id} link={el.link} name={el.name} />
  })
  return (
    <>
      <nav className={s.nav_items}>
        <ul className={s.nav_items__list}>{navLinks}</ul>
      </nav>
    </>
  )
}
