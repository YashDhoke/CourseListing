// components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const generateRandomImage = () => {
  const imageId = Math.floor(Math.random() * 1000);
  return `https://source.unsplash.com/400x600/?study,learning&id=${imageId}`;
};

const fetchEnrolledCourses = () => {
  // Simulating fetching enrolled courses from an API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Course 1', instructor: 'John Doe', thumbnail: generateRandomImage(), dueDate: '2022-12-31', progress: 50 },
        { id: 2, name: 'Course 2', instructor: 'Jane Smith', thumbnail: generateRandomImage(), dueDate: '2022-12-30', progress: 25 },
        // Add more enrolled courses
      ]);
    }, 1000);
  });
};

const Dashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courses = await fetchEnrolledCourses();
        setEnrolledCourses(courses.slice(0, 7)); // Display no more than 7 enrolled courses
      } catch (error) {
        console.error('Error fetching enrolled courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Enrolled Courses</h2>
      {enrolledCourses.length === 0 ? (
        <p>No enrolled courses found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg">
              <Link to={`/details/${course.id}`}>
                <img
                  src={course.thumbnail}
                  alt={`Thumbnail for ${course.name}`}
                  className="h-[200px] w-full object-cover"
                />
                <div className="p-3">
                  <p className="text-lg font-semibold text-slate-700 truncate">{course.name}</p>
                  <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
                  <p className="text-sm text-gray-600">Due Date: {course.dueDate}</p>
                  <div className="mt-2">
                    <progress className="w-full" value={course.progress} max="100" />
                    <p className="text-sm text-gray-600 mt-1">{course.progress}% Complete</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
