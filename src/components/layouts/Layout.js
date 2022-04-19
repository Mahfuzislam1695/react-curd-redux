import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
    return (
        <>
          <h2>header</h2>
          <Header/>
          <Container>
            {props.children}
            </Container>
          <Footer/>  

        </>
    );
};

export default Layout;