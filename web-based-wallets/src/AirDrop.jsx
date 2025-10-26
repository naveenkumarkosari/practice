import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
function AirDrop() {
  const [number, setNumber] = useState(0)
  const [balance, setBalance] = useState(0)
  const wallet = useWallet()
  const { connection } = useConnection()
  async function RenderBalance() {
    const lamports = await connection.getBalance(wallet.publicKey)
    console.log(lamports, lamports / Math.pow(10, 9), "====lamports=====")
    setBalance(lamports / Math.pow(10, 9))
  }
  async function sendAirDropToUser() {
    await connection.requestAirdrop(wallet.publicKey, Number(number) * Math.pow(10, 9))
    alert(`${number} is air dropped`)
  }
  const handleChange = (e) => {
    setNumber(e.target.value)
  }

  useEffect(() => {
    RenderBalance()
  }, [connection, wallet.publicKey])
  return (
    <>
      <input type="number" placeholder="enter Amount" onChange={(e) => handleChange(e)} />
      <button onClick={sendAirDropToUser}>Send AirDrop</button>
      <span style={{ display: "flex" }}>
        <p>Balance:</p>
        <p style={{ color: "green", fontWeight: "800px" }}>{balance}</p>
      </span>
    </>
  )
}

export default AirDrop;
