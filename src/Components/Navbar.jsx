import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink'
import { Button, NavLink } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

function MainNav() {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOUt = () => {
        logOut()
            .then(details => { console.log(details) })
            .catch(error => console.log(error))
    }
    return (
        <nav>
            <Navbar className='px-2' bg="light" expand="lg">
                <Link className='text-decoration-none text-danger' to={'/'}><h1 >Chef Hero</h1></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="ms-auto d-flex align-items-center gap-3 me-3">
                        <Link to={'/'}>Home</Link>
                        <Link to={'/blog'}>Blog</Link>
                        {!user && <Link to={'/login'}>Login</Link>}
                        {!user && <Link to={'/register'}>Register</Link>}
                        {user && <div className='d-flex justify-content-center align-items-center gap-2'>{user?.displayName} <img src={user.photoURL} width={30} height={30} className='rounded-circle' /></div>}
                        {user && <Button 
                        onClick={handleLogOUt}
                        variant='outline-primary'>Logout</Button>}

                    </div>
                </Navbar.Collapse>

            </Navbar>
        </nav>
    );
}

export default MainNav;