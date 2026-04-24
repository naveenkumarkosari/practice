import { Link } from "react-router-dom"
export function PostComponent() {
  return (<>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <p>from post component</p>
      <Link to="/button">Button</Link>
    </div>
  </>
  )
}
