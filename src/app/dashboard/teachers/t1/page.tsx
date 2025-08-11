
import Link from 'next/link';

const teachers = [
  { id: 't1', name: 'Mr. Sharma', subjects: 'English, GK', classes: '1A, 2B' },
  { id: 't2', name: 'Ms. Rao', subjects: 'Science', classes: '3C, 1A' },
  { id: 't3', name: 'Mr. Das', subjects: 'Math, Physics', classes: '1A, 2C' },
  { id: 't4', name: 'Mrs. Priya', subjects: 'EVS', classes: '2B, 3C' },
  
];

export default function TeachersPage() {
  return (
    <main>
      
      <h1 className="text-2xl font-semibold text-black mb-4">List of teachers</h1>

      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
        <table className="min-w-full table-auto text-sm">
          
          <thead className="bg-gray-200">
            <tr>
              <th
                scope="col"
                className="px-6 py-4 text-left text-base font-bold text-black"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-base font-bold text-black"
              >
                Subjects
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-left text-base font-bold text-black"
              >
                Classes Handling
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-right text-base font-bold text-black"
              >
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td className="px-6 py-3 whitespace-nowrap text-gray-900">
                  {teacher.name}
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-gray-700">
                  {teacher.subjects}
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-gray-700">
                  {teacher.classes}
                </td>
                <td className="px-6 py-3 whitespace-nowrap text-right">
                  <Link
                    href={`/dashboard/teachers/${teacher.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View Timetable
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
