import { createContext, useContext } from "react";


export const ThemeContext = createContext({
    themeMode:'light',
    darkTheme: ()=>{}, // only declaration , functionality in main.jsx
    lightTheme: ()=>{},  // only declaration , functionality in main.jsx
})

export const ThemeProvider = ThemeContext.Provider
export default function useTheme(){
    return(
        useContext(ThemeContext)
    )
}
