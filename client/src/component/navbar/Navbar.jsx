import { useContext, useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const {currentUser} = useContext(AuthContext)
    
    return (
        <nav>
            <div className="left">
                <Link href='/' className='logo'>
                    <img src="logo.png" alt="" />
                    <span>Real Estate</span>
                </Link>
                <Link href='/'>Home</Link>
                <Link href='/'>About</Link>
                <Link href='/'>Contact</Link>
                <Link href='/'>Agents</Link>
            </div>
            <div className="right">
                {currentUser ? (
                        <div className='user'>
                            <img src={currentUser.avatar || "/noavatar.jpg"} alt=''/>
                            <span>{currentUser.username}</span>
                            <Link to='/profile' className='profile'>
                                <div className="notification">4</div>
                                    <span>profile</span>
                            </Link>
                        </div>
                        ) : (
                        <>
                            <Link to='/register'>Register</Link>
                            <Link to='/login' className='sign'>Login</Link>
                        </>
                )}
                <div className="menuicon">
                    <img
                        src='/menu.png'
                        alt=''
                        onClick={() => setIsOpen((prev) => !prev)}
                    />
                </div>
                <div className={isOpen ? "menu active" : "menu"}>
                <Link href='/'>Home</Link>
                <Link href='/'>About</Link>
                <Link href='/'>Contact</Link>
                <Link href='/'>Agents</Link>
                <Link href='/'>Register</Link>
                <Link href='/'>Login</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;