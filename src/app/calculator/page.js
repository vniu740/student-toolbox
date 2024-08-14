import "./calculator.css";

export default function CalculatorPage() {
  return (
    <main>
      <div className="gradeCalculator">
        <div className="header">
          <h1>Grade Calculator</h1>
          <div className="createCourse">
            <input placeholder="Enter Course Name"></input>
            <button>+</button>
          </div>
        </div>
        <div className="overallGrade">Current GPA:/9</div>
        <div className="courses"></div>
      </div>
    </main>
  );
}
