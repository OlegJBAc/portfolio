import React, {FC, useEffect, useRef, useState} from "react"
import { coordinatesOfSectionsType } from "../../App"
import useLanguage from "../../hooks/useLanguage"
import s from './myProjects.module.scss'
import ProjectItem from "./project-item";
import { v4 } from 'uuid'

const MyProjects: FC<propsType> = ({ sectionYCoordinate, setCoordinatesOfSections }) => {

    const [projects] = useState<projectsType[]>(['social-network', 'to-do', 'rpg'])
    const myProjectsRef = useRef() as React.RefObject<HTMLDivElement>


    useEffect(() => {
        // @ts-ignore
        setCoordinatesOfSections((coordinatesOfSections: coordinatesOfSectionsType) => {
        // @ts-ignore
        return {...coordinatesOfSections, myProjects: myProjectsRef.current.getBoundingClientRect().top }
        })
    }, [])

    return(
        <div ref={myProjectsRef} className={s.myProjects}>
            <ul className={s.projects}>
                { projects.map((project, index) => <ProjectItem key={v4()}
                                                                                     project={project}
                                                                                     index={index}
                                                                        />)
                }
            </ul>
        </div>
    )
}

export default MyProjects


interface propsType {
    sectionYCoordinate: number
    setCoordinatesOfSections: (coordinatesOfSections: coordinatesOfSectionsType) => void
}

export type projectsType = 'to-do' | 'social-network' | 'rpg'