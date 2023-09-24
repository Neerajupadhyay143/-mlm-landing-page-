import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, Menu, MenuItem, DialogTitle, IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import "./Styles Folder/Nav.css"
import MenuIcon from '@mui/icons-material/Menu'; // Import the menu icon
import { useNavigate } from 'react-router-dom';
function Navbars() {

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState("");
    const [show, handleshow] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false); // State for controlling the responsive menu
    const handleOpen = () => {
        setOpen(true)
    }

    // Step 4: Create function to handle dialog close
    const handleClose = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setUsername('');
        setPassword('');
        handleClose();
    };

    const handleLogin = () => {

    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleshow(true);
            } else {
                handleshow(false);
            }
        })
    }, [])

    return (

        <>
            <div className="home-decor-main-container">
                <div className={`main-container ${show && 'nav-change-color'}`}>
                    <div className="nav-left-header">
                        <div className="mx-5 main-name">
                            <h1 onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Home Decor</h1>
                        </div>

                        <div className="nav-left-header-text">
                            <div onClick={() => navigate('/Works')} className="m-2 how-it-works">HOW IT WORKS</div>
                            <div onClick={() => navigate('/stories')} className="m-2 stories">STORIES</div>
                            <div onClick={() => navigate('/explor')} className="m-2 explor">EXPLORE</div>
                            <div onClick={() => navigate('/award')} className="m-2 design-award">DESIGN AWARDS</div>
                            <div onClick={() => navigate('/shop')} className="m-2 shop">SHOP</div>
                        </div>
                    </div>

                    <div className="nav-right-header">
                        <div className="mx-5 d-flex input">
                            <SearchIcon />
                            <div>
                                <input className="nav-input" />
                            </div>
                        </div>
                        <div className="login">
                            <button className="px-3 p-2 mx-2 button" onClick={handleOpen}>
                                LOGIN
                            </button>
                        </div>
                        <div className="get-started">
                            <button className="px-3 p-2 mx-2 button-2">GET STARTED</button>
                        </div>
                        {/* Add the menu icon and toggleMenu handler */}
                        <IconButton
                            className="menu-icon"
                            onClick={toggleMenu}
                            sx={{ display: { sm: 'block', md: 'none' } }} // Hide on medium and larger screens
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* Define the responsive menu */}
                        <Menu
                            anchorEl={null}
                            open={menuOpen}
                            onClose={() => setMenuOpen(false)}
                            sx={{ marginTop: '48px' }} // Adjust the menu position as needed
                        >
                            <MenuItem onClick={() => setMenuOpen(false)}>HOW IT WORKS</MenuItem>
                            <MenuItem onClick={() => setMenuOpen(false)}>STORIES</MenuItem>
                            <MenuItem onClick={() => setMenuOpen(false)}>EXPLORE</MenuItem>
                            <MenuItem onClick={() => setMenuOpen(false)}>DESIGN AWARDS</MenuItem>
                            <MenuItem onClick={() => setMenuOpen(false)}>SHOP</MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
            <Dialog sx={{}} open={open} onClose={handleClose}>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                    <div>
                        <TextField
                            sx={{ marginBottom: '12px', width: '100%' }}
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleLogin} color="primary">
                        Login
                    </Button>
                </DialogActions>
            </Dialog>
        </>


    )
}

export default Navbars