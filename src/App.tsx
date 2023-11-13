import React from 'react'
import { BrowserRouter ,Route,Routes,Link } from 'react-router-dom'
import"./App.scss"
import Header from './components/Header/Header'
import MovieDetail from './components/MovieDetail/MovieDetail'
import Home from './components/Home/Home'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Footer from './components/Footer/Footer'

function App() {
  return (
<div className="app">
<BrowserRouter>
    <Header/>
<div className="container">
  
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/movie/:imdbID" element={<MovieDetail/>} />
    <Route element={<PageNotFound/>}/>
    </Routes>

    </div>
    </BrowserRouter>
    <Footer/>
</div>
    )
}

export default App