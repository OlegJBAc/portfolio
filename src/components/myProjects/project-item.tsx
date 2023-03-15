import React from "react"
import { engText } from "../../commons/textData/eng"
import { ruText } from "../../commons/textData/ru"
import useLanguage from "../../hooks/useLanguage"
import s from './myProjects.module.scss'
import social_network from '../../commons/projects-images/social-network.jpg'
import to_do from '../../commons/projects-images/to-do.jpg'
import rpg from '../../commons/projects-images/rpg.jpg'
import {projectsType} from "./myProjects"


const ProjectItem: React.FC<propsType> = ({ project, index}) => {

    const images = {
        'to-do': to_do,
        'social-network': social_network,
        'rpg': rpg,
    }

    const { language } = useLanguage()

    return (
        <li className={s.projects__item}>
            <div className={s.projects__item_container}>
                <figure>
                    <figcaption>
                        <div className={s.projects__toProject}>
                            <a target={'_blank'} href={`https://olegjbac.github.io/${project}`}>
                                <button>To project</button>
                            </a>
                        </div>
                        <img src={`${images[project]}`}/>
                        <a target={'_blank'} href={`https://olegjbac.github.io/${project}`}>
                            <h3>
                                { language === 'Ru'
                                    ? ruText.myProjects[index].header
                                    : engText.myProjects[index].header
                                }
                            </h3>
                        </a>
                        <p>
                            { language === 'Ru'
                                ? ruText.myProjects[index].description
                                : engText.myProjects[index].description
                            }
                        </p>
                    </figcaption>
                </figure>
            </div>
        </li>
    )
}



export default ProjectItem

interface propsType {
    project: projectsType
    index: number
}

interface images {
    to_do: File
    social_network: File
    rpg: File
}