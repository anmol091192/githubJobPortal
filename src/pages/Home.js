import React, { useState,useMemo } from 'react';
import useGetJobs from '../hooks/useGetJobs';
import { Container } from 'react-bootstrap';
import Job from '../components/Job';
import SearchForm from '../components/SearchForm';
import NavBar from '../components/NavBar';
import { Button } from 'react-bootstrap';

function Home() {

    const [params, setParams] = useState({});
    const [ visible,setVisible ] = useState(6);
    const { jobs, loading, error } = useGetJobs(params);

    const showMoreItems = () => {
        setVisible((preValue) => preValue + 6);
    }


    return (
        <>
            <NavBar />
            <Container className="my-4 jobContainer">
                <SearchForm
                    setParams={setParams}
                />
                {loading && <h1>Loading...</h1>}
                {error && <h1>Error. Try Refreshing</h1>}
                <div className="cardsContainer">
                    {jobs.slice(0,visible).map(job => {
                        return <Job key={job.id} job={job} />
                    })}
                </div>
                { visible <= jobs.length && <Button className="buttonClass" onClick={showMoreItems}>Load More</Button> }
            </Container>
        </>
    );
}

export default Home;
