import axios from "axios";

export function createStudent(
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
) {
  let URL = "http://localhost:5000/api/create-student";
  let postBody = {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    dateOfBirth: dateOfBirth,
    nationality: nationality,
    address: address,
    email: email,
    phone: phone,
    admissionDate: admissionDate,
    courses: courses,
  };
  return axios
    .post(URL, postBody)
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

export function readStudent() {
  let URL = "http://localhost:5000/api/read-student";
  return axios
    .post(URL)
    .then((res) => {
      if (res.status === 200) {
        // debugger;
        return res.data["data"];
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

export function readByID(id) {
  let URL = "http://localhost:5000/api/read-student-by-id/" + id;
  return axios
    .get(URL)
    .then((res) => {
      if (res.status === 200) {
        return res.data["data"];
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

export function updateStudent(
  id,
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
) {
  let URL = "http://localhost:5000/api/update-student/" + id;
  let postBody = {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    dateOfBirth: dateOfBirth,
    nationality: nationality,
    address: address,
    email: email,
    phone: phone,
    admissionDate: admissionDate,
    courses: courses,
  };
  return axios
    .post(URL, postBody)
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

export function deleteStudent(id) {
  let URL = "http://localhost:5000/api/delete-student/" + id;
  return axios
    .post(URL)
    .then((res) => {
      if (res.status === 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}
