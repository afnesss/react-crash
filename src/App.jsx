const App = () => {

  return (
    <>
    <nav className="bg-indigo-700 h-80 border-b border-indigo-50">
      <div className="flex-row">
      <div className="flex py-5 flex-1 justify-center md:items-stretch px-8">
        <a className="flex flex-shrink-0 items-center mr-4" href="/index.html"><img className="h-10 w-auto" alt="React Jobs" src="images/logo.png"></img><span className="hidden md:block text-white text-2xl font-bold ml-2">React Jobs</span></a>
        <div className="md:ml-auto flex space-x text-white gap-4 items-center">
          <a className="bg-black px-3 py-2 rounded-md">Home</a>
          <a className="px-3 py-2 hover:bg-gray-900 rounded-md">Jobs</a>
          <a className="px-3 py-2 hover:bg-gray-900 rounded-md">Add job</a>
        </div>
      </div>
      </div>

      <div className="border-t border-gray-500 flex flex-col justify-center h-60 text-center mb-4">
        <div className="text-center px-4 sm:px-6">
          <div className="text-white text-4xl md:text-6xl sm:text-5xl font-extrabold text-center">
            Become a React Dev
          </div>
          <p className="my-4 text-xl text-white">Find the React job that fits your skills and needs</p>
        </div>
      </div>

      <section className="py-8 px-6">
        <div className="">
          <p>For Vevelopers</p>
        </div>

        <div className="">

        </div>
      </section>

    </nav>

    </>

  );
}

export default App;