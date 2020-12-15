import React, { useState } from 'react';
import useGetJobs from './useGetJobs';
import { Container } from '@material-ui/core';
import Job from './Job';

function App() {
  const [ params, setParams ] = useState({});
  const [ page, setPage ] = useState(1);
  const { jobs, loading, error } = useGetJobs(params, page);

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
    </Container>
  );
}

export default App;
