import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './Contexts/themeContext'
import ThemeBtn from './Components/Themebtn'
import Card from './Components/Card'


function App() {

  const [themeMode, setThemeMode] = useState("light")
  const lightMode = () => setThemeMode("light")
  const darkMode = () => setThemeMode("dark")

  useEffect(() => {
    const element = document.querySelector("html");
    // console.log(element);
    element.classList.remove("dark","light");

    element.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{themeMode,lightMode, darkMode}}> 
    <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
    </ThemeProvider>
  )
}

export default App
