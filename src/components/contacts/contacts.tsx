import React, { FC, useEffect, useRef } from 'react';
import { coordinatesOfSectionsType } from '../../App';
import s from './contacts.module.scss';
import vk_logo from '../../commons/contacts_logo/vk_logo.png'
import gitHub_logo from '../../commons/contacts_logo/gitHub_logo.png'
import telegram_logo from '../../commons/contacts_logo/telegram_logo.webp'
import telegramBW_logo from '../../commons/contacts_logo/telegramBW_logo.png'
import useTheme from '../../hooks/useTheme';
import cn from 'classnames'
import cnBind from 'classnames/bind'
import { ruText } from '../../commons/textData/ru';
import { engText } from '../../commons/textData/eng';
import useLanguage from '../../hooks/useLanguage';


const Contacts: FC<propsType> = ({ sectionYCoordinate, setCoordinatesOfSections }) => {
  const { type, setType } = useTheme()
  const { language, setLanguage } = useLanguage()

  const contactsRef = useRef() as React.RefObject<HTMLDivElement>

  const cx = cnBind.bind(s)
  useEffect(() => {
    // @ts-ignore
    setCoordinatesOfSections((coordinatesOfSections: coordinatesOfSectionsType) => {
      // @ts-ignore
      return {...coordinatesOfSections, contacts: contactsRef.current.getBoundingClientRect().top }
    })
  }, [])

  return (
    <footer ref={contactsRef} className={s.contacts}>
      <h2>{ language === 'Ru' ? ruText.myContacts.header : engText.myContacts.header }</h2>
      <div className={s.container}>
        <ul>
          <li className={cx('contacts__item', { 
                light: type === 'Light',
                dark: type === 'Dark',
            })}>
            <a target={'_blank'} href='https://github.com/OlegJBAc'>
              <img src={vk_logo}/>
            </a>
          </li>
          <li className={cx('contacts__item', { 
                light: type === 'Light',
                dark: type === 'Dark',
            })}>
            <a target={'_blank'} href='https://github.com/OlegJBAc'>
              <img src={gitHub_logo} id={s.github__logo}/>
            </a>
          </li>
          <li className={cx('contacts__item', { 
                light: type === 'Light',
                dark: type === 'Dark',
            })}>
            <a target={'_blank'} href='https://t.me/This00001'>
              <img src={telegram_logo}/>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}


export default Contacts


interface propsType {
  sectionYCoordinate: number
  setCoordinatesOfSections: (coordinatesOfSections: coordinatesOfSectionsType) => void
}