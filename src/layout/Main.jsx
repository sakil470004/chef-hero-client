import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <Container>
            {/* header */}
            
            this is main layout
            <Outlet />
            {/* footer */}
        </Container>
    );
};

export default Main;