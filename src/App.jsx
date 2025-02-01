import React, { useState } from "react"
import Header from "./components/Header"
import Center from "./components/Center"


function App() {
  const [boardModalOpen, setBoardModalOpen] = useState(false)


  return (
    <div>

      {/* header section  */}
      <Header boardModalOpen = {boardModalOpen} setBoardModalOpen = {setBoardModalOpen}/>




      {/* center section */}
      <Center/>

    </div>
  )
}

export default App
