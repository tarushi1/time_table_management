
import SideNav from "@/components/SideNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 flex-none">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto">
        {children}
      </div>
    </div>
  );
}