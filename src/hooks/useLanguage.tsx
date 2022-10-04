import React, { useContext } from "react"
import { LanguageContext } from "../providers/languageProvider"

const useLanguage = () => {
    const value = useContext(LanguageContext)
    return value
}

export default useLanguage