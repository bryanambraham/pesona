import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Review from "./components/Review"
import Project from "./components/Project"
import About from "./components/About"


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <About/>
      <Project/>
      <Review/>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
