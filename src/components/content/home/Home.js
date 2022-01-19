import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loading from '../../UI/Loading';
import Thumbnails from '../thumbnails/Thumbnails'

import './Home.scss';

const Home = props => {
    let {timesData} = props;
    let issueData = timesData.Issue;
    let articleData = timesData.articles;
    let shortData = timesData.shorts;
    let comicData = timesData.comics;
    let seriesData = timesData.series;
    let contData = timesData.cont;
    let pieceData = [];
    let randomNum = 0;
    
    let getRandomPiece = () => {
        if (articleData && shortData && comicData && seriesData && contData) {
            pieceData = [...articleData, ...shortData, ...comicData, ...seriesData, ...contData];
            randomNum = Math.floor(Math.random()*pieceData.length);
            return pieceData[randomNum];
        } 
        
    };
    return (
        <div className="home">
            <h1>Home</h1>
            
            {!issueData ? <Loading /> :
            <>
            <Container >
                <Row>
                    <Col>
                        <p>Welcome to Issue #{issueData.Edition} of the Neopian Times Archive, where the content of the Neopets newspaper is archived and presented in a modern format.</p>
                    </Col>
                </Row>
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
                <Row>
                    <Thumbnails sectionData={getRandomPiece()} />
                </Row>
                <Row>
                    <Thumbnails sectionData={getRandomPiece()} />
                </Row>
                <Row>
                    <Thumbnails sectionData={getRandomPiece()} />
                </Row>

                
            </Container>
            </>
            }
        </div>
    );
};

export default Home;