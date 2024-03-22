"use client"
import { useState } from 'react';
import Image from 'next/image';
import teamMembers from '@/teamMembers';

const Team = () => {
  return (
    <div className="my-8 mx-4">
      <h1 className="text-3xl font-bold mb-6">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center p-4 shadow-lg rounded-lg">
            <Image
              src={member.image}
              alt={member.name}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto"
            />
            <h3 className="text-lg font-medium mt-4">{member.name}</h3>
            <p className="text-gray-600">{member.function}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
