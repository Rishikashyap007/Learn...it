import { Schema, model } from "mongoose";
const videoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  videoUrl: { type: String, required: true },
});

const CourseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imgSrc: { type: String, required: true },
  category: { type: String, required: true },
  video: videoSchema,
});

const Course = model("Course", CourseSchema);
export default Course;
