import { translatePeriod, translateWeekday } from "../utils";

interface CoursesListProperties {
  courses: Course[];
  deleteCourse: (course: Course) => void;
  setModalCourse: React.Dispatch<React.SetStateAction<Course>>;
}

export default function CoursesList({
  courses,
  deleteCourse,
  setModalCourse,
}: CoursesListProperties) {
  return (
    <ul className="list-unstyled">
      {courses.map((course) => (
        <li className="mb-3" key={course.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{course.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {course.code} |{" "}
                {translateWeekday(course.weekday).toLocaleUpperCase()} |{" "}
                {translatePeriod(course.period).toLocaleUpperCase()}
              </h6>
              <p className="card-text m-0">Professor: {course.teacher}</p>
              <p className="card-text m-0">
                Prédio {course.building} | {course.floor} | {course.room} |{" "}
                {course.sia}
              </p>
              <a
                href="#"
                className="card-link"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => setModalCourse(course)}
              >
                Editar
              </a>
              <a
                href="#"
                className="card-link"
                onClick={() => deleteCourse(course)}
              >
                Excluir
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
