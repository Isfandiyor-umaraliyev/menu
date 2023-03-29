import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import AllMenu from './pages/AllMenu'
import Breakfast from './pages/Breakfast'
import Lunch from './pages/Lunch'
import Shakes from './pages/Shakes'
import './App.css'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<AllMenu/>}/>
        <Route path='/breakfast' element={<Breakfast/>} />
        <Route path='/lunch' element={<Lunch/>} />
        <Route path='/shakes' element={<Shakes/>} />
      </Routes>
    </Router>
  )
  
}
export default App
