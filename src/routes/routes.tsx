import { lazy, Suspense } from 'react'

import { Routes, Route, Navigate } from 'react-router'

import { PATH } from '../constants/routePaths.enum'
import { AboutModal } from '../features/about/Modal/AboutModal'
import { Page404 } from '../features/page404/Page404'

const Home = lazy(() => import('../features/home/Home').then(module => ({ default: module.Home })))
const Skills = lazy(() =>
  import('../features/skills/Skills').then(module => ({ default: module.Skills }))
)
const Projects = lazy(() =>
  import('../features/projects/Projects').then(module => ({ default: module.Projects }))
)
const Contact = lazy(() =>
  import('../features/contact/Contact').then(module => ({ default: module.Contact }))
)
const About = lazy(() =>
  import('../features/about/About').then(module => ({ default: module.About }))
)

export const AppRoutes = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Navigate to={PATH.HOME} replace />} />
        <Route path={PATH.HOME} element={<Home />} />
        <Route path={PATH.SKILLS} element={<Skills />} />
        <Route path={PATH.PROJECTS} element={<Projects />} />
        <Route path={PATH.CONTACTS} element={<Contact />} />
        <Route path={PATH.ABOUT} element={<About />}>
          <Route path={PATH.ABOUT_MODAL} element={<AboutModal />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  )
}
