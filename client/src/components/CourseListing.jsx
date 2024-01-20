import React, { useState, useEffect } from 'react';
import ListingItem from '../components/ListingItem';

export default function CourseListing() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [cache, setCache] = useState({});

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        if (cache[page]) {
          setCourses((prevCourses) => [...prevCourses, ...cache[page]]);
        } else {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
          if (response.ok === false) {
            setError("Failed to fetch courses");
            return;
          }
          const data = await response.json();
          setCache((prevCache) => ({ ...prevCache, [page]: data }));
          setCourses((prevCourses) => [...prevCourses, ...data]);
        }
        setLoading(false);
        setError(null);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchCourses();
  }, [page]);

  const onShowMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (error) {
    return <p className='text-red-500 font-medium sm:font-semibold mt-5'>Error: {error}</p>;
  }

  return (
    <div className="mt-20 p-4 flex flex-wrap justify-center gap-4">
      {!loading && courses.length === 0 && (
        <p className='text-xl text-slate-300'>No Courses Available!</p>
      )}
      {loading && courses.length > 0 && (
        <p className='text-4xl text-center w-full'>
          Loading...
        </p>
      )}
      {!loading && courses && courses.map((course) => (
        <ListingItem key={course.id} course={course} />
      ))}
      {!loading && courses.length > 0 && courses.length % 20 === 0 && (
        <div className="flex justify-center w-full">
          <button
            onClick={onShowMoreClick}
            className='bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800'
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
}
