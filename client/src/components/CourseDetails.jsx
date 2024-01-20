// pages/CourseDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const generateRandomName = () => {
  const names = ['Advanced React', 'JavaScript Mastery', 'Full Stack Development', 'Web Design Fundamentals'];
  return names[Math.floor(Math.random() * names.length)];
};

const generateRandomInstructor = () => {
  const instructors = ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Brown', 'Charlie White'];
  return instructors[Math.floor(Math.random() * instructors.length)];
};

const generateRandomEnrollmentStatus = () => {
  const statuses = ['Open', 'Closed', 'In Progress'];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

const fetchCourseDetails = (courseId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: courseId,
        name: generateRandomName(),
        instructor: generateRandomInstructor(),
        description: 'This is an advanced course with in-depth topics.',
        enrollmentStatus: generateRandomEnrollmentStatus(),
        duration: '8 weeks',
        schedule: 'Mon-Fri, 10:00 AM - 12:00 PM',
        location: 'Virtual Classroom',
        prerequisites: ['Basic Knowledge', 'Intermediate Skills'],
        syllabus: ['Week 1: Introduction', 'Week 2: Advanced Topics', 'Week 3: Final Project'],
      });
    }, 1000);
  });
};

const CourseDetails = () => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await fetchCourseDetails(id);
        setCourseDetails(details);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching course details:', error);
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) {
    return <p>Loading course details...</p>;
  }

  if (!courseDetails) {
    return <p>Error loading course details.</p>;
  }

  return (
    <div className="p-4 flex flex-col items-center">
      <p className="text-2xl font-bold mb-4 mt-10">{courseDetails.name}</p>
      <p className="text-gray-600 mb-2 my-6 text-2xl">ID: {courseDetails.id}</p>
      <p className="text-gray-600 mb-2 my-6 text-2xl">Instructor: {courseDetails.instructor}</p>
      <p className="text-gray-600 mb-2 my-6 text-2xl">Description: {courseDetails.description}</p>
      <p className="text-gray-600 mb-2 my-6 text-2xl">Enrollment Status: {courseDetails.enrollmentStatus}</p>
      <p className="text-gray-600 mb-2 my-6 text-2xl">Duration: {courseDetails.duration}</p>
      <p className="text-gray-600 mb-2 my-6 text-2xl">Schedule: {courseDetails.schedule}</p>
      <p className="text-gray-600 mb-2 my-6 text-2xl">Location: {courseDetails.location}</p>
      <p className="text-gray-600 mb-2 my-6 text-2xl">Prerequisites: {courseDetails.prerequisites.join(', ')}</p>
      <details className="mb-4">
        <summary className="font-bold text-gray-800">Syllabus</summary>
        <ul className="list-disc pl-4">
          {courseDetails.syllabus.map((item, index) => (
            <li key={index} className="text-gray-600">{item}</li>
          ))}
        </ul>
      </details>
    </div>
  );
};

export default CourseDetails;
