

import React from 'react';
import './App.css';
import Exercises from './components/Exercises';
import MainPage from './components/MainPage';
import Dashboard from './components/Dashboard';
import Workout from './components/Workout';
import LoginPage from './components/LoginPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './Context/AuthContext'; // ✅ Use the context

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  const { user, loading } = useAuth(); // ✅ Get global user and loading

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</div>;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/workout"
          element={
            <ProtectedRoute>
              <Workout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
