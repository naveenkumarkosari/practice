import { useState } from "react";


function useCounter() {
  const [count, setCount] = useState(0)

  function increase() {
    setCount(count + 1)
  }
  return {
    count: count,
    increase: increase
  }
}

function IncreaseCount() {
  const { count, increase } = useCounter()
  return <>
    <button onClick={() => increase()}>Increase:{count}</button>
  </>
}

export function CustomHookExmaple() {
  return (
    <>
      <IncreaseCount />
      <br />
      <IncreaseCount />

    </>
  )
}
