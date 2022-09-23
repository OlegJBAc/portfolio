import React, { createContext, Dispatch, FC, SetStateAction, useState } from "react"

export type setStateType<T> = Dispatch<SetStateAction<T>>

interface iContext {
    type: 'Light' | 'Dark'
    setType: setStateType<'Light' | 'Dark'>
}

export const ThemeContext = createContext<{ type: 'Light' | 'Dark' }>({ type: 'Dark' })

export const ThemeProvider: FC<propsType> = ({ children }) => {
    const themeFromLocalStorage = localStorage.getItem('theme') as 'Light' | 'Dark' | null
    const [type, setType] = useState<'Light' | 'Dark'>(themeFromLocalStorage ? themeFromLocalStorage : 'Light')
    // @ts-ignore
    return <ThemeContext.Provider value={{ type, setType }}>
        { children }
    </ThemeContext.Provider>
}


interface propsType {
    children: any
}