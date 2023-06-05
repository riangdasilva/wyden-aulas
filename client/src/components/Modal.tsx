import { useEffect, useState } from "react";
import Select from "./Select";

interface ModalProperties {
  course: Course;
  createCourse: (course: Course) => void;
  updateCourse: (course: Course) => void;
}

export default function Modal({
  course,
  createCourse,
  updateCourse,
}: ModalProperties) {
  const [holdingCourse, setHoldingCourse] = useState<Course>({} as Course);

  useEffect(() => {
    setHoldingCourse(course);
  }, [course]);

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {course.id ? "Editar aula" : "Adicionar aula"}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Código da disciplina"
                aria-label="Código"
                defaultValue={holdingCourse.code}
                onChange={(e) =>
                  setHoldingCourse({ ...holdingCourse, code: e.target.value })
                }
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Nome da disciplina"
                aria-label="Disciplina"
                defaultValue={holdingCourse.name}
                onChange={(e) =>
                  setHoldingCourse({ ...holdingCourse, name: e.target.value })
                }
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Professor"
                aria-label="Professor"
                defaultValue={holdingCourse.teacher}
                onChange={(e) =>
                  setHoldingCourse({
                    ...holdingCourse,
                    teacher: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Prédio"
                aria-label="Prédio"
                defaultValue={holdingCourse.building}
                onChange={(e) =>
                  setHoldingCourse({
                    ...holdingCourse,
                    building: e.target.value,
                  })
                }
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Andar"
                aria-label="Andar"
                defaultValue={holdingCourse.floor}
                onChange={(e) =>
                  setHoldingCourse({ ...holdingCourse, floor: e.target.value })
                }
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Sala"
                aria-label="Sala"
                defaultValue={holdingCourse.room}
                onChange={(e) =>
                  setHoldingCourse({ ...holdingCourse, room: e.target.value })
                }
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Portal SIA"
                aria-label="SIA"
                defaultValue={holdingCourse.sia}
                onChange={(e) =>
                  setHoldingCourse({ ...holdingCourse, sia: e.target.value })
                }
              />
              <Select
                className="form-select mb-3"
                placeholder="Selecionar dia da semana"
                options={[
                  { name: "Manhã", value: "morning" },
                  { name: "Noite", value: "night" },
                ]}
                defaultValue={holdingCourse.period ? holdingCourse.period : ""}
                setOption={(period: string) =>
                  setHoldingCourse({ ...holdingCourse, period })
                }
              />
              <Select
                className="form-select"
                placeholder="Selecionar dia da semana"
                options={[
                  { name: "Segunda-feira", value: "monday" },
                  { name: "Terça-feira", value: "tuesday" },
                  { name: "Quarta-feira", value: "wednesday" },
                  { name: "Quinta-feira", value: "thursday" },
                  { name: "Sexta-feira", value: "friday" },
                ]}
                defaultValue={
                  holdingCourse.weekday ? holdingCourse.weekday : ""
                }
                setOption={(weekday: string) =>
                  setHoldingCourse({ ...holdingCourse, weekday })
                }
              />
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={
                course.id
                  ? () => updateCourse(holdingCourse)
                  : () => createCourse(holdingCourse)
              }
            >
              {course.id ? "Salvar" : "Adicionar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
