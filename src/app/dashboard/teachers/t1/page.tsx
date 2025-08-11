
"use client";

import { useState, useEffect } from 'react';

interface TimetableEntry {
  time: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
}

interface TeacherTimetableData {
  name: string;
  subjects: string;
  classes: string;
  timetable: TimetableEntry[];
}

const mockTeacherData: TeacherTimetableData = {
  name: 'Mr. Sharma',
  subjects: 'English, GK',
  classes: '1A, 2B',
  timetable: [
    { time: '8:00-8:45 AM', monday: '1A-English', tuesday: '2A-GK', wednesday: '1A-English', thursday: 'Free', friday: 'Free' },
    { time: '9:00-9:45 AM', monday: 'Free', tuesday: '1A-GK', wednesday: '2A-English', thursday: '1A-GK', friday: 'Free' },
    { time: '10:00-10:45 AM', monday: '2A-English', tuesday: 'Free', wednesday: 'Free', thursday: '2A-English', friday: '1A-English' },
    { time: '11:00-11:45 AM', monday: 'Free', tuesday: '1A-English', wednesday: 'Free', thursday: 'Free', friday: '2A-GK' },
    { time: '12:00-12:45 PM', monday: 'Free', tuesday: 'Free', wednesday: '2A-GK', thursday: 'Free', friday: 'Free' },
  ],
};

export default function TeacherTimetablePage({ params }: { params: { teacher_id: string } }) {

  const { teacher_id } = params;
  

  const [teacherData, setTeacherData] = useState<TeacherTimetableData | null>(null);

  useEffect(() => {
    
    setTimeout(() => {
      setTeacherData(mockTeacherData);
    }, 1000);
    
  }, [teacher_id]);

  if (!teacherData) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg">
        <div className="animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-blue-600 border-gray-200" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p className="ml-2 text-gray-700">Loading timetable...</p>
      </div>
    );
  }

  return (
    <main className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{teacherData.name}</h1>
        <p className="text-md text-gray-600 mb-1">Subjects: <span className="font-medium text-gray-800">{teacherData.subjects}</span></p>
        <p className="text-md text-gray-600">Assigned Classes: <span className="font-medium text-gray-800">{teacherData.classes}</span></p>
      </header>

      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Slot</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monday</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tuesday</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wednesday</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thursday</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Friday</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {teacherData.timetable.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.time}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className={item.monday === 'Free' ? 'text-green-600' : 'text-gray-900'}>
                    {item.monday}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className={item.tuesday === 'Free' ? 'text-green-600' : 'text-gray-900'}>
                    {item.tuesday}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className={item.wednesday === 'Free' ? 'text-green-600' : 'text-gray-900'}>
                    {item.wednesday}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className={item.thursday === 'Free' ? 'text-green-600' : 'text-gray-900'}>
                    {item.thursday}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className={item.friday === 'Free' ? 'text-green-600' : 'text-gray-900'}>
                    {item.friday}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
      <div className="mt-8 flex justify-center">
        <a href="/dashboard/teachers" className="text-gray-500 hover:text-gray-700 font-medium flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </a>
      </div>
    </main>
  );
}
