import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink'
import { NavLink } from 'react-bootstrap';

function MainNav() {
    return (
        <nav>
            <Navbar className='px-2' bg="light" expand="lg">
                <Link className='text-decoration-none text-danger' to={'/'}><h1 >Chef Hero</h1></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="ms-auto d-flex gap-3 me-3">
                        <Link to={'/'}>Home</Link>
                        <Link to={'/blog'}>Blog</Link>
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/register'}>Register</Link>
                        <div>Profile</div>

                    </div>
                </Navbar.Collapse>

            </Navbar>
        </nav>
    );
}

export default MainNav;