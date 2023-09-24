import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Help from './Help';
import Contact from './Contact';
import Blogs from './Blogs';

function MainPage() {
    return (
        <div>
            <Navbar />

            <Routes>
                <Route path='/Home' element={<Home />}></Route>
                <Route path='/About' element={<About />}></Route>
                <Route path='/Help' element={<Help />}> </Route>
                <Route path='/Contact' element={<Contact />}></Route>
                <Route path='/Blogs' element={<Blogs />}></Route>
            </Routes>

        </div>
    )
}

export default MainPage;