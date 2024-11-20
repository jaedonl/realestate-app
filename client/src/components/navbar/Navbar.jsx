import React, {useState, useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';
import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const {currentUser} = useContext(AuthContext)

    return (
        <nav>
            <div className='left'>
                <Link to="/" className='logo'>
                    <img src="/bumpeast_logo_whitetext_no_margin.png" alt="logo" />      
                </Link>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Agents</Link>
            </div>

            <div className='right'>
                {currentUser ? (
                    <div className='user'>
                        <img src={currentUser.avatar || '/noavatar.jpg'} alt="" />
                        <span>{currentUser.username}</span>
                        <Link to='/profile' className='profileButton'>
                            <div className="notification">3</div>
                            <span>Account</span>
                        </Link>
                    </div> 
                )
                    : (
                    <>
                        <Link to="/login">Sign in</Link>
                        <Link to="/register" className='register'>Sign up</Link>
                    </>
                )}
                
                <div className='menuIcon'>
                    <img src="/menu.png" alt="" onClick={() => setOpen((prev) => !prev)} />
                </div>
                <div className={open ? 'menu active' : 'menu'}>
                    <Link to="/">Home</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Contact</Link>
                    <Link to="/">Agents</Link>
                    <Link to="/">Sign in</Link>
                    <Link to="/">Sign up</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
