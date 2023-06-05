import moongose from "../database/connection";

interface CourseInterface extends Document {
  id: string;
  name: string;
  code: string;
  period: string;
  teacher: string;
  room: string;
  sia: string;
  building: string;
  floor: string;
  weekday: string;
}

const CourseSchema = new moongose.Schema<CourseInterface>({
  name: { type: String, required: true },
  code: { type: String, required: true },
  period: { type: String, required: true },
  teacher: { type: String, required: true },
  room: { type: String, required: true },
  sia: { type: String, required: true },
  building: { type: String, required: true },
  floor: { type: String, required: true },
  weekday: { type: String, required: true },
});

CourseSchema.set("toJSON", {
  virtuals: true,
});

const Course = moongose.model<CourseInterface>("Aula", CourseSchema);

export default Course;
