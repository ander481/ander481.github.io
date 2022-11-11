import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Layouts
import Navbar from './layouts/Navbar'

// Pages
import Home from './pages/Home'
import About from './pages/About'

// Styles
import './assets/styles/main.css'




function App() {
  return (
    <>
      <Suspense>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>

        </Router>
      </Suspense>
    </>
  )
}




export default App;
