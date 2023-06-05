import { useState, useEffect, useContext } from "react";
import useCrud from "../hooks/useCrud";
import useFilter from "../hooks/useFilter";

import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import CoursesList from "../components/CoursesList";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

import { AuthContext } from "../contexts/AuthContext";

export default function AdminPage() {
  const { token } = useContext(AuthContext);
  const { courses, createCourse, updateCourse, deleteCourse } = useCrud(token!);
  const {
    filteredCourses,
    filterCourses,
    name,
    setName,
    period,
    setPeriod,
    weekday,
    setWeekday,
  } = useFilter(courses);
  const [modalCourse, setModalCourse] = useState<Course>({} as Course);

  useEffect(() => {
    filterCourses();
  }, [courses]);

  return (
    <>
      <Header />
      <main className="flex-fill">
        <div className="container p-2">
          <Modal
            course={modalCourse}
            createCourse={createCourse}
            updateCourse={updateCourse}
          />
          <div className="mt-4">
            <h1>Filtrar aulas</h1>
            <FilterBar
              name={name}
              setName={setName}
              period={period}
              setPeriod={setPeriod}
              weekday={weekday}
              setWeekday={setWeekday}
              filterCourses={filterCourses}
              setModalCourse={setModalCourse}
            />
            <CoursesList
              courses={filteredCourses}
              deleteCourse={deleteCourse}
              setModalCourse={setModalCourse}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
