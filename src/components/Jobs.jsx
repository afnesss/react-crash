import jobs from '../jobs.json' with {type : 'json'}

const JobDiv = (props) => {
  return (
    <div className="shadow-md bg-white p-4 rounded-xl">
    <div className="text-gray-600 my-2">{props.type}</div>
    <h3 className="font-bold text-xl mb-6">{props.title}</h3>
    <div className="mb-5">{props.description}</div>
    <h3 className="my-2 text-indigo-500">{props.salary}</h3>
    <div className="border border-gray-100 mb-5"></div>
    <div className="flex flex-col lg:flex-row justify-between mb-4">
          <h3 className="text-orange-700 mb-3">{props.location}</h3>
    <a className="rounded-md text-white bg-indigo-500 px-4 py-2 text-center text-sm hover:bg-indigo-600 cursor-pointer">Read More</a>
    </div>

    </div>
  )
}

const Jobs = () => {
  return (
        <section className="bg-blue-50 pt-10 pb-5">
        <div className="text-center text-3xl font-bold text-indigo-500">
          Browse Jobs
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:container m-auto mt-2 gap-6 p-5">
          {jobs.map((job) => {
            return (
              <JobDiv key={job.id} {...job} />
            )
          })}
        </div>
      </section>
  )
}

export default Jobs
