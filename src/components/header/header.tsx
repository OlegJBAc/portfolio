import React, { FC, useRef, useState } from 'react';
import { coordinatesOfSectionsType } from '../../App';
import useTheme from '../../hooks/useTheme';
import s from './header.module.scss';
import cn from 'classnames'
import cnBind from 'classnames/bind'


const Header: FC<propsType> = ({ coordinatesOfSections, ...props }) => {
  // @ts-ignore
  const { type, setType } = useTheme()
  const [ adaptiveMenuActive, setAdaptiveMenuActive ] = useState(false)

  const scrollToSection = (section: 'aboutMe' | 'skills' | 'myProjects' | 'contactNow' | 'contacts') => () => {
    window.scrollTo({ top: coordinatesOfSections[section], left: 0, behavior: 'smooth' })
  }
  const cx = cnBind.bind(s)
  const setTheme = () => {
    localStorage.setItem('theme', type === 'Light' ? 'Dark' : 'Light')
    setType(type === 'Light' ? 'Dark' : 'Light')
  }
  return (
    <div className={cx('header', { 
      light: type === 'Light',
      dark: type === 'Dark',
     })}>
      <button className={cx('theme__toggle', {
                              light: type === 'Light',
                              dark: type === 'Dark',
                            })}
              onClick={setTheme}>
        
      </button>
      <button className={cx('sideBarVis__btn', {
                light: type === 'Light',
                dark: type === 'Dark',
            })} id={s.sideBar__visible}
            onClick={() => setAdaptiveMenuActive(!adaptiveMenuActive)}>
        <span></span>
      </button>
      <ul className={cx('header__nav', {
                active: adaptiveMenuActive,
                notActive: !adaptiveMenuActive,
              })}>
        <li onClick={scrollToSection('aboutMe')}>About me</li>
        <li onClick={scrollToSection('skills')}>Skills</li>
        <li onClick={scrollToSection('myProjects')}>My projects</li>
        <li onClick={scrollToSection('contactNow')}>Contact now</li>
        <li onClick={scrollToSection('contacts')}>Contacts</li>
      </ul>
    </div>
  )
}


export default Header


interface propsType {
  coordinatesOfSections: coordinatesOfSectionsType
}