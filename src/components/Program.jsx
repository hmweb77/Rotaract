"use client";
import { useState } from 'react';
import activitiesList from '@/activitiesList'; 

const Program = () => {
  const [selectedDay, setSelectedDay] = useState(activitiesList.activities[0].day);
  const [showDropdown, setShowDropdown] = useState(false);

  const activitiesForSelectedDay = activitiesList.activities.find(activity => activity.day === selectedDay)?.activities || [];

  return (
    <div className="p-4 md:p-8">
      <div className="tabs mb-4 block md:flex">
        <div className="relative md:hidden">
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="tab tab-bordered tab-active w-full text-left"
          >
            {selectedDay}
            <span className="absolute right-4 top-0 bottom-0 my-auto h-6 w-6">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          {showDropdown && (
            <div className="absolute z-10 w-full bg-white shadow-md mt-1">
              {activitiesList.activities.map(activity => (
                <a
                  key={activity.day}
                  onClick={() => {
                    setSelectedDay(activity.day);
                    setShowDropdown(false);
                  }}
                  className={`block p-4 hover:bg-gray-100 ${selectedDay === activity.day ? 'bg-gray-200' : ''}`}
                >
                  {activity.day}
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="hidden md:block">
          {activitiesList.activities.map(activity => (
            <a
              key={activity.day}
              className={`tab tab-bordered${selectedDay === activity.day ? ' tab-active' : ''} hover:bg-primary hover:text-white transition-colors duration-300`}
              onClick={() => setSelectedDay(activity.day)}
            >
              {activity.day}
            </a>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full shadow-lg">
          <thead className="text-xs sm:text-sm text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="w-full md:w-1/6 py-3 px-6">Time</th>
              <th className="w-full md:w-2/6 py-3 px-6">Name</th>
              <th className="w-full md:w-3/6 py-3 px-6">Description</th>
            </tr>
          </thead>
          <tbody>
            {activitiesForSelectedDay.map((activity, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="py-4 px-6">{activity.time}</td>
                <td className="py-4 px-6">{activity.name}</td>
                <td className="py-4 px-6">{activity.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Program;


