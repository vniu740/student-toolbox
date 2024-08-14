import "./css/course.css";
import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

export default function Course(props) {
  const [showAssignments, setShowAssignments] = useState(false);

  const handleCourseClick = () => {
    setShowAssignments(!showAssignments);
  };

  return (
    <div className="course">
      <button className="courseInfo" onClick={handleCourseClick} type="button">
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
      </button>
      {showAssignments && (
        <div className="courseAssignments">
          <h3>TODO: assignments</h3>
          <button>New Assignment +</button>
        </div>
      )}
    </div>
  );
}

Course.propTypes = {
  courseName: PropTypes.string.isRequired,
  courseDelete: PropTypes.func.isRequired,
  id: PropTypes.isRequired,
};
