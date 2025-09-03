import Card from "./Card"
import { Link } from 'react-router-dom'

const CartInside = ({title, desc, btn, bg='bg-black hover:bg-gray-700'}) => {
  return (
    <>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-2 mb-4">{desc}</p>
      <Link className={`${bg} inline-block py-2 px-3 rounded-md text-white cursor-pointer`}>{btn}</Link>
    </>
  )
}

const DevAndEmp = () => {
  return (
      <section className="p-4 gap-4 grid grid-cols-1 md:grid-cols-2 lg:container m-auto mb-5 mt-6">
        <Card>
          <CartInside title='For Developers' desc='Browse our React jobs and start your career today' btn='Browse Jobs'/>
        </Card>

    {/* <div className=" shadow-md p-6 bg-indigo-100 rounded-lg"> */}
      <Card bg='bg-indigo-100'>
        <CartInside bg='bg-indigo-500 hover:bg-indigo-700' title='For Employers' desc='List your job to find the perfect developer for the role' btn='Add Job'/>
      </Card>

    {/* </div> */}
  </section>
  )
}

export default DevAndEmp
