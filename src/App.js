import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/partials/header/header'
import { Footer } from './components/partials/footer/footer'
import { Main } from './components/partials/main/main'
import { Home } from './components/pages/home/home'
import { About } from './components/pages/about/about'

function App() {
  return (
    <div className="App">
     <Router>
       <Header />
       <Main>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
       </Main>
       <Footer />
     </Router>
    </div>
  )
}

export default App;
