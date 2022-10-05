import React, { useEffect, useState } from 'react'
import s from './Projects.module.scss'

const slides = [
  {
    title: 'Machu Picchu',
    subtitle: 'Peru',
    description: 'Adventure is never far away',
    image:
      'https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  },
  {
    title: 'Chamonix',
    subtitle: 'France',
    description: 'Let your dreams come true',
    image:
      'https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  },
  {
    title: 'Mimisa Rocks',
    subtitle: 'Australia',
    description: 'A piece of heaven',
    image:
      'https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  },
  {
    title: 'Four',
    subtitle: 'Australia',
    description: 'A piece of heaven',
    image:
      'https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  },
  {
    title: 'Five',
    subtitle: 'Australia',
    description: 'A piece of heaven',
    image:
      'https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
  },
]
// function useTilt(active: boolean | null) {
//   const ref = React.useRef<HTMLDivElement>(null)
//   React.useEffect(() => {
//     if (!ref.current || !active) return
//     const state: { rect: any; mouseX: number | undefined; mouseY: number | undefined } = {
//       rect: undefined,
//       mouseX: undefined,
//       mouseY: undefined,
//     }
//     let el = ref.current
//     const handleMouseMove = (e: any) => {
//       if (!el) return
//       if (!state.rect) state.rect = el.getBoundingClientRect()
//       state.mouseX = e.clientX
//       state.mouseY = e.clientY
//       const px = state.mouseX ? (state.mouseX - state.rect.left) / state.rect.width : null
//       const py = state.mouseY ? (state.mouseY - state.rect.top) / state.rect.height : null
//       el.style.setProperty('--px', px + '')
//       el.style.setProperty('--py', py + '')
//     }
//     el.addEventListener('mousemove', handleMouseMove)
//     return () => el.removeEventListener('mousemove', handleMouseMove)
//   }, [active])
//   return ref
// }

// type QwType = {
//   element: any
//   // slide: { title: string; subtitle: string; description: string; image: string }
//   offset: any
// }
// const Slide: React.FC<QwType> = ({ element, offset }) => {
//   const active = offset === 0 ? true : null
//   // const ref = useTilt(active)
//   return (
//     <div
//       // ref={ref}
//       className={s.slide}
//       data-active={active}
//       style={{
//         //@ts-ignore
//         '--offset': offset,
//         '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
//       }}>
//       <div
//         className={s.slideContent}
//         style={{
//           backgroundImage: `url('${element.img}')`,
//         }}>
//         {/* <div className={`${s.project__item}`}>
//           <a className={s.project__pic} href={element.urlDemo} target={element.urlDemo}>
//             <img className={s.project__img} src={element.img} alt='' />
//           </a>
//           <p className={s.project__text}>{element.name}</p>
//           <a className={s.project__demo} href={element.urlDemo} target={element.urlDemo}>
//             {element.urlDemoName}
//           </a>
//           <a className={s.project__github} href={element.urlGithub} target={element.urlGithub}>
//             Source
//           </a>
//         </div> */}
//         {/* <div className={s.slideContentInner}>
//           <h2 className={s.slideTitle}>{slide.title}</h2>
//           <h3 className={s.slideSubtitle}>{slide.subtitle}</h3>
//           <p className={s.slideDescription}>{slide.description}</p>
//         </div> */}
//       </div>
//     </div>
//   )
// }

// const items = [
//   {
//     id: 1,
//     img: '1',
//     name: 'Social network',
//     urlDemoName: 'Live Demo in progress',
//     urlDemo: 'https://meskal1.github.io/social_network',
//     urlGithub: 'https://github.com/meskal1/social_network',
//   },
//   {
//     id: 2,
//     img: '2',
//     name: 'Todolist',
//     urlDemoName: 'Live Demo in progress',
//     urlDemo: 'https://meskal1.github.io/my_todo_list/',
//     urlGithub: 'https://github.com/meskal1/my_todo_list',
//   },
//   {
//     id: 3,
//     img: 'https://github.com/meskal1/Counter/raw/main/Preview.jpg',
//     name: 'Counter',
//     urlDemoName: 'Live Demo',
//     urlDemo: 'https://meskal1.github.io/Counter',
//     urlGithub: 'https://github.com/meskal1/Counter',
//   },
//   {
//     id: 4,
//     img: 'https://github.com/meskal1/drum_kit/raw/main/PreviewDrumKit.jpg',
//     name: 'Drum Kit',
//     urlDemoName: 'Live Demo',
//     urlDemo: 'https://meskal1.github.io/drum_kit/',
//     urlGithub: 'https://github.com/meskal1/drum_kit',
//   },
//   {
//     id: 5,
//     img: 'https://github.com/meskal1/guess_my_number/raw/main/Preview.jpg',
//     name: 'Guess the number',
//     urlDemoName: 'Live Demo',
//     urlDemo: 'https://meskal1.github.io/guess_my_number/',
//     urlGithub: 'https://github.com/meskal1/guess_my_number',
//   },
//   {
//     id: 6,
//     img: 'https://github.com/meskal1/pig_game/raw/main/Preview.jpg',
//     name: 'Pig game',
//     urlDemoName: 'Live Demo',
//     urlDemo: 'https://meskal1.github.io/pig_game/',
//     urlGithub: 'https://github.com/meskal1/pig_game',
//   },
//   {
//     id: 7,
//     img: 'https://github.com/meskal1/CSS_car_animation/raw/main/PreviewCar.jpg',
//     name: 'Car animation',
//     urlDemoName: 'Live Demo',
//     urlDemo: 'https://meskal1.github.io/CSS_car_animation/',
//     urlGithub: 'https://github.com/meskal1/CSS_car_animation',
//   },
//   {
//     id: 8,
//     img: 'https://github.com/meskal1/portfolio/raw/main/PreviewPortfolio.jpg',
//     name: 'Portfolio',
//     urlDemoName: 'Live Demo',
//     urlDemo: 'https://meskal1.github.io/portfolio/',
//     urlGithub: 'https://github.com/meskal1/portfolio',
//   },
// ]

const Projects = () => {
  const [itemCenter, setItemCenter] = useState<number>(1)
  const [items, setItems] = useState([
    {
      id: 1,
      img: '1',
      name: 'Social network',
      urlDemoName: 'Live Demo in progress',
      urlDemo: 'https://meskal1.github.io/social_network',
      urlGithub: 'https://github.com/meskal1/social_network',
    },
    {
      id: 2,
      img: '2',
      name: 'Todolist',
      urlDemoName: 'Live Demo in progress',
      urlDemo: 'https://meskal1.github.io/my_todo_list/',
      urlGithub: 'https://github.com/meskal1/my_todo_list',
    },
    {
      id: 3,
      img: 'https://github.com/meskal1/Counter/raw/main/Preview.jpg',
      name: 'Counter',
      urlDemoName: 'Live Demo',
      urlDemo: 'https://meskal1.github.io/Counter',
      urlGithub: 'https://github.com/meskal1/Counter',
    },
    {
      id: 4,
      img: 'https://github.com/meskal1/drum_kit/raw/main/PreviewDrumKit.jpg',
      name: 'Drum Kit',
      urlDemoName: 'Live Demo',
      urlDemo: 'https://meskal1.github.io/drum_kit/',
      urlGithub: 'https://github.com/meskal1/drum_kit',
    },
    {
      id: 5,
      img: 'https://github.com/meskal1/guess_my_number/raw/main/Preview.jpg',
      name: 'Guess the number',
      urlDemoName: 'Live Demo',
      urlDemo: 'https://meskal1.github.io/guess_my_number/',
      urlGithub: 'https://github.com/meskal1/guess_my_number',
    },
    {
      id: 6,
      img: 'https://github.com/meskal1/pig_game/raw/main/Preview.jpg',
      name: 'Pig game',
      urlDemoName: 'Live Demo',
      urlDemo: 'https://meskal1.github.io/pig_game/',
      urlGithub: 'https://github.com/meskal1/pig_game',
    },
    {
      id: 7,
      img: 'https://github.com/meskal1/CSS_car_animation/raw/main/PreviewCar.jpg',
      name: 'Car animation',
      urlDemoName: 'Live Demo',
      urlDemo: 'https://meskal1.github.io/CSS_car_animation/',
      urlGithub: 'https://github.com/meskal1/CSS_car_animation',
    },
    {
      id: 8,
      img: 'https://github.com/meskal1/portfolio/raw/main/PreviewPortfolio.jpg',
      name: 'Portfolio',
      urlDemoName: 'Live Demo',
      urlDemo: 'https://meskal1.github.io/portfolio/',
      urlGithub: 'https://github.com/meskal1/portfolio',
    },
  ])
  const numberOfItems = items.length
  // const itemLeft = itemCenter - 1 >= 0 ? itemCenter - 1 : numberOfItems - 1
  // const itemRight = itemCenter === numberOfItems - 1 ? 0 : itemCenter + 1
  const swiperItems = items.map((el, index) => {
    // const leftItem = index === itemCenter - 1 ? `${s.left_item} ${s.moveLeftItemToRigth1}` : ''
    // const centerItem = index === itemCenter ? `${s.center_item} ${s.moveCenterToRigth}` : ''
    // const rightItem = index === itemCenter + 1 ? `${s.right_item}` : ''
    //${s.project__item} ${leftItem} ${centerItem} ${rightItem}
    return (
      <div key={el.id} className={`${s.project__item}`}>
        <a className={s.project__pic} href={el.urlDemo} target={el.urlDemo}>
          <img className={s.project__img} src={el.img} alt='' />
        </a>
        <p className={s.project__text}>{el.name}</p>
        <a className={s.project__demo} href={el.urlDemo} target={el.urlDemo}>
          {el.urlDemoName}
        </a>
        <a className={s.project__github} href={el.urlGithub} target={el.urlGithub}>
          Source
        </a>
      </div>
    )
  })
  const swiperContainer = document.getElementById('swiper')
  // const numberOfItems = items.length
  // const itemLeft = itemCenter - 1 >= 0 ? itemCenter - 1 : numberOfItems - 1
  // const itemRight = itemCenter === numberOfItems - 1 ? 0 : itemCenter + 1
  let touchstartX = 0
  let touchendX = 0

  const onClickSwipeLeft = () => setItemCenter(itemCenter - 1 >= 0 ? itemCenter - 1 : numberOfItems - 1)

  const onClickSwipeRight = () => setItemCenter(itemCenter + 1 > numberOfItems - 1 ? 0 : itemCenter + 1)

  const checkDirection = () => (touchendX < touchstartX ? onClickSwipeRight() : onClickSwipeLeft())

  swiperContainer?.addEventListener(
    'touchstart',
    e => {
      touchstartX = e.changedTouches[0].screenX
    },
    { once: true }
  )

  swiperContainer?.addEventListener(
    'touchend',
    e => {
      touchendX = e.changedTouches[0].screenX
      checkDirection()
    },
    { once: true }
  )

  document.addEventListener(
    'keydown',
    e => {
      if (e.key === 'ArrowRight') onClickSwipeRight()
      if (e.key === 'ArrowLeft') onClickSwipeLeft()
    },
    { once: true }
  )

  const onTitleAnimationEnd = () => {}

  useEffect(() => {
    // onClickSwipeLeft()
    // onClickSwipeRight()
  }, [])
  //${s.swiper_container} ${s.swiper_items_container}

  // const initialState = {
  //   slideIndex: 0,
  // }
  // const slidesReducer = (state: any, event: any) => {
  //   if (event.type === 'NEXT') {
  //     return {
  //       ...state,
  //       slideIndex: (state.slideIndex + 1) % slides.length,
  //     }
  //   }
  //   if (event.type === 'PREV') {
  //     return {
  //       ...state,
  //       slideIndex: state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
  //     }
  //   }
  // }
  // const [state, setState] = useState({ slideIndex: 0 })
  // const [state, dispatch] = React.useReducer(slidesReducer, initialState)

  const [state, setState] = useState<number>(0)

  const as = [...items].map((element, index) => {
    let offset = numberOfItems + (state - index)
    // if (index === state - 1) offset = state - 1
    // if (index === state) offset = state
    // if (index === state + 1) offset = state + 1
    //  const leftItem = index === state - 1 ?   offset = : ''
    //   const centerItem = index === state ?  offset = : ''
    //   const rightItem = index === state + 1 ?  offset = : ''
    const active = offset === 0 ? true : null
    // const offset = items.length + (state - index)
    // const active = offset === 0 ? true : null
    return (
      <div
        key={index}
        className={s.slide}
        data-active={active}
        style={{
          //@ts-ignore
          '--offset': offset,
          '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
        }}>
        <div className={s.slideContent}>
          <div className={`${s.project__item}`}>
            <a className={s.project__pic} href={element.urlDemo} target={element.urlDemo}>
              <img className={s.project__img} src={element.img} alt='' />
            </a>
            <p className={s.project__text}>{element.name}</p>
            <a className={s.project__demo} href={element.urlDemo} target={element.urlDemo}>
              {element.urlDemoName}
            </a>
            <a className={s.project__github} href={element.urlGithub} target={element.urlGithub}>
              Source
            </a>
          </div>
        </div>
      </div>
    )
  })

  // let parent = document.getElementById('parent')
  // let elem = parent.querySelector('.elem')
  // let clone = elem.cloneNode(true)
  // parent.appendChild(clone)

  // const as = [...items, ...items, ...items].map((element, i) => {
  //   const offset = items.length + (state.slideIndex - i)
  //   return <Slide element={element} offset={offset} key={i} />
  // })

  // const as = [...slides, ...slides, ...slides].map((slide, i) => {
  //   const offset = slides.length + (state.slideIndex - i)
  //   return <Slide element={slide} offset={offset} key={i} />
  // })

  const le = () => {
    // const ssa = [...items].filter((el, i) => i !== items.length - 1)
    // setItems([items[items.length - 1], ...ssa])
    setState(state === 0 ? items.length - 1 : state - 1)
  }
  const ri = () => {
    setState((state + 1) % items.length)
  }

  return (
    <>
      <section className={s.projects}>
        <div className={s.projects__container}>
          <div className={s.projects__content}>
            <h2 className={s.projects__title} onAnimationEnd={onTitleAnimationEnd}>
              Projects
            </h2>
            <div className={`${s.swiper_container} `} id='swiper'>
              <button className={s.left_button} onClick={le} />
              <div className={`${s.swiper_items_container}`}>
                <div className={s.slides}>{as}</div>
              </div>
              <button className={s.right_button} onClick={ri} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Projects
