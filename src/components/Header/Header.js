import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, Container, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {

    return (
        <header>
            <Navbar className='ContainerHeader' collapseOnSelect>
                <Container>
                    <LinkContainer to='/' className='TopHeader'>
                        <Navbar.Brand className='TopHeader'>
                        <Image src={logo} alt="Logo eight shop" fluid rounded className="logo-image" /> Eight Shop
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <LinkContainer to='/cart'>
                                <Nav.Link className="TopHeaderRight">
                                     Carrinho <FontAwesomeIcon icon={faShoppingCart} />
                                </Nav.Link> 
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
