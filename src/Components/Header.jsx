import logo from "../assets/Images/logo1.png"
import { HiOutlineMagnifyingGlass } from "react-icons/hi2"
import { HiMoon, HiSun } from "react-icons/hi"
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../Context/ThemeContext"
const Header = () => {
  // const [toggle, setToggle] = useState(true)
  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    console.log("Theme", theme)
  }, [])
  return (
    <div className="flex items-center p-3">
      <img src={logo} width={60} height={60} alt="" />
      <div className="flex bg-slate-200 p-2 w-full mx-5  rounded-full items-center">
        <HiOutlineMagnifyingGlass />
        <input type="text" placeholder="Search Game" className=" px-2 bg-transparent  outline-none w-full " />
      </div>

      <div>

        {/* instead of toggle replace it with the theme  */}
        {theme == 'light' ?
          <HiMoon className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer" onClick={() => { setTheme('dark'); localStorage.setItem("theme", 'dark') }} /> :
          <HiSun onClick={() => { setTheme('light'); localStorage.setItem("theme", 'light') }} className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer" />
        }

      </div>
    </div>
  )
}

export default Header