import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from './MainPage'
import "./App.css"
import Website from './Components/Website'
import Navbars from './Components/Navbars'
import AvatarMenu from './Components/AvatarMenu'
import Diya from './Components/Diya'
import HomeDecore from './Components/HomeDecore'
import Row from './Components/Row'
import { request } from './Components/api'


function App() {
  return (
    <>
      <div>

        <BrowserRouter>
          <Navbars />
          <HomeDecore />

        </BrowserRouter>







        {/* <Website/> */}

        {/* <BrowserRouter> */}

        {/* <MainPage  /> */}
        {/* </BrowserRouter> */}


      </div>
    </>
  )
}

export default App