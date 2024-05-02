import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import './App.css'
import Contact from '../pages/contact'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/contact' element={<Contact/>} />
                </Routes>
            </BrowserRouter>
            
        </div>
    )
}

export default App
