import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function MainNav() {
    return (
        <Navbar className='px-2' bg="light" expand="lg">

            <Link className='text-decoration-none' to={'/'}><h1 >Chef Hero</h1></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto d-flex gap-3 me-3">
                    <Link className='text-decoration-none text-info-emphasis' to={'/'}>Home</Link>
                    <Link className='text-decoration-none text-info-emphasis' to={'/login'}>Login</Link>
                    <Link className='text-decoration-none text-info-emphasis' to={'/blog'}>Blog</Link>
                    <Link className='text-decoration-none text-info-emphasis' to={'/register'}>Register</Link>
                    <div>Profile</div>

                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
}

export default MainNav;