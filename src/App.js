import React, { useState } from 'react';
import useGetJobs from './useGetJobs';
import { Container } from '@material-ui/core';
import Job from './Job';
import JobPagination from './JobPagination';

function App() {
  const [ params, setParams ] = useState({});
  const [ page, setPage ] = useState(1);
  const { jobs, loading, error, hasNextPage } = useGetJobs(params, page);

  return (
    <Container className="my-4">
      <h1 className="mb-4">Jobs Listing</h1>
      <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/> 
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
      <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} /> 
    </Container>
  );
}

export default App;
