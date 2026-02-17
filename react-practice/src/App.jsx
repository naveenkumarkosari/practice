import { useState } from 'react'
import './App.css'
import {PostComponent} from "./Components/PostComponent.jsx"

function App() {
  return (
    <>
      <div style={{display:"flex",flexDirection:"horizental"}}>
      <p>naveen kumar kosari</p>
      <p style={{ marginLeft:"auto"}}>profile</p>
      </div>
           <PostComponent/>
    </>
  )
}

export default App
