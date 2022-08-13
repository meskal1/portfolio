import React from 'react'
import s from './NavItems.module.scss'
import { NavAnimatedLink } from './navLink/NavAnimatedLink'

export type NavItemsType = {
  headerLinks: Array<{ id: string; link: string; name: string }>
  location: string
}

export const NavItems: React.FC<NavItemsType> = React.memo(({ headerLinks, location }) => {
  const navLinks = headerLinks.map(el => {
    return <NavAnimatedLink location={location} id={el.id} link={el.link} name={el.name} key={el.id} />
  })

  return (
    <>
      <nav className={s.nav_items}>
        <ul className={s.nav_items__list}>{navLinks}</ul>
      </nav>
    </>
  )
})
