import React, { FC, useEffect, useRef } from 'react';
import s from './aboutMe.module.scss';
import avatar from '../../commons/avatars/myAvatar.jpg'
import { coordinatesOfSectionsType } from '../../App';


const AboutMe: FC<propsType> = ({ sectionYCoordinate, setCoordinatesOfSections }) => {
  const aboutMeRef = useRef<HTMLElement>()

  useEffect(() => {
    // @ts-ignore
    setCoordinatesOfSections((coordinatesOfSections: coordinatesOfSectionsType) => {
      // @ts-ignore
      return {...coordinatesOfSections, aboutMe: aboutMeRef.current.getBoundingClientRect().top}
    })
  }, [])
  
  return (
    // @ts-ignore
    <div ref={aboutMeRef} className={s.aboutMe}>
      <div className={s.aboutMe__content}>
        <div className={s.aboutMe__header}>
          <h2>Hi, i'm Oleg. FrontEnd developer.</h2>
          <p className={s.aboutMe__description}>
            Hi, I am considering a change of profession towards frontend development. I studied independently, there is a pat-project using the full stack of technologies specified in the skills block.
          </p>
        </div>
        <div className={s.avatar}>
          <img src={avatar} className={s.avatar__img}/>
        </div>
      </div>
    </div>
  );
}


export default AboutMe


interface propsType {
  sectionYCoordinate: number
  setCoordinatesOfSections: (coordinatesOfSections: coordinatesOfSectionsType) => void
}