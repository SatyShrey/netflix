
import { useContext } from 'react'
import Category from './Categories'
import { MyContext } from './Context'

function Section() {

    const{setPlay,setLink}=useContext(MyContext)

    return (
        <section>
            {
                Category.map(data => <div className="Category" key={data.Nam}>
                    <h2>{data.Nam}</h2>
                    <div className="cards">
                    {data.items.map(item => <div className="item" key={item.title} onClick={()=>{
                        if(item.link){
                            setLink(item.link)
                        }else{setLink('Oi7hJgH0sKw')}
                        setPlay('on');
                        }}>
                        <img src={item.img}/>
                        <p>{item.title}</p>
                    </div>)}
                    </div>
                </div>)
            }
        </section>
    ) 

}

export default Section