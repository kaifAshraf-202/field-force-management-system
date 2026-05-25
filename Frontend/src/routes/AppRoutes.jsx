import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import TaskList from "../pages/Tasks/TaskList";
import VisitList from "../pages/Visits/VisitList";
import Reports from "../pages/Reports/Reports";
import Login from "../pages/Auth/Login";

import ProtectedRoute from "../components/common/ProtectedRoute";

const AppRoutes = () => {

  return (

    <Routes>

      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tasks"
        element={
          <ProtectedRoute>
            <TaskList />
          </ProtectedRoute>
        }
      />

      <Route
        path="/visits"
        element={
          <ProtectedRoute>
            <VisitList />
          </ProtectedRoute>
        }
      />

      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <Reports />
          </ProtectedRoute>
        }
      />

    </Routes>

  );
};

export default AppRoutes;