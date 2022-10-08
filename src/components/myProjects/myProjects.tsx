import React, { FC, useEffect, useRef } from "react"
import { coordinatesOfSectionsType } from "../../App"
import { engText } from "../../commons/textData/eng"
import { ruText } from "../../commons/textData/ru"
import useLanguage from "../../hooks/useLanguage"
import s from './myProjects.module.scss'


const MyProjects: FC<propsType> = ({ sectionYCoordinate, setCoordinatesOfSections }) => {

    const myProjectsRef = useRef<HTMLElement>()
    // @ts-ignore
    const { language, setLanguage } = useLanguage()

    useEffect(() => {
        // @ts-ignore
        setCoordinatesOfSections((coordinatesOfSections: coordinatesOfSectionsType) => {
        // @ts-ignore
        return {...coordinatesOfSections, myProjects: myProjectsRef.current.getBoundingClientRect().top }
        })
    }, [])

    return(
        // @ts-ignore
        <div ref={myProjectsRef} className={s.myProjects}>
            <h2>{ language === 'Ru' ? ruText.myProjects.header : engText.myProjects.header }</h2>
            <ul className={s.projects}>
                <li className={s.projects__item}>
                    <div className={s.projects__item_container}>
                        <figure>
                            <figcaption>
                                <div className={s.projects__toProject}>
                                    <a target={'_blank'} href="https://olegjbac.github.io/social-network">
                                        <button>To project</button>
                                    </a>
                                </div>
                                <img src={'http://www.businessrecognition.org/wp-content/uploads/2020/04/effective-social-media-marketing-strategy.jpg'}/>
                                <a target={'_blank'} href="https://olegjbac.github.io/social-network">
                                    <h3>
                                        { language === 'Ru' 
                                            ? ruText.myProjects.socialNetworkHeader 
                                            : engText.myProjects.socialNetworkHeader 
                                        }
                                    </h3>
                                </a>
                                <p>
                                    { language === 'Ru' 
                                        ? ruText.myProjects.socialNetworkDescription
                                        : engText.myProjects.socialNetworkDescription 
                                    }
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                </li>
                <li className={s.projects__item}>
                    <div className={s.projects__item_container}>
                        <figure>
                            <figcaption>
                                <div className={s.projects__toProject}>
                                    <a target={'_blank'} href="https://olegjbac.github.io/my-todo">
                                        <button>To project</button>
                                    </a>
                                    
                                </div>
                                <img src={'https://media.istockphoto.com/vectors/opened-personal-organizer-with-a-to-do-list-top-view-of-women-hands-vector-id1168738399?k=20&m=1168738399&s=612x612&w=0&h=adldxggj-8azZlhHE-COXj111heThIsmZI0wI7fxdH4='}/>
                                <a target={'_blank'} href="https://olegjbac.github.io/my-todo">
                                    <h3>
                                        { language === 'Ru' 
                                            ? ruText.myProjects.toDoHeader 
                                            : engText.myProjects.toDoHeader 
                                        }
                                    </h3>
                                </a>
                                <p>
                                    { language === 'Ru' 
                                        ? ruText.myProjects.toDoDescription
                                        : engText.myProjects.toDoDescription 
                                    }
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default MyProjects


interface propsType {
    sectionYCoordinate: number
    setCoordinatesOfSections: (coordinatesOfSections: coordinatesOfSectionsType) => void
}