// components/ListingItem.js
import React from 'react';

export default function ListingItem({ course }) {
  const generateRandomImage = () => {
    const imageId = Math.floor(Math.random() * 1000);
    return `https://source.unsplash.com/400x600/?study,learning&id=${imageId}`;
  };

  const uniqueImageSource = course.image || generateRandomImage();

  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
      <img
        src={uniqueImageSource}
        alt="course image"
        className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
      />
      <div className='p-3 flex flex-col gap-2 w-full'>
        <p className='truncate text-lg font-semibold text-slate-700'>
          {course.title}
        </p>
        <p className='text-sm text-gray-600 line-clamp-2'>
          {course.body}
        </p>
        {course.instructor && (
          <p className='text-sm text-slate-500 mt-2 font-semibold'>
            Instructor: {course.instructor}
          </p>
        )}
      </div>
    </div>
  );
}
