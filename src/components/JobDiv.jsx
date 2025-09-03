import { Link } from 'react-router-dom'
import { useState } from "react";
import { FaMapMarker } from 'react-icons/fa'

const JobDiv = (props) => {
  const [showFullDesc, setShowFullDesc] = useState(false);
  let desc = props.description;
  if (!showFullDesc) {
    desc = desc.substring(0, 90) + '...';
  }

  return (
    <div className="shadow-md bg-white p-4 rounded-xl">
    <div className="text-gray-600 my-2">{props.type}</div>
    <h3 className="font-bold text-xl mb-6">{props.title}</h3>
    <div className="mb-3">{desc}</div>
    <button onClick={() => setShowFullDesc((prevState) => !prevState)} className="text-indigo-500 mb-3 hover:text-indigo-600 cursor-pointer">{showFullDesc ? 'Less' : 'More'}</button>
    <h3 className="my-2 text-indigo-500">{props.salary}</h3>
    <div className="border border-gray-100 mb-5"></div>
    <div className="flex flex-col lg:flex-row justify-between mb-4">
      <div className="text-orange-700 mb-3">
        <FaMapMarker className="inline text-lg mb-1 mr-1"/>
        {props.location}</div>
      <Link className="rounded-md text-white bg-indigo-500 px-4 py-2 text-center text-sm hover:bg-indigo-600 cursor-pointer">Read More</Link>
    </div>

    </div>
  )
}

export default JobDiv;