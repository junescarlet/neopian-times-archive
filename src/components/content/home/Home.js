import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loading from '../../UI/Loading';

import './Home.scss';

const Home = props => {
    let {timesData} = props;
    let issueData = timesData.Issue
    // timesData.Issue.Edition && console.log(timesData.Issue.Edition);
    
    return (
        <div className="home">
            <h1>Home</h1>
            
            {!issueData ? <Loading /> :
            <>
            <Container >
                <Row>
                    <Col>
                        <ul>
                            <li><Link to="archives">Archives</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </Col><Col>   
                        <ul>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/search">Search</Link></li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                    
                        <h2><a href={issueData.Link} >Issue #{issueData.Edition}</a></h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul>
                            <li><Link to="editorial">Editorial</Link></li>
                            <li><Link to="articles">Articles</Link></li>
                            <li><Link to="comics">Comics</Link></li>
                        </ul>
                    </Col><Col>
                        <ul>
                            <li><Link to="shorts">Short Stories</Link></li>
                            <li><Link to="series">New Series</Link></li>
                            <li><Link to="cont">Continued Series</Link></li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                
                
            </Container>
            </>
            }
        </div>
    );
};

export default Home;