import { create } from "zustand";

const useCourseStore = create((set) => ({
  courses: [],
  setCourse: (courses) => set({ courses }),
  createCourse: async (newCourse) => {
    if (!newCourse.title || !newCourse.price || !newCourse.image) {
      return { success: false, message: "Please fill in all fields." };
    }
    const response = await fetch("/api/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCourse),
    });
    const data = await response.json();
    set((state) => ({ courses: [...state.courses, data.data] }));
    return { success: true, message: "Course created successfully." };
  },
  fetchCourses: async () => {
    const response = await fetch("/api/courses");
    const data = await response.json();
    set({ courses: data.data });

  },
  deleteCourse: async (id) => {
    const response = await fetch(`/api/courses/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (!data.success) {
      return { success: false, message: data.message };
    }
    set((state) => ({
      courses: state.courses.filter((course) => course._id !== id),
    }));
    return { success: true, message: data.message };
  },
  updateCourse: async (id, course) => {
    const response = await fetch(`/api/courses/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });
    const data = await response.json();
    if (!data.success) {
      return { success: false, message: data.message };
    }
    set((state) => ({
      courses: state.courses.map((course) =>
        course._id === id ? data.data  : course
      ),
    }));
    return { success: true, message: data.message };
  },
}));

export default useCourseStore;
