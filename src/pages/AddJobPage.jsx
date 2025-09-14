import InputText from "../components/addJobPage/InputText"
import Button from "../components/Button"

const AddJobPage = () => {
  return (
    <section className="bg-indigo-50 py-24">
      <div className="container bg-white border m-auto max-w-2xl shadow-md py-8 rounded-md px-5">
        <form>
        <div className="text-3xl text-center font-semibold mb-5">
            Add Job
        </div>

        <div>
          <label className="block font-bold text-gray-700 mb-2" for="type" >
            Job Type
          </label>
          <select id="type"
          name="type"
          className="border rounded-md w-full px-3 py-2 mb-3" required>

            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        <InputText type="text" title="Job Listing Name" placeholder="eg. Beautiful Apartment in Miami"/>

        <div>
          <label className="block font-bold text-gray-700 mb-2" for="type" >
            Description
          </label>

          <textarea id="text" name="text"  placeholder="Add any job duties, expectations, requirements, etc" className="border w-full rounded-md px-3 py-2 mb-3" rows="4"></textarea>
        </div>

        <div>
          <label className="block font-bold text-gray-700 mb-2" for="type" >
            Salary
          </label>
          <select id="type"
          name="type"
          className="border rounded-md w-full px-3 py-2 mb-3"
          required>

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

        <InputText type="text" title="Location" placeholder="Company Location"/>

        <h2 className="text-2xl my-3">Company Info</h2>

        <InputText type="text" title="Company Name" placeholder="Company Name"/>

        <div>
          <label className="block font-bold text-gray-700 mb-2" for="type" >
            Company Description
          </label>

          <textarea id="text" name="text"  placeholder="What does your company do?" className="border w-full rounded-md px-3 py-2 mb-3" rows="4"></textarea>
        </div>

        <InputText type="text" title="Contact Email" placeholder="Email address for applicants"/>
        <InputText type="text" title="Contact Phone" placeholder="Optional phone for applicants"/>

        <Button path='/add-job' title="Add Job" bg="bg-indigo-500 hover:bg-indigo-700 mt-2"/>

        </form>
      </div>
      
      
    </section>
  )
}

export default AddJobPage
