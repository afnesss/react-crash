// import jobs from '../jobs.json' with {type : 'json'}
/* eslint-disable no-unused-vars */
import JobDiv from './JobDiv'
import  {useState, useEffect} from 'react'
import Spinner from './Spinner';

const Jobs = ({isHome = false}) => {
  // const jobListings = isHome ? jobs.slice(0, 3) : jobs;
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome 
      ? '/api/jobs?_limit=3'
      : '/api/jobs'
      try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setJobs(data)
      } catch (error) {
        console.log('error fetching data: ' + error);
      } finally {
        setLoading(false);
      }

    }
    fetchJobs();
  }, [])
  return (
        <section className="bg-blue-50 pt-10 pb-5">
        <div className="text-center text-3xl font-bold text-indigo-500">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </div>
          {loading? (    
            <div className="flex justify-center mt-10">
            <Spinner loading={loading} />
            </div>) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:container m-auto mt-2 gap-6 p-5">
                {jobs.map((job) => {
                  return (
                    <JobDiv key={job.id} {...job} />
                  )
                })}
            </div>
          )}

        
      </section>
  )
}

export default Jobs
