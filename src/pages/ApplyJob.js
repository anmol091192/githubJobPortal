import React from 'react';
import { useLocation } from 'react-router';
import { Container, Card, Row, Col, Image, Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import NavBar from '../components/NavBar';
import style from '../style.css';

export default function ApplyJob() {
    const payload = useLocation();

    return (
        <>
            <NavBar />
            <Container className="my-4">
                <Row className="align-items-center companyName">
                    <Col xs={0} md={3}>
                        <Image width="100" height="80" src={payload.state.company_logo} rounded />
                    </Col>
                    <Col xs={6} md={6}>
                        {payload.state.company}
                    </Col>
                    <Col xs={6} md={3}>
                        <Button variant="primary" href={payload.state.company_url}>Company Site</Button>
                    </Col>
                </Row>
                <Row className="companyDescription justify-content-md-center">
                    <Row className="jobTitle align-items-center">
                        <Col xs={8} md={9} lg={8}>
                            {payload.state.type}
                            <h3>{payload.state.title}</h3>
                            {payload.state.location}
                        </Col>
                        <Col xs={4} md={3} lg={4}>
                            <Button variant="primary" href={payload.state.url}>Apply Now</Button>
                        </Col>
                    </Row>
                    <Row className="jobDescription">
                        <Col>
                            <ReactMarkdown source={payload.state.description} />
                        </Col>
                    </Row>
                </Row>
                <Row className="jobApply">
                    <Col className="mb-2">
                        <h3>How to Apply</h3>
                        <ReactMarkdown source={payload.state.how_to_apply} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
