import React, { FC, useRef, useState } from 'react';
import { coordinatesOfSectionsType } from '../../App';
import useTheme from '../../hooks/useTheme';
import s from './header.module.scss';
import cnBind from 'classnames/bind'
import useLanguage from '../../hooks/useLanguage';
import HeaderNav from './headerNav/headerNav';


const Header: FC<propsType> = ({ coordinatesOfSections, ...props }) => {
  const { type, setType } = useTheme()
  const { language, setLanguage } = useLanguage()

  const [ adaptiveMenuActive, setAdaptiveMenuActive ] = useState(false)

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
              onClick={chooseTheme}
              title={'Change theme'}>
      </button>
      <button className={cx('language__toggle', {
                              light: type === 'Light',
                              dark: type === 'Dark',
                            })}
              onClick={chooseLanguage}
              title={'Change language'}>
          {language === 'Ru' ? <span>Ru</span> : <span>Eng</span>}
      </button>
      <HeaderNav coordinatesOfSections={coordinatesOfSections}
                 adaptiveMenuActive={adaptiveMenuActive}
                 setAdaptiveMenuActive={setAdaptiveMenuActive}/>
    </div>
  )
}

export default Header


interface propsType {
  coordinatesOfSections: coordinatesOfSectionsType
}