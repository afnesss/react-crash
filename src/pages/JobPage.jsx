import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { FaMapMarker } from 'react-icons/fa'

const JobPage = () => {
  const location = useLocation();
  location.pathname
  return (
    <>
      <div className="container m-auto py-6 px-7">
        <Link to="/jobs" className="text-indigo-500">Back to Job Listing</Link>
      </div>

      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6 ">
          <div className="bg-white shadow-md p-6 rounded-xl mb-6">
            <div>
              Full-Time
            </div>
            <div className="text-3xl font-bold mt-4">
              Senior React Developer
            </div>
        <div className="text-orange-700 mt-5 mb-3">
        <FaMapMarker className="inline text-lg mb-1 mr-1"/>
        Boston, MA</div>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="font-bold text-indigo-700 mb-6 text-lg">Job Description</h2>
          <div className="mb-4">We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.</div>
          <h2 className="font-bold text-indigo-700 mb-3 text-lg">Salary</h2>
          <div className="mb-4">$70k - $80K / Year</div>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl mt-6">
            <h2 className="font-bold text-black mb-6 text-xl">Company Info</h2>
            <h2 className=" mb-3 text-2xl">NewTek Solutions</h2>
            <div className="pb-4 border-b">NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment. </div>

            <h2 className="mb-2 text-xl mt-3">Contact Email:</h2>
            <div className="p-2 bg-indigo-100 font-bold">contact@newteksolutions.com</div>

            <h2 className="mb-2 text-xl mt-3">Contact Phone:</h2>
            <div className="p-2 bg-indigo-100 font-bold mb-1">56734-58478-4898</div>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl mt-6">
            <h2 className="font-bold text-black mb-4 text-xl">Manage Job</h2>
            <Link className="bg-indigo-500 m-auto py-2 px-5 rounded-3xl flex container hover:bg-indigo-700 cursor-pointer justify-center font-bold text-white mb-4">Edit Job</Link>

            <Link className="bg-red-500 m-auto py-2 px-5 rounded-3xl flex container hover:bg-red-600 cursor-pointer justify-center font-bold text-white mb-2">Delete Job</Link>
          </div>

          
        </div>


      </section>


    </>
  )
}

export default JobPage
