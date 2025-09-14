/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"
import { useParams, useLoaderData } from "react-router-dom"
import {useState, useEffect} from 'react'
import { FaMapMarker, FaArrowLeft } from 'react-icons/fa'
// import Spinner from "../components/Spinner"
import WhiteBox from "../components/jobPage/WhiteBox"
import Button from "../components/Button"


const JobPage = () => {
  // const {id} = useParams();
  const job = useLoaderData();
  // const [job, setJob] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchJob = async() => {
  //     try {
  //       const res = await fetch(`/api/jobs/${id}`);
  //       const data = await res.json();
  //       setJob(data);
  //     } catch (error) {
  //       console.log('error fetching job ' + error)
  //     }
  //     finally{
  //       setLoading(false);
  //     }

  //   }
  //   fetchJob();
  // }, [id])

  return (
    <>
    
      <div className="container m-auto py-6 px-7">
        
        <Link to="/jobs" className="text-indigo-500 flex flex-row"><FaArrowLeft className="text-xl mr-2 mt-0.5" /> Back to Job Listing</Link>
      </div>(
              <>
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6 ">
          <WhiteBox>
            <div>
              {job.type}
            </div>
            <div className="text-3xl font-bold mt-4">
              {job.title}
            </div>
        <div className="text-orange-700 mt-5 mb-3">
        <FaMapMarker className="inline text-lg mb-1 mr-1"/>
        {job.location}</div>
          </WhiteBox>

          <WhiteBox>
          <h2 className="font-bold text-indigo-700 mb-6 text-lg">Job Description</h2>
          <div className="mb-4">{job.description}</div>
          <h2 className="font-bold text-indigo-700 mb-3 text-lg">Salary</h2>
          <div className="mb-4">{job.salary}</div>
          </WhiteBox>

          <WhiteBox>
            <h2 className="font-bold text-black mb-6 text-xl">Company Info</h2>
            <h2 className=" mb-3 text-2xl">{job.company.name}</h2>
            <div className="pb-4 border-b">{job.company.description}</div>

            <h2 className="mb-2 text-xl mt-3">Contact Email:</h2>
            <div className="p-2 bg-indigo-100 font-bold">{job.company.contactEmail}</div>

            <h2 className="mb-2 text-xl mt-3">Contact Phone:</h2>
            <div className="p-2 bg-indigo-100 font-bold mb-1">{job.company.contactPhone}</div>
          </WhiteBox>

          <WhiteBox>
            <h2 className="font-bold text-black mb-4 text-xl">Manage Job</h2>
            <Button path='/edit-job' title="Edit Job" bg="bg-indigo-500 hover:bg-indigo-700"/>

            <Button path='/edit-job' title="Delete Job" bg="bg-red-500 hover:bg-red-600"/>

          </WhiteBox>

          
        </div>


      </section>
    </>
    )
    </>
  )
}

const jobLoader = async ({params}) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
}

export {JobPage as default, jobLoader};
