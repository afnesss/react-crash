

const InputText = (params) => {
  return (
    <div>
      <label className="block font-bold text-gray-700 mb-2" htmlFor={params.id} >
        {params.title}
      </label>
        {/* <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
        <option value="Remote">Remote</option>
        <option value="Internship">Internship</option> */}

        <input type={params.type || "text"} placeholder={params.placeholder}  name={params.id}
      className="border border-gray-200 rounded-md w-full px-3 py-2 mb-3" required
      value={params.value}
      onChange={(e) => params.set(e.target.value)}></input>
    </div>
  )
}

export default InputText;
