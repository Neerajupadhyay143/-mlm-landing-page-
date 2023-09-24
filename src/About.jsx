import React, { useEffect, useState } from 'react'

function About() {


    const [description, setDescription] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products').then((response) => response.json()).then((data) => {
            console.log(data.products)
            setDescription(data.products)

        })
    }, [])
    return (
        <div style={{ background: '#b1e4ff', padding: '0px', height: '100vh' }}>
            <h1>Descriptions</h1>

            {description.map((val, index) => {
                return (<>
                    <div key={index}>
                        <h3>{val.description}</h3>
                    </div>

                </>)
            })}
        </div>
    )
}

export default About