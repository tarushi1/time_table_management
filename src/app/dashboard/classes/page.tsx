"use client";

import Link from "next/link";
import React, { ReactNode } from "react";

interface ClassGroup {
  group: string;
  classes: string[];
}

const classGroups: ClassGroup[] = [
  { group: "Class 1", classes: ["1A", "1B", "1C"] },
  { group: "Class 2", classes: ["2A", "2B", "2C"] },
  { group: "Class 3", classes: ["3A", "3B", "3C", "3D"] },
];

export default function ClassesPage(): ReactNode {
  return (
    <main className="flex flex-col bg-white min-h-screen px-8 py-6">
      <h1 className="text-blue-500 text-lg font-medium mb-6">Classes</h1>

      {classGroups.map((group, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-sm font-medium text-gray-500 mb-3">
            {group.group}
          </h2>

          <div className="flex flex-wrap gap-4">
            {group.classes.map((className) => (
              <Link
                key={className}
                href={`/dashboard/classes/${className}`}
                className="bg-gradient-to-b from-blue-500 to-blue-600 text-white text-base font-medium px-5 py-4 flex items-center justify-center rounded-lg shadow-sm hover:from-blue-600 hover:to-blue-700 transition-colors"
              >
                {className}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
