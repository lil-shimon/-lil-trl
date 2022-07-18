import axios from "axios"
import { useState } from "react"

export const useMockServer = () => {
  const [clicked, setClicked] = useState(false)
  const [username, setUsername] = useState("")
  const [error, setError] = useState("")

  const fetchUser = async () => {
    await axios.get("https://jsonplaceholder.typicode.com/users/1").then((res) => {
      const {username} = res.data
      setUsername(username)
      setClicked(true)
    }).catch(() => {
      setError("fetch failed")
    })
  }

  const btnText = clicked ? "Loaded" : "Start fetch"

  return {username, error, btnText, clicked, fetchUser}
}