import React, { useEffect, useState } from 'react'

function Help() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://dummy.restapiexample.com/api/v1/employees').then((response) => response.json()).then((data) => {
            console.log(data.data);
            setData(data.data)
        })
    }, [])
    return (
        <div style={{ background: '#b1e4ff', padding: '0px', height: '100vh' }}>
            <div style={{ display: 'flex', fontSize: '10px', justifyContent: 'space-around' }}>


                <div>
                    <h1>Employee id</h1>
                    <div>

                    </div>
                </div>
                <div>
                    <h1>Employee Name</h1>

                </div>
                <div>
                    <h1>Employee Salary</h1>

                </div>
                <div>
                    <h1>Employee Age</h1>

                </div>
            </div>

            {data.map((val, index) => {
                return (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'space-around', alignContent: 'center' }}>

                            <div key={index}>
                                {val.id}

                            </div>
                            <div>
                                {val.employee_name}
                            </div>

                            <div>
                                {val.employee_salary}
                            </div>

                            <div>
                                {val.employee_age}
                            </div>
                        </div>


                    </>
                )
            })}

        </div>
    )
}

export default Help;