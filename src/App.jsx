import './App.css'
import Brands from './Components/Brands'
import Header from './Components/Header'
import  Hero  from './Components/Hero'
import { GlobalStyles } from './styles/GlobalStyles'
import Productos from './Components/ProductosDestacados'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <Productos />
      <Footer />
      <GlobalStyles />
    </>
  )
}

export default App
