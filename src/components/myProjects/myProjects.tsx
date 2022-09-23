import React, { FC, useEffect, useRef } from "react"
import { coordinatesOfSectionsType } from "../../App"
import s from './myProjects.module.scss'


const MyProjects: FC<propsType> = ({ sectionYCoordinate, setCoordinatesOfSections }) => {

    const myProjectsRef = useRef<HTMLElement>()

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
            <h2>My Projects</h2>
            <ul className={s.projects}>
                <li className={s.projects__item}>
                    <div className={s.projects__item_container}>
                        <figure>
                            <figcaption>
                                <img src={'http://www.businessrecognition.org/wp-content/uploads/2020/04/effective-social-media-marketing-strategy.jpg'}/>
                                <a target={'_blank'} href="https://olegjbac.github.io/social-network">
                                    <h3>Social Network</h3>
                                </a>
                                <p>My first project with full technical stack.
                                My first project with full technical stack.
                                My first project with full technical stack.
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                </li>
                <li className={s.projects__item}>
                    <div className={s.projects__item_container}>
                        <figure>
                            <figcaption>
                                <img src={'https://media.istockphoto.com/vectors/opened-personal-organizer-with-a-to-do-list-top-view-of-women-hands-vector-id1168738399?k=20&m=1168738399&s=612x612&w=0&h=adldxggj-8azZlhHE-COXj111heThIsmZI0wI7fxdH4='}/>
                                <a target={'_blank'} href="https://olegjbac.github.io/my-todo/">
                                    <h3>Todo app</h3>
                                </a>
                                <p>It's just my toDo app, it was inspitred by TodoIst.It's just my toDo app, it was inspitred by TodoIstIt's just my toDo app, it was inspitred by TodoIst</p>
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