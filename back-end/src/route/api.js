const express = require("express");
const StudentController = require("../controllers/StudentController");

const router = express.Router();

// C=Create
router.post("/create-student", StudentController.createStudent);

// R=Read
router.get("/read-student", StudentController.readStudent);
router.get("/read-student-by-id/:id", StudentController.readStudentByID);

// U=Update
router.post("/update-student/:id", StudentController.updateStudent);

// Delete
router.get("/delete-student/:id", StudentController.deleteStudent);

module.exports = router;
