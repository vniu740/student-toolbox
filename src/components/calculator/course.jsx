

export default function course(props) {
 

  return (
    <div className="course">
      <div className="courseInfo">
        <div>
          <div className="courseName">Course Name: {props.courseName} </div>
          <div className="letterGrade"></div>
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
    </div>
  );
};
