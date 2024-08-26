// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Videos from './Pages/Videos/Videos'

const App = () => {

    const [sidebar, setSidebar] = useState(true);

    return (
        <div>
            <Navbar setSidebar={setSidebar}/>
            <Routes>
                <Route path='/' element={<Home sidebar={sidebar}/>} />
                <Route path='/videos/:categoryId/:videosId' element={<Videos/>} />
            </Routes>
        </div>
    )
}

export default App