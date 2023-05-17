import Header from "./components/header/Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route to />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
