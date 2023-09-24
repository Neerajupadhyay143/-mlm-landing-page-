import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    return (
        <div style={{ boxShadow: '0px 0px 20px -6px', background: '#fffde9', display: 'flex', justifyContent: 'space-around' }}>
            <h1 onClick={() => navigate('/Home')} style={{ cursor: 'pointer' }}>Home </h1>
            <h1 onClick={() => navigate('/About')} style={{ cursor: 'pointer' }}>About US </h1>
            <h1 onClick={() => navigate('/Help')} style={{ cursor: 'pointer' }}>Help </h1>
            <h1 onClick={() => navigate('/Contact')} style={{ cursor: 'pointer' }}>Contact </h1>
            <h1 onClick={() => navigate('/Blogs')} style={{ cursor: 'pointer' }}>Blogs</h1>


        </div>

    )
}

export default Navbar;