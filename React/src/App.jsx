import Header from "./components/header/Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from "./pages/home/Homepage"
import Properties from "./pages/properties/Properties"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/property' element={<Properties />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
