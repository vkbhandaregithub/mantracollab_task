import Header from "./components/header/Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from "./pages/home/Homepage"
import Properties from "./pages/properties/Properties"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Homepage />
        <Properties />
        <Routes>
          <Route to />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
