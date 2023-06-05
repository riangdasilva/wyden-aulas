import { Request, Response } from "express";
import Course from "../models/courses";
import { AuthenticatedRequest } from "../types";

export function createCourse(req: AuthenticatedRequest, res: Response) {
  const user = req.user;

  if (!user) {
    return res.status(401).json({ error: "Usuário não autenticado" });
  }

  const course = new Course({ ...req.body });

  course
    .save()
    .then((course) => {
      res.status(201).json(course);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
}

export function readCourses(req: Request, res: Response) {
  Course.find()
    .then((courses) => {
      res.json(courses);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
}

export function readCourse(req: Request, res: Response) {
  const { id } = req.params;

  Course.findById(id)
    .then((course) => {
      if (course) {
        res.json(course);
      } else {
        res.status(404).json({ error: "Aula não encontrada" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
}

export function updateCourse(req: AuthenticatedRequest, res: Response) {
  const user = req.user;

  if (!user) {
    return res.status(401).json({ error: "Usuário não autenticado" });
  }
  const { id } = req.params;

  Course.findByIdAndUpdate(id, { ...req.body }, { new: true })
    .then((course) => {
      if (course) {
        res.json(course);
      } else {
        res.status(404).json({ error: "Aula não encontrada" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
}

export function deleteCourse(req: AuthenticatedRequest, res: Response) {
  const user = req.user;

  if (!user) {
    return res.status(401).json({ error: "Usuário não autenticado" });
  }
  const { id } = req.params;

  Course.findByIdAndDelete(id)
    .then((course) => {
      if (course) {
        res.json(course);
      } else {
        res.status(404).json({ error: "Aula não encontrada" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
}
