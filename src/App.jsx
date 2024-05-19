import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopMenu from './TopMenu'
import PhotoSlider from './PhotoSlider'
import Description from './Description'




function App() {

  return (
    <>
    <TopMenu></TopMenu>
    <PhotoSlider></PhotoSlider>
    <Description></Description>
    </>
  )
}

export default App
