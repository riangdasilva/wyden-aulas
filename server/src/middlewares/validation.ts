import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export function validateCourse(
  request: Request,
  response: Response,
  next: NextFunction
) {
  body("name").isString().notEmpty();
  body("code").isString().notEmpty();
  body("period").isString().notEmpty();
  body("teacher").isString().notEmpty();
  body("room").isString().notEmpty();
  body("sia").isString().notEmpty();
  body("building").isString().notEmpty();
  body("floor").isString().notEmpty();
  body("weekday").isString().notEmpty();

  const errors = validationResult(request);

  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }

  next();
}
