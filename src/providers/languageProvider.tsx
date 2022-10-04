import React, { createContext, Dispatch, FC, SetStateAction, useState } from "react"

export type setStateType<T> = Dispatch<SetStateAction<T>>

interface iContext {
    language: 'Ru' | 'Eng'
    setType: setStateType<'Ru' | 'Eng'>
}

export const LanguageContext = createContext<{ language: 'Ru' | 'Eng' }>({ language: 'Ru' })

export const LanguageProvider: FC<propsType> = ({ children }) => {
    const languageFromLocalStorage = localStorage.getItem('language') as 'Ru' | 'Eng' | null
    const [language, setLanguage] = useState<'Ru' | 'Eng'>(languageFromLocalStorage ? languageFromLocalStorage : 'Ru')
    // @ts-ignore
    return <LanguageContext.Provider value={{ language, setLanguage }}>
        { children }
    </LanguageContext.Provider>
}


interface propsType {
    children: any
}