import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import ClassesPage from "./pages/ClassesPage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";

import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<ClassesPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
