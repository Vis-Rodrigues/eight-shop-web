import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
// import { logout } from '../../actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
    const dispatch = useDispatch();

    // const userLogin = useSelector((state) => state.userLogin);
    // const { userInfo } = userLogin;

    // const logoutHandler = () => {
    //     dispatch(logout());
    // };

    return (
        <header>
            <Navbar expand='lg' className='ContainerHeader' collapseOnSelect>
            {/* <Navbar bg='info' variant='info' expand='lg' collapseOnSelect> */}
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand className='TopHeader'>
                        <FontAwesomeIcon icon={faShoppingCart} /> Eight Shop
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <LinkContainer to='/cart'>
                                <Nav.Link>
                                    <FontAwesomeIcon icon={faShoppingCart} /> Carrinho
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
