import { PostComponent } from "./Components/PostComponent.jsx"
import { ButtonComponent } from "./Components/ButtonComponent.jsx"
import { BrowserRouter, Routes, Route, useNavigate, Outlet } from "react-router-dom";
import { UseRefPractice } from "./Components/Signup.jsx";
import { Clock } from "./Components/Clock.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />} >
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostComponent />} />
            <Route path="/button" element={<ButtonComponent />} />
            <Route path="/create" element={<UseRefPractice />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />} >
            <Route index element={<Home />} />
            <Route path="posts" element={<PostComponent />} />
            <Route path="button" element={<ButtonComponent />} />
            <Route path="clock" element={<Clock />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <buttoncomponent/> */}
    </>
  )
}

function Home() {
  const navigate = useNavigate()
  function redirect() {
    navigate("/posts")
  }
  return (
    <>
      <div style={{ display: "flex", flexdirection: "horizental" }}>
        <p>naveen kumar kosari</p>
        {/* <p style={{ marginleft: "auto" }}>profile</p> */}
        <button onClick={redirect}>Posts</button>
      </div>
    </>
  )
}

function NotFound() {
  return (
    <>
      <p>page not found</p>
    </>
  )
}
function MainLayout() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "horizental", justifyContent: "space-evenly" }}>
        <p>Home</p>
        <p>Posts</p>
        <p>break</p>
      </div>
      <main>
        <Outlet />
      </main>
      <div style={{ display: "flex", flexDirection: "horizental", justifyContent: "space-evenly" }}>
        <p>Footer1</p>
        <p>Footer2</p>
        <p>Footer3</p>
      </div>
    </>
  )
}
function AdminLayout() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "horizental", justifyContent: "space-evenly" }}>
        <p>Home</p>
        <p>Posts</p>
        <p>break</p>
        <p style={{ border: "1px solid blue", padding: "10px", borderRadius: "10px" }}>Admin</p>
      </div>
      <main>
        <Outlet />
      </main>
      <div style={{ display: "flex", flexDirection: "horizental", justifyContent: "space-evenly" }}>
        <p>Footer1</p>
        <p>Footer2</p>
        <p>Footer3</p>
      </div>
    </>
  )
}

export default App;
