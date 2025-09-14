/* eslint-disable no-unused-vars */
import { useState} from "react"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"
import InputText from "./addJobPage/InputText";

const JobForm = ({job, mode, JobSubmit}) => {

  const [title, setTitle] = useState(job?.title || '');
  const [type, setType] = useState(job?.type || 'Full-Time');
  const [location, setLocation] = useState(job?.location || '');
  const [description, setDesc] = useState(job?.description || '');
  const [salary, setSalary] = useState(job?.salary || 'Under $50K');
  const [companyName, setCompanyName] = useState(job?.company.name || '');
  const [companyDesc, setCompanyDesc] = useState(job?.company.description || '');
  const [contactEmail, setContactEmail] = useState(job?.company.contactEmail || '');
  const [contactPhone, setContactPhone] = useState(job?.company.contactPhone || '');

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newJob = {
      title, 
      type,
      description,
      location,
      salary,
      company : {
        name: companyName,
        description: companyDesc,
        contactEmail,
        contactPhone
      }
    }

   JobSubmit(newJob, job?.id);
   toast.success(`job ${mode === "edit" ? "updated" : "added"} successfully`);
   return navigate(`${mode === "edit"? `/jobs/${job.id}`: "/jobs"}`)
  }

  return (
    <section className="bg-indigo-50 py-24">
      <div className="container bg-white m-auto max-w-2xl shadow-md py-8 rounded-md px-5">
        <form onSubmit={submitForm}>
        <div className="text-3xl text-center font-semibold mb-5">
            Add Job
        </div>

        <div>
          <label className="block font-bold text-gray-700 mb-2" htmlFor="type" >
            Job Type
          </label>
          <select id="type"
          name="type"
          className="border border-gray-200 rounded-md w-full px-3 py-2 mb-3" required
          value={type}
          onChange={(e) => setType(e.target.value)}>

            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        <InputText id="name" title="Job Listing Name" placeholder="eg. Beautiful Apartment in Miami" value={title} set={setTitle}/>

        <div>
          <label className="block font-bold text-gray-700 mb-2 mt-2" htmlFor="text" >
            Description
          </label>

          <textarea id="text" name="text" placeholder="Add any job duties, expectations, requirements, etc" className="border border-gray-200 w-full rounded-md px-3 py-2 mb-3" rows="4"
          value={description}
          onChange={(e) => setDesc(e.target.value)}></textarea>
        </div>

        <div>
          <label className="block font-bold text-gray-700 mb-2" htmlFor="salary" >
            Salary
          </label>
          <select id="salary"
          name="salary"
          className="border border-gray-200 rounded-md w-full px-3 py-2 mb-3"
          required
          value={salary}
          onChange={(e) => setSalary(e.target.value)}>

          <option value="Under $50K">Under $50K</option>
          <option value="$50K - 60K">$50K - $60K</option>
          <option value="$60K - 70K">$60K - $70K</option>
          <option value="$70K - 80K">$70K - $80K</option>
          <option value="$80K - 90K">$80K - $90K</option>
          <option value="$90K - 100K">$90K - $100K</option>
          <option value="$100K - 125K">$100K - $125K</option>
          <option value="$125K - 150K">$125K - $150K</option>
          <option value="$150K - 175K">$150K - $175K</option>
          <option value="$175K - 200K">$175K - $200K</option>
          <option value="Over $200K">Over $200K</option>
          </select>
        </div>

        <InputText id="location" title="Location" placeholder="Company Location" value={location} set={setLocation}/>

        <h2 className="text-2xl my-3">Company Info</h2>

        <InputText id="companyName" title="Company Name" placeholder="Company Name" value={companyName} set={setCompanyName}/>

        <div>
          <label className="block font-bold text-gray-700 mb-2" htmlFor="company_description" >
            Company Description
          </label>

          <textarea id="company_description" name="company_description"  placeholder="What does your company do?" className="border border-gray-200 w-full rounded-md px-3 py-2 mb-3" rows="4"
          value={companyDesc}
          onChange={(e) => setCompanyDesc(e.target.value)}></textarea>
        </div>

        <InputText type="email" id="email" title="Contact Email" placeholder="Email address htmlFor applicants" value={contactEmail} set={setContactEmail}/>
        <InputText id="phone" title="Contact Phone" placeholder="Optional phone htmlFor applicants" value={contactPhone} set={setContactPhone}/>

        <button
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
        type="submit">
         {mode === 'edit'? "Save Changes" : "Add Job"}
        </button>

        </form>
      </div>

    </section>
  )
}

export default JobForm
