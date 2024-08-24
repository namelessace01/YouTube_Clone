// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Videos from './Pages/Videos/Videos'

const App = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/videos/:categoryId/:videosId' element={<Videos/>} />
            </Routes>
        </div>
    )
}

export default App