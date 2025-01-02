import './App.css'
import Header from './Header'
import Paragraph1 from './Paragraph1'
import Section from './Section'
import Paragraph2 from './Paragraph2'
import Footer from './Footer'
import Blurdiv from './Blurdiv'
import Player from './Player'
import { useContext } from 'react'
import { MyContext } from './Context'

function App() {

  const{play}=useContext(MyContext)
  
  return (
    <>
      <Header/>
      <Paragraph1/>
      {play==="on" && <Player/>}
      <Section/>
      <Blurdiv/>
      <Paragraph2/>
      <Footer/>
    </>
  )
}

export default App
