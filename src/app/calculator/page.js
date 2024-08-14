"use client";
import Course from "@/components/calculator/course";
import "./calculator.css";
import { useState } from "react";

export default function CalculatorPage() {
  
  const crypto = window.crypto || window.msCrypto;
  let array = new Uint32Array(1);
  
  const [isInputNameEmpty, setIsInputNameEmpty] = useState(true);
  const [courses, setCourses] = useState([]); // courses array stores course objects (not course components)
  const [courseName, setCourseName] = useState();

  const handleNewCourseInput = (event) => {
    const inputValue = event.target.value;
    setIsInputNameEmpty(inputValue.trim() === "");
    setCourseName(inputValue);
  };

  const handleNewCourse = () => {
    setCourses([...courses, { id:crypto.getRandomValues(array), courseName }]);
  };

  const handleCourseDelete = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <main>
      <div className="gradeCalculator">
        <div className="header">
          <h1>Grade Calculator</h1>
          <div className="createCourse">
            <input
              placeholder="Enter Course Name"
              onChange={handleNewCourseInput}
              value={courseName}
            ></input>
            <button disabled={isInputNameEmpty} onClick={handleNewCourse}>
              +
            </button>
          </div>
        </div>

        <div className="overallGrade">Current GPA:/9</div>

        <div className="courses">
          {courses.map((course) => (
            <Course
              key={course.id}
              id={course.id}
              courseName={course.courseName}
              courseDelete={handleCourseDelete}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
