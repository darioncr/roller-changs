import React from 'react'
import FormularioDonaciones from './components/FormularioDonaciones'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Rodadas from './components/Rodadas'
import Rollers from './components/Rollers'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Rodadas/>
      <Rollers/>
      <FormularioDonaciones/>
      <Footer/>
    </div>
  )
}

export default App
