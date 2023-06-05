import { useState, useEffect } from "react";

import {
  getWeekdayByDate,
  translateWeekday,
  getPeriodByDate,
  translatePeriod,
} from "../utils";

const blankCourse: Course = {
  id: "",
  name: "",
  code: "",
  period: "",
  teacher: "",
  room: "",
  sia: "",
  building: "",
  floor: "",
  weekday: "",
};

//async function syncTime() {
//  return fetch("http://worldtimeapi.org/api/timezone/America/Sao_Paulo").then(
//    (response) =>
//      response.json().then((data) => {
//        const serverTime = new Date(data.datetime);
//      })
//  );
//}

async function getAulasFromAPI(): Promise<Course[]> {
  return fetch("http://localhost:3333/aulas")
    .then((response) => response.json())
    .then((data) => {
      const aulas: Course[] = data;
      const now = new Date();
      //const testTime = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 1);
      const period = getPeriodByDate(now);
      const weekday = getWeekdayByDate(now);
      return aulas.filter(
        (course) => course.period === period && course.weekday === weekday
      );
    });
}

function getNextAulas(aulas: Course[], limit: number, skip: number): Course[] {
  const nextAulas: Course[] = [];
  for (let i = 0; i < limit; i++) {
    if (skip + i >= aulas.length) {
      nextAulas.push(blankCourse);
      continue;
    }
    nextAulas.push(aulas[skip + i]);
  }
  return nextAulas;
}

export default function ClassesPage() {
  const [aulas, setAulas] = useState<Course[]>([]);
  const [skip, setSkip] = useState(0);
  const [serverTime, setServerTime] = useState(new Date());
  //const [serverTime, setServerTime] = useState(
  //  new Date(Date.now() + 1000 * 60 * 60 * 24 * 1)
  //);

  async function fetchData() {
    const response = await getAulasFromAPI();
    setAulas(response);
    setSkip(0);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSkip((skip) => {
        if (skip + 10 >= aulas.length) {
          fetchData();
          return 0;
        } else {
          return skip + 10;
        }
      });
    }, 10 * 1000);
    return () => clearInterval(interval);
  }, [aulas]);

  return (
    <>
      <header>
        <div className="bg-primary text-white d-flex justify-content-between fs-1 text-uppercase fw-bold p-2">
          <p className="m-0">UniMetrocamp Wyden</p>
          <p className="m-0">
            {translateWeekday(getWeekdayByDate(serverTime))} |{" "}
            {translatePeriod(getPeriodByDate(serverTime))}
          </p>
        </div>
      </header>
      <main className="flex-grow-1 d-flex">
        <table className="flex-grow-1 table table-fixed table-striped table-bordered m-0 text-center align-middle fs-3 lh-1">
          <thead>
            <tr>
              <th>Código</th>
              <th>Disciplina</th>
              <th>Professor</th>
              <th>Prédio</th>
              <th>Andar</th>
              <th>Sala</th>
              <th className="text-nowrap">Portal SIA</th>
            </tr>
          </thead>
          <tbody>
            {getNextAulas(aulas, 10, skip).map((course, index) => (
              <tr key={index} style={{ height: "10%" }}>
                <td>{course.code}</td>
                <td>{course.name}</td>
                <td className="text-nowrap">{course.teacher}</td>
                <td className="text-nowrap">{course.building}</td>
                <td className="text-nowrap">{course.floor}</td>
                <td>{course.room}</td>
                <td>{course.sia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
