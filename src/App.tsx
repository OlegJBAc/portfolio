import React, { useEffect, useRef, useState } from 'react';
import s from './App.module.scss';
import AboutMe from './components/aboutMe/aboutMe';
import ContactNow from './components/contactNow/contactNow';
import Contacts from './components/contacts/contacts';
import Header from './components/header/header';
import Layout from './components/layout/layout';
import MyProjects from './components/myProjects/myProjects';
import Skills from './components/skills/skills';
import { setStateType, ThemeProvider } from './providers/themeProvider';



const App = () => {
  
  useEffect(() => {
    const themeLocalStorage = localStorage.getItem('theme')
    if(!themeLocalStorage){
      localStorage.setItem('theme', 'Light')
    }
  }, [])

  const [coordinatesOfSections, setCoordinatesOfSections] = useState<coordinatesOfSectionsType>({
    aboutMe: 0,
    skills: 0,
    myProjects: 0,
    contactNow: 0,
    contacts: 0,
  })
  return (
    <ThemeProvider>
      <Layout>
        <div className={s.app}>
          <Header coordinatesOfSections={coordinatesOfSections}/>
          <AboutMe sectionYCoordinate={coordinatesOfSections.aboutMe} 
                  setCoordinatesOfSections={setCoordinatesOfSections}/>
          <Skills sectionYCoordinate={coordinatesOfSections.aboutMe} 
                  setCoordinatesOfSections={setCoordinatesOfSections}/>
          <MyProjects sectionYCoordinate={coordinatesOfSections.aboutMe} 
                      setCoordinatesOfSections={setCoordinatesOfSections}/>
          <ContactNow sectionYCoordinate={coordinatesOfSections.aboutMe} 
                      setCoordinatesOfSections={setCoordinatesOfSections}/>
          <Contacts sectionYCoordinate={coordinatesOfSections.aboutMe} 
                    setCoordinatesOfSections={setCoordinatesOfSections}/>
        </div>
      </Layout>
    </ThemeProvider>
  )
}


export default App


export interface coordinatesOfSectionsType {
  aboutMe: number
  contacts: number
  myProjects: number
  contactNow: number
  skills: number
}
