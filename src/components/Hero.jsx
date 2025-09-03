import Card from "./Card"

const Hero = () => {
  return (
      <section className="p-4 gap-4 grid grid-cols-1 md:grid-cols-2 lg:container m-auto mb-5 mt-6">
        <Card>
          <h1 className="text-2xl font-bold">For Developers</h1>
          <p className="mt-2 mb-4">Browse our React jobs and start your career today</p>
          <a className="inline-block py-2 px-3 bg-black rounded-md text-white hover:bg-gray-700 cursor-pointer">Browse Jobs</a>
        </Card>

    {/* <div className=" shadow-md p-6 bg-indigo-100 rounded-lg"> */}
      <Card bg='bg-indigo-100'>
        <h1 className="text-2xl font-bold">For Employers</h1>
        <p className="mt-2 mb-4">List your job to find the perfect developer for the role</p>
        <a className="inline-block py-2 px-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 cursor-pointer">Add Job</a>
      </Card>

    {/* </div> */}
  </section>
  )
}

export default Hero
