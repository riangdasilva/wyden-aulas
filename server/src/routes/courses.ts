import { Router } from "express";
import { validateCourse } from "../middlewares/validation";
import authenticateJWT from "../middlewares/authentication";
import {
  createCourse,
  deleteCourse,
  readCourse,
  readCourses,
  updateCourse,
} from "../controllers/courses";

const route = Router();

route.post("/", authenticateJWT, validateCourse, createCourse);
route.get("/", readCourses);
route.get("/:id", readCourse);
route.put("/:id", authenticateJWT, validateCourse, updateCourse);
route.delete("/:id", authenticateJWT, deleteCourse);

export default route;
