import React, { useEffect, useState } from "react";
import { deleteStudent, readStudent } from "../../apiRequest/ApiRequest";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const List = () => {
  let [data, setData] = useState([]);
  let [change, setChange] = useState(0);
  useEffect(()=>{
    readStudent().then((Result)=>{
        setData(Result)
    })
},[change])

  const onDelete = async (id) => {
    let res = await deleteStudent(id);
    if (res) {
      toast.success("Delete completed");
      setChange(new Date().getTime());
    } else {
      toast.error("Delete fail");
    }
  };

  if (data.length === 0) {
    return (
      <div>
        <h1>Loading.....</h1>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>firstName</th>
                  <th>lastName</th>
                  <th>gender</th>
                  <th>dateOfBirth</th>
                  <th>nationality</th>
                  <th>address</th>
                  <th>email</th>
                  <th>phone</th>
                  <th>admissionDate</th>
                  <th>courses</th>
                </tr>
              </thead>
              <tbody>
                {
                data.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item["firstName"]}</td>
                      <td>{item["lastName"]}</td>
                      <td>{item["gender"]}</td>
                      <td>{item["dateOfBirth"]}</td>
                      <td>{item["nationality"]}</td>
                      <td>{item["address"]}</td>
                      <td>{item["email"]}</td>
                      <td>{item["phone"]}</td>
                      <td>{item["admissionDate"]}</td>
                      <td>{item["courses"]}</td>
                      <td>
                        <button
                          onClick={() => {
                            onDelete(item["_id"]);
                          }}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                        <Link
                          className="btn mx-2 btn-success"
                          to={"/save?id=" + item["_id"]}
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  );
                })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default List;
