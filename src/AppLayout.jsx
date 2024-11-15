import React, { useState } from 'react'
import { CiLight } from "react-icons/ci";
import { MdOutlineNightlight } from "react-icons/md";
import { Outlet } from 'react-router-dom';

function AppLayout() {
  const [darkMode, setDarkMode] = useState(false);


  return (
  <div className={`${darkMode? "dark min-h-screen" : "min-h-screen"}`}>
      <div className=' bg-secondaryWhite dark:bg-DarkBlue'>
        <header className='bg-White dark:bg-LightBlue text-VeryDarkBlue dark:text-White flex items-center justify-between
        px-[15px] py-[20px] shadow-md'>
          <h1 className='font-bold text-18px'>Where in the world?</h1>
          <div onClick={() => { setDarkMode(!darkMode) }} className='flex items-center gap-2 cursor-pointer'>
            {darkMode ? <CiLight size={25} color='hsl(0, 0%, 100%)' /> : <MdOutlineNightlight size={25} color='hsl(200, 15%, 8%)' />}
            <p>{darkMode ? "Light Mode" : "Dark Mode"}</p>
          </div>
        </header>
        <Outlet darkMode={darkMode} />
      </div>
    </div>
  );
}

export default AppLayout
