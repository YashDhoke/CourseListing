import React, { useEffect, useState } from 'react';

export default function ListingItem({ course }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        const imageUrl = data.url;
        setImageUrl(imageUrl);
      });
  }, []);

  return (
    <div className='bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
      <img
        src={imageUrl || 'https://example.com/default-image.jpg'}
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
