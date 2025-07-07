import React, { useEffect, useState } from 'react';
import './App.css';
import Exercises from './components/Exercises';
import MainPage from './components/MainPage';
import Dashboard from './components/Dashboard';
import Workout from './components/Workout';
import LoginPage from './components/LoginPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/LoginPage" replace />;
  }
  return children;
}

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // <-- Add loading state
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);  // <-- Finished loading when auth state known
    });

    return () => unsubscribe();
  }, [auth]);

  if (loading) {
    return <div style={{textAlign: 'center', marginTop: '50px'}}>Loading...</div>;
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
            <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/workout"
          element={
            <ProtectedRoute user={user}>
              <Workout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
