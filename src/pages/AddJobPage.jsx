/* eslint-disable no-unused-vars */
import JobForm from "../components/JobForm"

const AddJobPage = ({JobSubmit}) => {

  return (
    <>
    <JobForm mode="add" JobSubmit={JobSubmit}/>
    </>
  )
}

export default AddJobPage
