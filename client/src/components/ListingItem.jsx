import React from 'react';

export default function ListingItem({ course }) {
  const uniqueImageSource = course.image || `https://source.unsplash.com/400x600/?study,learning&id=${course.id}`;

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
          {course.description}
        </p>
        {course.price && (
          <p className='text-slate-500 mt-2 font-semibold '>
            ₹{course.price.toLocaleString('en-US') * 100}
          </p>
        )}
      </div>
    </div>
  );
}
