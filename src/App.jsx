import './App.css'
import TopMenu from './TopMenu'
import PhotoSlider from './PhotoSlider'
import Description from './Description'
import Rules from './Rules'
import Buttons from './Buttons'

function App() {

  return (
    <>
    <TopMenu></TopMenu>
    <PhotoSlider></PhotoSlider>
    <Description></Description>
    <hr></hr>
    <h5 id='tables-header'>Click to read about each oneshot</h5>
    <Buttons></Buttons>
    <hr></hr>
    <Rules></Rules>
    </>
  )
}

export default App
