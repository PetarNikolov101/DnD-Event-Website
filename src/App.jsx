import './App.css'
import TopMenu from './TopMenu'
import PhotoSlider from './PhotoSlider'
import Description from './Description'
import Rules from './Rules'
import Buttons from './Buttons'
import Footer from './Footer'
import { useTranslation } from 'react-i18next'

function App() {
  const[t, i18n] = useTranslation("global")
  var clickToRead = t("click_for_story.click")
  return (
    <>
    <TopMenu></TopMenu>
    <hr></hr>
    <PhotoSlider></PhotoSlider>
    <hr></hr>
    <Description></Description>
    <hr></hr>
    <h4 id='tables-header'>{clickToRead}</h4>
    <Buttons></Buttons>
    <hr></hr>
    <Rules></Rules>
    <hr></hr>
    <Footer></Footer>
    </>
  )
}

export default App
