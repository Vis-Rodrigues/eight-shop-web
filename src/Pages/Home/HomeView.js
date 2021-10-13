import React from 'react';
import './Home.css';

//Importa os componentes do Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

//Importa os componentes
// import BusLineArriveController from '../../Components/BusLineArrive/BusLineArriveController';
// import BusPositionController from '../../Components/BusPosition/BusPositionController';
import Header from '../../Components/Header/Header';
// import Menu from '../../Components/Menu/Menu';
import Footer from '../../Components/Footer/Footer';

import PhotoContextProvider from "../../context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import HeaderCopy from "../../Components/HeaderCopy";
import Item from "../../Components/Image/Item";
import Search from "../../Components/Search";
import NotFound from "../../Components/NotFound/NotFound";

function HomeView(props ) {
    return (
        <Container fluid={true} >
            <Row>
                <Header />
            </Row>
            <Row className="App">
            {/* <Col lg="4" xl="4" md="12" sm="12" xs="12"> */}
                <PhotoContextProvider>
                    <HashRouter basename="/SnapScout">
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
                            render={() => <Redirect to="/mountain" />}
                        />

                        <Route
                            path="/mountain"
                            render={() => <Item searchTerm="mountain" />}
                        />
                        <Route path="/beach" render={() => <Item searchTerm="beach" />} />
                        <Route path="/bird" render={() => <Item searchTerm="bird" />} />
                        <Route path="/food" render={() => <Item searchTerm="food" />} />
                        <Route
                            path="/search/:searchInput"
                            render={props => (
                            <Search searchTerm={props.match.params.searchInput} />
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