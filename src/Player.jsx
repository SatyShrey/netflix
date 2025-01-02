import { useContext } from "react"
import { MyContext } from "./Context"


function Player(){

    const{setPlay,link}=useContext(MyContext)

  return(
    <div className="player">
            <iframe src={"https://www.youtube.com/embed/"+link} allowFullScreen></iframe>
            <br />
            <button onClick={()=>{setPlay('off')}} className='back'>❌</button>
        </div>
  )
}

export default Player