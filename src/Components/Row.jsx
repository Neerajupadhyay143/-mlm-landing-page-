import { Card } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./Styles Folder/Row.css"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import axios from 'axios';
import { request } from './api';


function Row({ title, fetchURL }) {

    const [data, setData] = useState([]);
    useEffect(() => {

        axios.get(fetchURL, request)
            .then(function (response) {
                console.log(response.data)
                setData(response.data)
            }).catch(function (error) {
                console.log('Error', error)
            })
    }, [])


    return (
        <>
            <h1>{title}</h1>
            <div className=' d-flex body-here '  >
                {
                    data.map((val, index) => {
                        return <>

                            <div>
                                <div className="card mx-2">

                                    <div>
                                        <div className=" mx-5 card-image">
                                            <img src={val.image} alt="images" height="250px" width="200px" />
                                        </div>

                                        <div className=" mx-2 card-title">

                                            <h3 className='title' >{val.title}</h3>
                                        </div>
                                        <div className=" mx-2 description">
                                            <Stack spacing={1}>

                                                <Rating name="half-rating-read" defaultValue={val.rating.rate} precision={0.5} readOnly />
                                            </Stack>
                                        </div>

                                        <div className="price">

                                            <h3>
                                                < CurrencyRupeeIcon />
                                                {val.price}
                                            </h3>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </>
                    })
                }
            </div>

        </>
    )
}

export default Row