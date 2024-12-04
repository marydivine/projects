import React from 'react';

const CourseCard = ({ title, description, imageUrl, instructor, duration }) => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg flex flex-col">
            <img className="w-full" src={imageUrl} alt={title} />
            <div className="px-6 py-4 flex-grow">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 py-4">
                <p className="text-gray-700"><strong>Instructor:</strong> {instructor}</p>
                <p className="text-gray-700"><strong>Duration:</strong> {duration}</p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Course</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Intermediate</span>
            </div>
        </div>
    );
};

export default CourseCard;
