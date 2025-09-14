

const InputText = (params) => {
  return (
    <div>
      <label className="block font-bold text-gray-700 mb-2" for={params.id} >
        {params.title}
      </label>
        {/* <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
        <option value="Remote">Remote</option>
        <option value="Internship">Internship</option> */}

        <input placeholder={params.placeholder}  name={params.id}
      className="border rounded-md w-full px-3 py-2 mb-3" required></input>
    </div>
  )
}

export default InputText;
