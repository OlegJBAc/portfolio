import React, { FC, useRef, useState } from 'react';
import { coordinatesOfSectionsType } from '../../App';
import useTheme from '../../hooks/useTheme';
import s from './header.module.scss';
import cn from 'classnames'
import cnBind from 'classnames/bind'
import useLanguage from '../../hooks/useLanguage';


const Header: FC<propsType> = ({ coordinatesOfSections, ...props }) => {
  // @ts-ignore
  const { type, setType } = useTheme()
  // @ts-ignore
  const { language, setLanguage } = useLanguage()
  const [ adaptiveMenuActive, setAdaptiveMenuActive ] = useState(false)

  const scrollToSection = (section: 'aboutMe' | 'skills' | 'myProjects' | 'contactNow' | 'contacts') => () => {
    window.scrollTo({ top: coordinatesOfSections[section], left: 0, behavior: 'smooth' })
  }
  const cx = cnBind.bind(s)
  const chooseTheme = () => {
    localStorage.setItem('theme', type === 'Light' ? 'Dark' : 'Light')
    setType(type === 'Light' ? 'Dark' : 'Light')
  }
  const chooseLanguage = () => {
    localStorage.setItem('language', language === 'Ru' ? 'Eng' : 'Ru')
    setLanguage(language === 'Ru' ? 'Eng' : 'Ru')
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
              onClick={chooseTheme}>
      </button>
      <button className={cx('language__toggle', {
                              light: type === 'Light',
                              dark: type === 'Dark',
                            })}
              onClick={chooseLanguage}>
          {language === 'Ru' ? <span>Ru</span> : <span>Eng</span>}
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
                light: type === 'Light',
                dark: type === 'Dark',
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