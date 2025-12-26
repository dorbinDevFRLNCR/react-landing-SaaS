//App.jsx

import React from 'react'
import './App.css'
import Header from './components/header/header'
import Hero from './components/hero/hero'
import Benefits from './components/benefits/benefits'
import Features from './components/features/features'
import Integrations from './components/integrations/integrations'
import Customers from './components/customers/customers'
import Awards from './components/awards/awards'
import Cta from './components/cta/cta'
import Posts from './components/posts/posts'
import Footer from './components/footer/footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Features />
        <Integrations />
        <Customers />
        <Awards />
        <Cta />
        <Posts />
      </main>
      <Footer />
    </>
  )
}

export default App
