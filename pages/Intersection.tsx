import React from 'react';

const Intersection = () => {
  type Admin = {
    name: string;
    priveleges: string[];
  };

  type Employee = {
    name: string;
    startDate: Date;
  };

  type DepChief = Admin & Employee;

  const e1: DepChief = {
    name: 'Victor',
    priveleges: ['hire ppl'],
    startDate: new Date(),
  };
  return (
    <div>
      <p>Intersection</p>
    </div>
  );
};

export default Intersection;
