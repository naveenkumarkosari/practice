import {useState} from "react"

export function  ButtonComponent() {
  const [state,setState]=useState(0)

  function changeState(){
    setState(state+1)
    console.log(state,"==state")
  }
  return (
  <div>
<button onClick={changeState}>ClickHere</button>
    </div>
  )
}
