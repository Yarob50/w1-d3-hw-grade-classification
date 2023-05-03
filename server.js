const express = require("express");
const parser = require("body-parser");

const app = express();

// PARAMS TYPES
//=== 1- BODY PARAMS
// req.body

// === 2- PATH PARAMS
// req.params

// === 3- QUERY PARAMS
// req.query

app.use(parser.urlencoded({ extended: false }));

// app.set("view engine", "ejs");

app.get("/test", (req, res) => {
	res.send("visiting /test url");
});

app.get("/gradeForm", (req, res) => {
	res.render("form");
});

app.post("/submitForm", (req, res) => {
	const name = req.body.studentName;
	const grade = req.body.grade;
	let gradeLetter = "F";

	if (grade < 50) {
		gradeLetter = "F";
	} else if (grade <= 60) {
		gradeLetter = "C";
	} else if (grade <= 70) {
		gradeLetter = "B";
	} else {
		gradeLetter = "A";
	}
	res.render("output", {
		studentName: name,
		studentGrade: grade,
		studentGradeLetter: gradeLetter,
	});
});

app.get("/userInfo/:studentName", (req, res) => {
	const name = req.params.studentName;
	const age = req.query.age;
	res.render("userInfo", { name: name, age: age });
});

app.get("/view", (req, res) => {
	res.render("grade.ejs");
});
app.listen(8000, function () {
	console.log("started listening");
});
