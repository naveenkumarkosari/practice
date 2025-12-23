import express from "express";
import jwt from "jsonwebtoken"

let Users = []
const app = express();
app.use(express.json())
// app.use(express.urlencoded)
app.post("/signup", function(req, res) {
  console.log("inside")
  const { username, password } = req.body;
  Users.push({ username, password })
  res.status(200).json({ message: "user has been updated susccessfully" })
})

app.post("/signin", function(req, res) {
  const { username, password } = req.body;
  const userFind = Users.find(user => user.username == username);
  if (!userFind) {
    return res.status(200).json({ message: "incorrect credentials" })
  }
  let token = jwt.sign({ username, password }, "NAVEEN_SECRET")
  res.json({ token, userFind })
})

app.get("/me", function(req, res) {
  const token = req.headers["token"]
  console.log(token, "====")
  const decodedRes = jwt.verify(token, "NAVEEN_SECRET")
  res.json({ decodedRes })
})

app.listen(3002, () => {
  console.log("server started at 3002")
})
