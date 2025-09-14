/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";

import JobForm from "../components/JobForm";

const EditJobPage = ({JobSubmit}) => {
  const job = useLoaderData();

  return (
    <>
    <JobForm mode="edit" JobSubmit={JobSubmit} job={job}/>
    </>
  )
}

export default EditJobPage;
