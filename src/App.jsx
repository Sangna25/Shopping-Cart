import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { CartProvider } from './Contexts/CartContext'

function App() {
  return (
    <div className='app'>
      <NavBar>

      </NavBar>

      <main className='content'>
        <CartProvider>
            <Outlet />
        </CartProvider>

      </main>
      
      <Footer>

      </Footer>
    </div>
  )

}

export default App
