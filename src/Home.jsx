import { padding } from '@mui/system';
import React, { useEffect, useState } from 'react'

function Home() {

    const [title, setTitle] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products').then((response) => response.json()).then((data) => {
            console.log(data.products) // taki console me dikha sekhe thik h ?
            setTitle(data.products) // taki data ko store kr ske thik h ?

        })
    }, [])

    return (
        <div style={{ background: '#b1e4ff', padding: '0px', height: '100vh' }} ><div>
            <h1>Title</h1>

            {title.map((val, index) => {
                return (<>
                    <div key={index}>
                        <h3>{val.title}</h3>
                    </div>

                </>)
            })}

        </div>

        </div>
    )
}

export default Home;