import React from 'react';
import './Home.css';

//Importa os componentes do Bootstrap
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import PhotoContextProvider from "../../context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import HeaderCopy from "../../Components/SearchProduct/ProductSearchController";
import Item from "../../Components/ProductImage/Item";
import NotFound from "../../Components/NotFound/NotFound";

function HomeView(props ) {
    return (
        <Container fluid={true} >
            <Row>
                <Header />
            </Row>
            <Row>
                <h1>Lista de Produtos</h1>
            </Row>
            <Row className="App">
            {/* <Col lg="4" xl="4" md="12" sm="12" xs="12"> */}
                <PhotoContextProvider>
                    <HashRouter basename="/eightshop">
                    <div className="container">
                        <Route
                        render={props => (
                            <HeaderCopy
                            handleSubmit={props.handleSubmit}
                            history={props.history}
                            />
                        )}
                        />
                        <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <Redirect to="/vegano" />}
                        />

                        <Route
                            path="/vegano"
                            render={() => <Item searchTerm="vegano" />}
                        />
                        <Route path="/sem-gluten" render={() => <Item searchTerm="sem-gluten" />} />
                        <Route path="/vegetariano" render={() => <Item searchTerm="bird" />} />
                        <Route
                            path="/search/:searchInput"
                            render={props => (
                            <Item searchTerm={props.match.params.searchInput} />
                            )}
                        />
                        <Route component={NotFound} />
                        </Switch>
                    </div>
                    </HashRouter>
                </PhotoContextProvider>
            </Row>
            <Row>
                {/* <Col lg="4" xl="4" md="12" sm="12" xs="12">
                    <BusLineArriveController />
                </Col>
                <Col lg="8" xl="8" md="12" sm="12" xs="12">
                    <BusPositionController />
                </Col> */}
            </Row>
            <Row >
                <Footer />
            </Row> 
        </Container>      
    );
}

export default HomeView;