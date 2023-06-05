import { useState, useEffect } from "react";

export default function useFilter(courses: Course[]): {
  filteredCourses: Course[];
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  period: string;
  setPeriod: React.Dispatch<React.SetStateAction<string>>;
  weekday: string;
  setWeekday: React.Dispatch<React.SetStateAction<string>>;
  filterCourses: () => void;
} {
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [name, setName] = useState<string>("");
  const [period, setPeriod] = useState<string>("");
  const [weekday, setWeekday] = useState<string>("");

  useEffect(() => {
    setFilteredCourses(courses);
  }, []);

  function filterCourses() {
    setFilteredCourses(
      courses.filter((course) => {
        if (name && name !== "all" && !course.name.includes(name)) return false;
        if (period && period !== "all" && course.period !== period)
          return false;
        if (weekday && weekday !== "all" && course.weekday !== weekday)
          return false;
        return true;
      })
    );
  }

  return {
    filteredCourses,
    filterCourses,
    name,
    setName,
    period,
    setPeriod,
    weekday,
    setWeekday,
  };
}
