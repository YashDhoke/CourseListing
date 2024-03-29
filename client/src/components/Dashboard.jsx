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
      const allCourses = [
        { id: 1, name: 'C++', instructor: 'John Doe', thumbnail: generateRandomImage(), dueDate: '2022-12-31', progress: 50, completed: false },
        { id: 2, name: 'React', instructor: 'Jane Smith', thumbnail: generateRandomImage(), dueDate: '2022-12-30', progress: 25, completed: false },
        { id: 3, name: 'MERN Stack', instructor: 'Bob Johnson', thumbnail: generateRandomImage(), dueDate: '2022-12-29', progress: 75, completed: false },
        { id: 4, name: 'Ruby on Rails', instructor: 'Alice Brown', thumbnail: generateRandomImage(), dueDate: '2022-12-28', progress: 40, completed: false },
        { id: 5, name: 'Blockchain', instructor: 'Charlie White', thumbnail: generateRandomImage(), dueDate: '2022-12-27', progress: 60, completed: false },
        // Add more enrolled courses
      ];

      // Generate a random number of courses to display (between 1 and allCourses.length)
      const numberOfCoursesToShow = Math.floor(Math.random() * allCourses.length) + 1;
      const randomCourses = allCourses.slice(0, numberOfCoursesToShow);

      resolve(randomCourses);
    }, 1000);
  });
};

const Dashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courses = await fetchEnrolledCourses();
        setEnrolledCourses(courses);
      } catch (error) {
        console.error('Error fetching enrolled courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleMarkCompleted = (courseId) => {
    // Simulate marking the course as completed
    setEnrolledCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId
          ? { ...course, completed: true, progress: 100 } // Set progress to 100 when completed
          : course
      )
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Enrolled Courses</h2>
      {enrolledCourses.length === 0 ? (
        <p>No enrolled courses found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg">
              {/* Use onClick to handle Mark as Completed button */}
              <div>
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
                  {course.completed ? (
                    <div>
                      <p className="font-bold text-green-500">Course Completed!</p>
                      <Link to="/" className="text-blue-500 mt-2 block">
                        View More
                      </Link>
                    </div>
                  ) : (
                    <div className="mt-2">
                      <Link to={`/details/${course.id}`} className="text-blue-500 block">
                        View Details
                      </Link>
                      <button onClick={() => handleMarkCompleted(course.id)} className="bg-blue-500 text-white px-3 py-1 mt-2">
                        Mark as Completed
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Button to Explore More Courses */}
      <Link to="/" className="bg-blue-500 text-white flex justify-center mt-10 max-w-sm mx-auto p-4 rounded-md">
        Explore more courses
      </Link>
    </div>
  );
};

export default Dashboard;
