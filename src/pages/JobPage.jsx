import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import {useState, useEffect} from 'react'
import { FaMapMarker } from 'react-icons/fa'
import Spinner from "../components/Spinner"

const JobPage = () => {
  const location = useLocation();
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async() => {
      try {
        const id = location.pathname.split("/").pop(); // якщо url = /jobs/1 → id = 1
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.log('error fetching job ' + error)
      }
      finally{
        setLoading(false);
      }

    }
    fetchJob();
  }, [location.pathname])

  return (
    <>
    
      <div className="container m-auto py-6 px-7">
        <Link to="/jobs" className="text-indigo-500">Back to Job Listing</Link>
      </div>

         {loading? (    
            <div className="flex justify-center mt-10">
            <Spinner loading={loading} />
            </div>) : (
              <>
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6 ">
          <div className="bg-white shadow-md p-6 rounded-xl mb-6">
            <div>
              {job.type}
            </div>
            <div className="text-3xl font-bold mt-4">
              {job.title}
            </div>
        <div className="text-orange-700 mt-5 mb-3">
        <FaMapMarker className="inline text-lg mb-1 mr-1"/>
        {job.location}</div>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="font-bold text-indigo-700 mb-6 text-lg">Job Description</h2>
          <div className="mb-4">{job.description}</div>
          <h2 className="font-bold text-indigo-700 mb-3 text-lg">Salary</h2>
          <div className="mb-4">{job.salary}</div>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl mt-6">
            <h2 className="font-bold text-black mb-6 text-xl">Company Info</h2>
            <h2 className=" mb-3 text-2xl">{job.company.name}</h2>
            <div className="pb-4 border-b">{job.company.description}</div>

            <h2 className="mb-2 text-xl mt-3">Contact Email:</h2>
            <div className="p-2 bg-indigo-100 font-bold">{job.company.contactEmail}</div>

            <h2 className="mb-2 text-xl mt-3">Contact Phone:</h2>
            <div className="p-2 bg-indigo-100 font-bold mb-1">{job.company.contactPhone}</div>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl mt-6">
            <h2 className="font-bold text-black mb-4 text-xl">Manage Job</h2>
            <Link className="bg-indigo-500 m-auto py-2 px-5 rounded-3xl flex container hover:bg-indigo-700 cursor-pointer justify-center font-bold text-white mb-4">Edit Job</Link>

            <Link className="bg-red-500 m-auto py-2 px-5 rounded-3xl flex container hover:bg-red-600 cursor-pointer justify-center font-bold text-white mb-2">Delete Job</Link>
          </div>

          
        </div>


      </section>
    </>
    )}
    </>
  )
}

export default JobPage
