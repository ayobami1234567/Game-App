import { useEffect, useState } from 'react'
import Home from './Pages/Home'
import Header from './Components/Header'
import { ThemeContext } from './Context/ThemeContext'
const App = () => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark')
  })
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} ${theme == 'dark' ? 'bg-[#121212] text-white' : null} min-h-[100vh]`}>
        <Header />
        <Home />
      </div>
    </ThemeContext.Provider>
  )
}

export default App