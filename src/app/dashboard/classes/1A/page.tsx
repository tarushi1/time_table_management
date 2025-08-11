"use client";

import { useState, FC, ReactNode } from "react";
import { useRouter } from "next/navigation"; 

interface TimetableData {
  period: string;
  time: string;
  subject: string;
  teacher: string | null;
  status: "Present" | "Absent" | "Unassigned";
}

interface TeacherData {
  id: string;
  name: string;
  subjects: string;
  classes: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const initialTimetable: TimetableData[] = [
  { period: "P1", time: "8:00–8:45 AM", subject: "English", teacher: "Mr. Sharma", status: "Present" },
  { period: "P2", time: "9:00–9:45 AM", subject: "Hindi", teacher: "Mr. Rao", status: "Absent" },
  { period: "P3", time: "10:00–10:45 AM", subject: "Mathematics", teacher: null, status: "Unassigned" },
  { period: "P4", time: "11:00–11:45 AM", subject: "EVS", teacher: "Mrs. Priya", status: "Absent" },
  { period: "P5", time: "12:00–12:45 PM", subject: "GK", teacher: "Mr. Sharma", status: "Present" },
];

const teachers: TeacherData[] = [
  { id: "t1", name: "Mr. Sharma", subjects: "English, GK", classes: "1A, 2B" },
  { id: "t2", name: "Ms. Rao", subjects: "Science", classes: "3C, 1A" },
  { id: "t3", name: "Mr. Das", subjects: "Math, Physics", classes: "1A, 2C" },
  { id: "t4", name: "Mrs. Priya", subjects: "EVS", classes: "2B, 3C" },
];

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative bg-white rounded-lg shadow-lg max-w-2xl w-full p-6">
        {children}
      </div>
    </div>
  );
};

const StatusPill: FC<{ status: TimetableData["status"] }> = ({ status }) => {
  const colors: Record<typeof status, string> = {
    Present: "bg-green-200 text-green-800",
    Absent: "bg-red-200 text-red-800",
    Unassigned: "bg-yellow-200 text-yellow-800",
  };
  return (
    <span className={`px-2 py-1 rounded-md text-sm font-medium ${colors[status]}`}>
      {status}
    </span>
  );
};

export default function ClassTimetablePage() {
  const [timetable, setTimetable] = useState(initialTimetable);
  const [isAssignModalOpen, setAssignModalOpen] = useState(false);
  const [currentSlot, setCurrentSlot] = useState<number | null>(null);

  const router = useRouter(); 

  const openAssignModal = (index: number) => {
    setCurrentSlot(index);
    setAssignModalOpen(true);
  };

  const assignTeacher = (teacherName: string) => {
    if (currentSlot !== null) {
      const updated = [...timetable];
      updated[currentSlot].teacher = teacherName;
      updated[currentSlot].status = "Present";
      setTimetable(updated);
    }
    setAssignModalOpen(false);
  };

  return (
    <main className="p-6 space-y-6 bg-white text-black">
      <div className="flex items-center space-x-2 text-blue-600 font-medium">
        <span>Class 1</span>
        <span>1A</span>
      </div>

      <h1 className="text-xl font-semibold">Daily Timetable</h1>

      <div className="flex items-center space-x-4">
        <button className="px-2 py-1 rounded text-blue-600 bg-blue-50 border border-blue-200">
          &lt;
        </button>
        <span className="font-medium">1 July 2025, Monday</span>
        <button className="px-2 py-1 rounded text-blue-600 bg-blue-50 border border-blue-200">
          &gt;
        </button>
      </div>

      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              {["Time", "Subject", "Assigned Teacher", "Status", "Actions"].map((col) => (
                <th
                  key={col}
                  className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b border-gray-200"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timetable.map((slot, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="px-4 py-2">
                  <div className="font-medium">{slot.period}</div>
                  <div className="text-gray-600 text-sm">{slot.time}</div>
                </td>
                <td className="px-4 py-2">{slot.subject}</td>
                <td className="px-4 py-2">{slot.teacher ?? "-"}</td>
                <td className="px-4 py-2">
                  <StatusPill status={slot.status} />
                </td>
                <td className="px-4 py-2">
                  {slot.status === "Present" ? (
                    <span className="text-gray-500">Reassign</span>
                  ) : (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openAssignModal(index);
                      }}
                      className="text-blue-600 hover:underline"
                    >
                      {slot.status === "Unassigned" ? "Assign" : "Reassign"}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center pt-4">
        <button
          onClick={() => router.push("/dashboard/classes")} 
          className="text-gray-600 hover:underline"
        >
          &lt; Back
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Save changes
        </button>
      </div>

      <Modal isOpen={isAssignModalOpen} onClose={() => setAssignModalOpen(false)}>
        <h3 className="text-xl font-semibold mb-4">Assign Teacher</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                {["Name", "Subjects", "Classes", "Action"].map((col) => (
                  <th
                    key={col}
                    className="px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-200"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {teachers.map((t) => (
                <tr key={t.id} className="border-b border-gray-200">
                  <td className="px-4 py-2">{t.name}</td>
                  <td className="px-4 py-2">{t.subjects}</td>
                  <td className="px-4 py-2">{t.classes}</td>
                  <td className="px-4 py-2">
                    <button
                      type="button"
                      onClick={() => assignTeacher(t.name)}
                      className="text-blue-600 hover:underline"
                    >
                      Assign
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal>
    </main>
  );
}
