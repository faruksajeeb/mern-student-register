import React from "react";
import UpdateForm from "../../components/student/Update";
import AppNavBar from "../../components/AppNavBar";
import {useParams} from "react-router";

const UpdatePage = () => {
  const params = useParams();
  return (
    <div>
      <AppNavBar />
      <UpdateForm id={params["id"]} />
    </div>
  );
};

export default UpdatePage;
