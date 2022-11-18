import React, { FC, useEffect } from "react"
import './layout.scss'
import cn from 'classnames'
import useTheme from "../../hooks/useTheme"

const Layout: FC<propsType> = ({ children }) => {
    const { type, setType } = useTheme()
    
    const changeBodyTheme = () => {
        const body = document.body
        body.classList.remove(type === 'Light' ? 'body__dark' : 'body__light')
        body.classList.add(type === 'Light' ? 'body__light' : 'body__dark')
    }

    useEffect(() => {
        changeBodyTheme()
    }, [type])
    return (
        <div className={cn("layout", {
            light: type === 'Light',
            dark: type === 'Dark',
        })}>
            { children }
        </div>
    )
}


export default Layout


interface propsType {
    children: any
}