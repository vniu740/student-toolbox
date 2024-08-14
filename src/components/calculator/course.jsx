import "./css/course.css";
import { useState } from "react";


export default function Course(props) {
  const [showAssignments, setShowAssignments] = useState(false);

  const handleCourseClick = () => {
    setShowAssignments(!showAssignments);
  };

  return (
    <div className="course">
      <div className="courseInfo" onClick={handleCourseClick}>
        <div>
          <div className="courseName">Course Name: {props.courseName} </div>
          <div className="letterGrade">X</div>
        </div>
        <div className="gradeSummary">
          <div className="totalGrade">Total %: %</div>
          <div className="averageGrade">Average %: %</div>
          <button
            className="deleteCourseBtn "
            onClick={() => props.courseDelete(props.id)}
          >
            x
          </button>
        </div>
      </div>
      {showAssignments && (
        <div className="courseAssignments">
          <h1>Will be assignment component</h1>
          <button>New Assignment +</button>
        </div>
      )}
    </div>
  );
}