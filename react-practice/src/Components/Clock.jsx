import { useState, useRef } from "react"

export function Clock() {
  const [currentTime, setTime] = useState(0)
  let timer = useRef()

  function startClock() {
    timer.current = setInterval(function() {
      setTime(c => c + 1)
    }, 1000)
  }
  function stopClock() {
    console.log(timer)
    clearInterval(timer.current)
  }
  return (
    <>
      <p>currentCount:{currentTime}</p>
      <div style={{ display: "flex", flexDirection: 'column' }}>
        <button onClick={startClock}>Start</button>
        <button onClick={stopClock}>stop</button>
      </div>

    </>
  )
}
