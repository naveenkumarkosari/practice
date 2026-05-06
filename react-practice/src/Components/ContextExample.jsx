import { createContext, useContext, useState } from "react";

const practiceCtx = createContext()

function ContextProvider({ children }) {
  const [count, setCount] = useState(0)
  return <practiceCtx.Provider value={{ count, setCount }}>
    {children}
  </practiceCtx.Provider>
}
export function ContextExample() {
  return <ContextProvider>
    <Increase />
    <Decrease />
    <Value />
  </ContextProvider>

}

function Increase() {
  const { count, setCount } = useContext(practiceCtx)
  return <>
    <button onClick={() => setCount(count + 1)}>Increase</button>
  </>
}
function Decrease() {
  const { count, setCount } = useContext(practiceCtx)
  return <>
    <button onClick={() => setCount(count - 1)}>Decrease</button>
  </>
}

function Value() {
  const { count } = useContext(practiceCtx)
  return <><h3>{count}</h3></>
}
