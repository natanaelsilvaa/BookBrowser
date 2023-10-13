import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './router/home/Home'
import Abount from './router/abount/Abount'
import NavBar from './components/navLink/NavBar'
import Detail from './router/detail/Detail'
import Search from './router/search/Search'


function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Abount' element={<Abount />}/>
          <Route path='/books/:id/' element={<Detail />}/>
          <Route path='/Search' element={<Search />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
