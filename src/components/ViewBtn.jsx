import { Link } from 'react-router-dom'
const ViewBtn = () => {
  return (
    <div className="my-10 px-5 m-auto max-w-lg">
      <Link to='/jobs' className="bg-black text-white text-center rounded-xl py-4 block hover:bg-gray-700 cursor-pointer">View All Jobs</Link>
    </div>
  )
}

export default ViewBtn
