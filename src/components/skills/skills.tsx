import React, { FC, LegacyRef, MutableRefObject, useEffect, useRef, useState } from 'react';
import s from './skills.module.scss';
import axios_logo from '../../commons/skills_logos/axios_logo.png'
import formik from '../../commons/skills_logos/formik.png'
import git from '../../commons/skills_logos/git.png'
import html_css from '../../commons/skills_logos/html_css.png'
import js from '../../commons/skills_logos/js.png'
import ts from '../../commons/skills_logos/ts.png'
import npm_yarn from '../../commons/skills_logos/npm_yarn.webp'
import sass from '../../commons/skills_logos/sass.png'
import redux from '../../commons/skills_logos/redux.png'
import redux_form from '../../commons/skills_logos/redux-form.png'
import react from '../../commons/skills_logos/react.png'
import './skills.scss'
import { CSSTransition, Transition } from 'react-transition-group'
import { coordinatesOfSectionsType } from '../../App';
import cn from 'classnames'


const Skills: FC<propsType> = ({ sectionYCoordinate, setCoordinatesOfSections }) => {
  const [isOnSkills, setIsOnSkills] = useState(true)
  const [isWasInitialized, setIsWasInitialized] = useState(false)

  const skillsDiv = useRef<HTMLDivElement>()

  useEffect(() => {
      // @ts-ignore
      setCoordinatesOfSections((coordinatesOfSections: coordinatesOfSectionsType) => {
      // @ts-ignore
      return { ...coordinatesOfSections, skills: skillsDiv.current.getBoundingClientRect().top }
      })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsWasInitialized(true)
    }, 100)
  }, [])
  const scrollAnim = () => {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(){
      if(skillsDiv.current){
        const animItem = skillsDiv.current
        const animItemHeight = animItem.offsetHeight
        const animItemOffset = offset(animItem).top
        const animStart = 4

        let animItemPoint = window.innerHeight - animItemHeight / animStart
        if(animItemHeight > window.innerHeight){
          animItemPoint = window.innerHeight - window.innerHeight / animStart
        }
        if((window.pageYOffset > animItemOffset - animItemPoint) && 
                               window.pageYOffset < (animItemOffset + animItemHeight)){
          if(!isOnSkills){
            setIsOnSkills(true)
          }
        }else{
          if(isOnSkills){
            setIsOnSkills(false)
          }
        }
      }
    }
    function offset(el: HTMLDivElement){
      const rect = el.getBoundingClientRect()
      let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll()
  }
  scrollAnim()
  
  return (
    <Transition in={isOnSkills}
                timeout={0}>
      {state =>  {
        // @ts-ignore
        return <div className={s.skills} ref={skillsDiv}>
            <h2>My professional skills</h2>
            <div className={s.skills__content}>
              <div className={cn("base__stack", {
                [state]: isWasInitialized
              } )}>
                <h3>Base stack</h3>
                <ul>
                  <li>
                    <img src={html_css}/>
                    <span>HTML\CSS3</span>
                  </li>
                  <li>
                    <img src={js}/>
                    <span>JavaScript(ES6+)</span>
                  </li>
                  <li>
                    <img src={ts}/>
                    <span>TypeScript</span>
                  </li>
                  <li>
                    <img src={react}/>
                    <span>React</span>
                  </li>
                  <li>
                    <img src={redux}/>
                    <span>Redux\Redux-toolkit</span>
                  </li>
                </ul>
              </div>

              <div className={cn("others", {
                [state]: isWasInitialized
              } )}>
              <h3>Others skills</h3>
                <ul>
                  <li>
                    <span>SASS</span>
                    <img src={sass}/>
                  </li>
                  <li>
                    <span>Git</span>
                    <img src={git}/>
                  </li>
                  <li>
                    <span>Npm\Yarn</span>
                    <img src={npm_yarn}/>
                  </li>
                  <li>
                    <span>Formik\Redux-form</span>
                    <img src={formik}/>
                  </li>
                  <li>
                    <span>Axios\RTK query</span>
                    <img src={axios_logo}/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      }}
    </Transition>
  );
}


export default Skills


interface propsType {
  sectionYCoordinate: number
  setCoordinatesOfSections: (coordinatesOfSections: coordinatesOfSectionsType) => void
}