import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopMenu from './TopMenu'
import PhotoSlider from './PhotoSlider'
import Description from './Description'
import DameButton from './DameButton'




function App() {

  return (
    <>
    <TopMenu></TopMenu>
    <PhotoSlider></PhotoSlider>
    <Description></Description>
    <DameButton></DameButton>
    </>
  )
}

export default App
