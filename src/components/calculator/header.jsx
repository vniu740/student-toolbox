

export default function CalculatorHeader(props) {
    return (
      <div className="header">
        <h1>Grade Calculator</h1>
        <div className="createCourse">
          <input
            placeholder="Enter Course Name"
            onChange={props.newCourseInput}
          ></input>
          <button disabled={props.input} onClick={props.newCourse}>
            +
          </button>
        </div>
      </div>
    )
}