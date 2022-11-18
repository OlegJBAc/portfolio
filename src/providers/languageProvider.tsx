import React, { createContext, Dispatch, FC, SetStateAction, useState } from "react"

export type setStateType<T> = Dispatch<SetStateAction<T>>

interface iContext {
    language: 'Ru' | 'Eng'
    setLanguage: setStateType<'Ru' | 'Eng'>
}

export const LanguageContext = createContext({ language: 'Ru' } as iContext)

export const LanguageProvider: FC<propsType> = ({ children }) => {
    const languageFromLocalStorage = localStorage.getItem('language') as 'Ru' | 'Eng' | null
    const [language, setLanguage] = useState<'Ru' | 'Eng'>(languageFromLocalStorage ? languageFromLocalStorage : 'Ru')
    
    return <LanguageContext.Provider value={{ language, setLanguage }}>
        { children }
    </LanguageContext.Provider>
}


interface propsType {
    children: any
}