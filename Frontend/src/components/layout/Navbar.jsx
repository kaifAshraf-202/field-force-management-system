
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">

      <h2 className="text-xl font-semibold">
        Field Force Management System
      </h2>

      <div className="flex items-center gap-4">

        <div className="text-right">
          <p className="font-medium">Kaif Ashraf</p>
          <p className="text-sm text-gray-500">Admin</p>
        </div>

        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />

      </div>
      <div className="flex items-center gap-4">

        <div className="text-right">

          <p className="font-medium">Kaif Ashraf</p>

          <p className="text-sm text-gray-500">Admin</p>

        </div>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
          onClick={logout}
        >
          Logout
        </button>

      </div>
    </div>
  );
};

export default Navbar;