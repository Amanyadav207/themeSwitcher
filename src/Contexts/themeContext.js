import React ,{useContext} from 'react';


export const ThemeContext = React.createContext({
    themeMode : "light",
    darkMode : () => {},
    lightMode : () => {}
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext)
}