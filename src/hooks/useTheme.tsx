import React, { useContext } from "react"
import { ThemeContext } from "../providers/themeProvider"

const useTheme = () => {
    const value = useContext(ThemeContext)
    return value
}

export default useTheme