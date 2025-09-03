import jobs from '../jobs.json' with {type : 'json'}
import JobDiv from './JobDiv'

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
