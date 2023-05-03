import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import MainNav from '../Components/Navbar';
import Footer from '../Components/Footer';

const Main = () => {
    return (
        <Container>
            {/* header */}
            <MainNav/>
            
            <Outlet />
            <Footer/>
        </Container>
    );
};

export default Main;