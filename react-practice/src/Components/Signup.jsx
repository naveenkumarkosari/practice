import { useRef } from "react"



export function UseRefPractice() {
  const nameRef = useRef()
  const pwdRef = useRef()

  function handleClick() {
    const name = nameRef.current.value
    const pwd = pwdRef.current.value
    nameRef.current.value = ""
    pwdRef.current.value = ""
    nameRef.current.focus()
    console.log("name", name, "password", pwd)
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "50vw", paddingLeft: "20vw" }}>
      <p>Signup</p>
      <input ref={nameRef} placeholder="username" type="text" style={{ padding: "10px", marginBottom: "1vh", borderRadius: "10px" }}></input>
      <input ref={pwdRef} placeholder="password" type="text" style={{ padding: "10px", marginBottom: "1vh", borderRadius: "10px" }}></input>
      <button style={{ padding: "10px", marginBottom: "1vh", borderRadius: "10px" }} onClick={handleClick}>create</button>
    </div>)
}
