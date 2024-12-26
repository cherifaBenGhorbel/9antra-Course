import Course from "../models/course.model.js";
import mongoose from "mongoose";
export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json({
      success: true,
      data: courses,
    });
  } catch (error) {
    console.log("error fetching courses :", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createCourse = async (req, res) => {
  const course = req.body;

  if (!course.title || !course.price || !course.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill in all fields" });
  }

  const newCourse = new Course(course);
  try {
    await newCourse.save();
    res.status(201).json({
      success: true,
      message: "Course created successfully",
      data: newCourse,
    });
  } catch (error) {
    console.error("Error in creating the course :", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateCourse = async (req, res) => {
  const id = req.params.id;

  const course = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid id" });
  }

  try {
    const updatedCourse = await Course.findByIdAndUpdate(id, course, { new: true});
    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: updatedCourse,
    });
  } catch (error) {
    console.error("Error in updating the course :", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
export const deleteCourse = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid id" });
  }

  try {
    await Course.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Course deleted successfully" });
  } catch (error) {
    console.error("Error in deleting the course :", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
