import React, { useState } from 'react';
import useGetJobs from '../hooks/useGetJobs';
import { Container } from 'react-bootstrap';
import Job from '../components/Job';
import JobPagination from '../components/JobPagination';
import SearchForm from '../components/SearchForm';
import style from '../style.css';

function Home() {

    const [params, setParams] = useState({});
    const [page, setPage] = useState(1);
    const { jobs, loading, error, hasNextPage } = useGetJobs(params, page);

    return (
        <>
            <div className="container-fluid header">
                <h1 className="mb-4">devjobs</h1>
            </div>
            <Container className="my-4">
                <SearchForm
                    setPage={setPage}
                    setParams={setParams}
                />
                <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
                {loading && <h1>Loading...</h1>}
                {error && <h1>Error. Try Refreshing</h1>}
                <div className="cardsContainer">
                    {jobs.map(job => {
                        return <Job key={job.id} job={job} />
                    })}
                </div>
                <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
            </Container>
        </>
    );
}

export default Home;
