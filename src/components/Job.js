import React, { useState } from 'react';
import { Badge, Card, Image } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

export default function Job({ job }) {
    const [ state ] = useState(job);
    let history = useHistory();

    const handleClick = () => {
        history.push("/applyjob", state);
    };


    return (
        <Card className="mb-3 cardWrapper" onClick={handleClick}>
            <Card.Header>
                <Image className="d-none d-md-block job-logo" height="60" width="60" alt={job.company} src={job.company_logo || 'insta.png'} />
            </Card.Header>
            <Card.Body>
                <div className="d-flex justify-content-between jobCardBody">
                    <div>
                        <Card.Title className="cardTitle">
                            {job.title} - <span className="text-muted font-weight-light">{job.company}</span>
                        </Card.Title>
                        <Card.Subtitle className="text-muted mb-2">
                            {new Date(job.created_at).toLocaleDateString()}
                        </Card.Subtitle>
                        <Badge variant="secondary" className="mr-2">
                            {job.type}
                        </Badge>
                        {job.location.split(",").map(el => {
                            return <Badge variant="secondary" className="mr-2" key={el}>{el}</Badge>
                        })}
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}
