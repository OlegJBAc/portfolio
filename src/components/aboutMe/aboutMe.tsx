import React, { FC, useEffect, useRef } from 'react';
import s from './aboutMe.module.scss';
import avatar from '../../commons/avatars/myAvatar.jpg'
import { coordinatesOfSectionsType } from '../../App';
import useLanguage from '../../hooks/useLanguage';
import { ruText } from '../../commons/textData/ru';
import { engText } from '../../commons/textData/eng';


const AboutMe: FC<propsType> = ({ sectionYCoordinate, setCoordinatesOfSections }) => {
  const { language, setLanguage } = useLanguage()

  const aboutMeRef = useRef() as React.RefObject<HTMLDivElement>

  useEffect(() => {
    // @ts-ignore
    setCoordinatesOfSections((coordinatesOfSections: coordinatesOfSectionsType) => {
      // @ts-ignore
      return {...coordinatesOfSections, aboutMe: aboutMeRef.current.getBoundingClientRect().top}
    })
  }, [])
  
  return (
    <div ref={aboutMeRef} className={s.aboutMe}>
      <div className={s.aboutMe__content}>
        <div className={s.aboutMe__header}>
          <h2 className={language === 'Ru' ? s.ru__header : s.eng__header}>
            { language === 'Ru' ? ruText.aboutMe.header : engText.aboutMe.header }
          </h2>
          <p className={s.aboutMe__description}>
          { language === 'Ru' ? ruText.aboutMe.description : engText.aboutMe.description }
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