import './App.css'
import TopMenu from './TopMenu'
import PhotoSlider from './PhotoSlider'
import Description from './Description'
import DameButton from './DameButton'
import PeroButton from './PeroButton'
import NikButton from './NikButton'

function App() {

  return (
    <>
    <TopMenu></TopMenu>
    <PhotoSlider></PhotoSlider>
    <Description></Description>
    <h5 id='tables-header'>Click to read about each oneshot</h5>
    <DameButton></DameButton>
    <PeroButton></PeroButton>
    <NikButton></NikButton>
    </>
  )
}

export default App
