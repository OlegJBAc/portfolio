import React, { FC } from "react"
import './layout.scss'
import cn from 'classnames'
import useTheme from "../../hooks/useTheme"

const Layout: FC<propsType> = ({ children }) => {
    const { type } = useTheme()
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