import React from "react"
import { coordinatesOfSectionsType } from "../../../App"
import s from './headerNav.module.scss'
import cnBind from 'classnames/bind'
import useTheme from "../../../hooks/useTheme"
import HeaderNavBtn from "./headerNavBtn/headerNavBtn"


const HeaderNav: React.FC<propsType> = ({ coordinatesOfSections, adaptiveMenuActive, setAdaptiveMenuActive }) => {
    const { type, setType } = useTheme()

    const cx = cnBind.bind(s)
    
    const scrollToSection = ( section: 'aboutMe' | 'skills' | 'myProjects' | 'contactNow' | 'contacts' ) => () => {
        window.scrollTo({ top: coordinatesOfSections[section], left: 0, behavior: 'smooth' })
    }

    return (
        <>
            <HeaderNavBtn adaptiveMenuActive={adaptiveMenuActive}
                          setAdaptiveMenuActive={setAdaptiveMenuActive}/>
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
        </>
    )
}

export default HeaderNav


interface propsType {
    coordinatesOfSections: coordinatesOfSectionsType
    adaptiveMenuActive: boolean
    setAdaptiveMenuActive: (adaptiveMenuActive: boolean) => void
}