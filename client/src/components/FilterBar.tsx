import { useState } from "react";
import Select from "./Select";

interface FilterBarProperties {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  period: string;
  setPeriod: React.Dispatch<React.SetStateAction<string>>;
  weekday: string;
  setWeekday: React.Dispatch<React.SetStateAction<string>>;
  filterCourses: () => void;
  setModalCourse: React.Dispatch<React.SetStateAction<Course>>;
}

const blankCourse: Course = {
  id: "",
  name: "",
  code: "",
  weekday: "",
  period: "",
  teacher: "",
  building: "",
  floor: "",
  room: "",
  sia: "",
};

export default function FilterBar({
  name,
  setName,
  period,
  setPeriod,
  weekday,
  setWeekday,
  filterCourses,
  setModalCourse,
}: FilterBarProperties) {
  function handleFilterCourses(e: React.FormEvent) {
    e.preventDefault();
    filterCourses();
  }

  return (
    <form action="" className="d-flex flex-wrap flex-md-nowrap gap-3 mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar por disciplina"
        aria-label="Disciplina"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Select
        className="form-select"
        placeholder="Selecionar período"
        options={[
          { name: "Todos os períodos", value: "all" },
          { name: "Manhã", value: "morning" },
          { name: "Noite", value: "night" },
        ]}
        setOption={setPeriod}
        defaultValue=""
      />
      <Select
        className="form-select"
        placeholder="Selecionar dia da semana"
        options={[
          { name: "Todos os dias", value: "all" },
          { name: "Segunda-feira", value: "monday" },
          { name: "Terça-feira", value: "tuesday" },
          { name: "Quarta-feira", value: "wednesday" },
          { name: "Quinta-feira", value: "thursday" },
          { name: "Sexta-feira", value: "friday" },
        ]}
        setOption={setWeekday}
        defaultValue=""
      />
      <button
        type="submit"
        className="btn btn-primary d-flex gap-2"
        onClick={handleFilterCourses}
      >
        <i className="bi bi-search" /> Buscar
      </button>
      <button
        type="button"
        className="btn btn-primary d-flex gap-2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => setModalCourse(blankCourse)}
      >
        <i className="bi bi-plus-lg d-inline" /> Adicionar
      </button>
    </form>
  );
}
