import React from 'react';
import { useLocation } from 'react-router';
import { Container, Card, Row, Col, Image, Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import style from '../style.css';

export default function ApplyJob() {
    const location = useLocation();
    console.log(location);

    return (
        <>
            <div className="container-fluid header">
                <h1 className="mb-4">devjobs</h1>
            </div>
            <Container className="my-4">
                <Row className="align-items-center companyName">
                    <Col xs={4} md={3}>
                        <Image width="100" height="80" src={location.state.company_logo} rounded />
                    </Col>
                    <Col xs={4} md={6}>
                        {location.state.company}
                    </Col>
                    <Col xs={4} md={3}>
                        <Button variant="primary" href={location.state.company_url}>Company Site</Button>
                    </Col>
                </Row>
                <Row className="companyDescription justify-content-md-center">
                    <Row className="jobTitle align-items-center">
                        <Col xs={8} md={9} lg={8}>
                            {location.state.type}
                            <h3>{location.state.title}</h3>
                            {location.state.location}
                        </Col>
                        <Col xs={4} md={3} lg={4}>
                            <Button variant="primary" href={location.state.url}>Apply Now</Button>
                        </Col>
                    </Row>
                    <Row className="jobDescription">
                        <Col>
                            <ReactMarkdown source={location.state.description} />
                        </Col>
                    </Row>
                </Row>
                <Row className="jobApply">
                    <Col className="mb-2">
                        <h3>How to Apply</h3>
                        <ReactMarkdown source={location.state.how_to_apply} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
