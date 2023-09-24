import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { request } from './api';
import Row from './Row';
import Banner from './Banner';
import Shop from './Shop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Works from './Works';
import Award from './Award';
import Stories from './Stories';

import Navbars from './Navbars';


function HomeDecore() {

    return (
        <>
           
           
                <Routes>

                    <Route path='/' element={<Banner />}></Route>

                    <Route path='/shop' element={<Shop />}></Route>
                    <Route path='/works' element={<Works />}></Route>
                    <Route path='/award' element={<Award />}></Route>
                    <Route path='/stories' element={<Stories />}></Route>
                    <Route exect path='/' element={<>
                        <Row title={" all for  mens  "} fetchURL={request.my_api} />
                        <Row title={"all for womens "} fetchURL={request.jewelery} /></>}></Route>



                </Routes>

          






        </>
    )
}

export default HomeDecore;