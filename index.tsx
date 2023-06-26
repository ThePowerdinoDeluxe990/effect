import {useState, useEffect} from "react";


function App(){
    const [text, setText]= useState("")
    const [number,setNumber]= useState(0)

    useEffect(function(){
        console.log("hola pablo")
    },[number])

    return(
        <div>
            <input onChange={e=> setText(e.target.value)}/>
            <button onClick={function(){
                alert("El mensaje es: " + text)
            }}>
                guardar
            </button>

            <hr/>
            <h1>Counter: {number}</h1>
            <button onClick={()=>setNumber(number+1)}>
               
            
            
            
                incrementar
            </button>
        </div>

    )
}

export default App