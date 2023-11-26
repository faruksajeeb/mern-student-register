const StudentModel = require("../models/StudentModel");

// C = Create
exports.createStudent = (req, res) => {
  let reqBody = req.body;
  StudentModel.create(reqBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};

// R=Read
exports.readStudent = (req, res) => {
  StudentModel.find((err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};

// Show By ID
exports.readStudentByID = (req, res) => {
  let id = req.params.id;
  let Query = { _id: id };
  StudentModel.find(Query, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};

// U=Update
exports.updateStudent = (req, res) => {
  let id = req.params.id;
  let Query = { _id: id };
  let reqBody = req.body;
  StudentModel.updateOne(Query, reqBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};

// D=Delete
exports.deleteStudent = (req, res) => {
  let id = req.params.id;
  let Query = { _id: id };
  StudentModel.remove(Query, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(200).json({ status: "success", data: data });
    }
  });
};
