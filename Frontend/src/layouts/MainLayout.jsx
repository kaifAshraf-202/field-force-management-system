import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex">

      <Sidebar />

      <div className="ml-64 flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-6">
          {children}
        </div>

      </div>
    </div>
  );
};

export default MainLayout;