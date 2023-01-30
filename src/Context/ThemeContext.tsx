import { createContext, PropsWithChildren, useCallback, useEffect, useState } from "react";

const defaultValue = {
    theme: '',
    setTheme: (theme:string): any => { }
}

export const ThemeContext = createContext(defaultValue);

export const themeVerifier = (theme:any) => {    
    return theme === 'dark'? 'light':'dark'
}

const ThemeContextProvider = ({ children }: PropsWithChildren): JSX.Element => {

    const [theme, setTheme] = useState<'dark'|'light'|undefined>(undefined);

    useEffect(() => {
        if(localStorage.getItem('theme') != null){            
            setTheme(themeVerifier(localStorage.getItem('theme')));
            localStorage.setItem('theme', themeVerifier(localStorage.getItem('theme')));
        } else{
            if(window.matchMedia('(prefers-color-scheme: dark)').matches){
                setTheme('dark');
                localStorage.setItem('theme', 'dark');
            } else{
                localStorage.setItem('theme', 'light');
            }
        }
    },[]);

    return (
        <ThemeContext.Provider value={{
            theme: String(theme),
            setTheme: setTheme as any
        }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;