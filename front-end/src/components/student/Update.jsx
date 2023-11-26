import React, { useRef,useEffect } from "react";
import { updateStudent,readByID } from "../../apiRequest/ApiRequest";
import {
    ErrorToast,
    isEmpty,
    SuccessToast,
  } from "../../helpers/ValidationHelper";
const Update = (props) => {
  let firstName,
    lastName,
    gender,
    dateOfBirth,
    nationality,
    address,
    email,
    phone,
    admissionDate,
    courses,
    Loader = useRef();
    const UpdateData = () => {
        let firstName = firstName.value;
        let lastName = lastName.value;
        let gender = gender.value;
        let dateOfBirth = dateOfBirth.value;
        let nationality = nationality.value;
        let address = address.value;
        let email = email.value;
        let phone = phone.value;
        let admissionDate = admissionDate.value;
        let courses = courses.value;

        if (isEmpty(firstName)) {
            ErrorToast("First Name Required");
        } else if (isEmpty(lastName)) {
            ErrorToast("Last Name Required");
        } else if (isEmpty(gender)) {
            ErrorToast("Gender Required");
        } else if (isEmpty(dateOfBirth)) {
            ErrorToast("Date Of Birth Required");
        } else if (isEmpty(nationality)) {
            ErrorToast("Nationality Required");
        } else if (isEmpty(phone)) {
            ErrorToast("Phone Required");
        } else {
            Loader.classList.remove("d-none");
            updateStudent(
            props.id,
            firstName,
            lastName,
            gender,
            dateOfBirth,
            nationality,
            address,
            email,
            phone,
            admissionDate,
            courses
            ).then((Result) => {
                Loader.classList.add("d-none");
                if (Result === true) {
                    SuccessToast("Data Udpate Success");
                    props.history.push("/");
                } else {
                    ErrorToast("Request Fail Try Again");
                }
            });
        }
    }
        useEffect(() => {
            readByID(props.id).then((Result) => {
                firstName.value = Result[0]["firstName"];
                lastName.value = Result[0]["lastName"];
                gender.value = Result[0]["gender"];
                dateOfBirth.value = Result[0]["dateOfBirth"];
                nationality.value = Result[0]["nationality"];
                address.value = Result[0]["address"];
                email.value = Result[0]["email"];
                phone.value = Result[0]["phone"];
                admissionDate.value = Result[0]["admissionDate"];
                courses.value = Result[0]["courses"];
            });
        });

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card">
              <div className="card-header pb-0">
                <h4 className="animated fadeInUp">Student Register</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4  p-2">
                    <label className="animated fadeInUp">First Name</label>
                    <input
                      ref={(input) => (firstName = input)}
                      type="text"
                      className="form-control animated fadeInUp"
                    />
                  </div>
                  <div className="col-md-4  p-2">
                    <label className="animated fadeInUp">Last Name</label>
                    <input
                      ref={(input) => (lastName = input)}
                      type="text"
                      className="form-control animated fadeInUp"
                    />
                  </div>
                  <div className="col-md-4  p-2">
                    <label className="animated fadeInUp"> Gender </label>
                    <input
                      ref={(input) => (gender = input)}
                      type="text"
                      className="form-control animated fadeInUp"
                    />
                  </div>
                  <div className="col-md-4  p-2">
                    <label className="animated fadeInUp"> Date Of Birth </label>
                    <input
                      ref={(input) => (dateOfBirth = input)}
                      type="text"
                      className="form-control animated fadeInUp"
                    />
                  </div>
                  <div className="col-md-4  p-2">
                    <label className="animated fadeInUp"> Nationality</label>
                    <input
                      ref={(input) => (nationality = input)}
                      type="text"
                      className="form-control animated fadeInUp"
                    />
                  </div>
                  <div className="col-md-4  p-2">
                    <label className="animated fadeInUp"> Address</label>
                    <input
                      ref={(input) => (address = input)}
                      type="text"
                      className="form-control animated fadeInUp"
                    />
                  </div>
                  <div className="col-md-4  p-2">
                    <label className="animated fadeInUp"> Email</label>
                    <input
                      ref={(input) => (email = input)}
                      type="text"
                      className="form-control animated fadeInUp"
                    />
                  </div>
                  <div className="col-md-4  p-2">
                    <label className="animated fadeInUp"> Phone</label>
                    <input
                      ref={(input) => (phone = input)}
                      type="text"
                      className="form-control animated fadeInUp"
                    />
                  </div>
                  <div className="col-md-4  p-2">
                    <label className="animated fadeInUp"> Admission Date</label>
                    <input
                      ref={(input) => (admissionDate = input)}
                      type="text"
                      className="form-control animated fadeInUp"
                    />
                  </div>
                  <div className="col-md-4  p-2">
                    <label className="animated fadeInUp"> Courses </label>
                    <input
                      ref={(input) => (courses = input)}
                      type="text"
                      className="form-control animated fadeInUp"
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-4  p-2">
                    <button
                      onClick={UpdateData}
                      className="btn btn-primary  animated fadeInUp w-100"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
