import Header from "./components/header/Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from "./pages/home/Homepage"
import Properties from "./pages/properties/Properties"
import Testi from "./pages/testimonials/Testi"
import Contact from "./pages/contact/Contact"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/property" element={<Properties />} />
          <Route path="/testimonials" element={<Testi />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
