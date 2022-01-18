import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Header } from './components/partials/header/header'
import { Footer } from './components/partials/footer/footer'
import { Main } from './components/partials/main/main'

import { Home } from './components/pages/home/Home'
import { About } from './components/pages/about/About'
import { Products } from './components/pages/products/Products'
import { Contacts } from './components/pages/contacts/Contacts'

export function App() {
  return (
    <div className="App">
     <Router>
       <Header />
       <Main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
       </Main>
       <Footer />
     </Router>
    </div>
  )
}

