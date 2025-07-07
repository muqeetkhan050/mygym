import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuth } from "../Context/AuthContext"; 

function HeaderExtend() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/LoginPage");
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: '#d4b7ee',
        paddingTop: '20px',
        paddingBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '40px',
        paddingRight: '40px',
      }}
    >
      {/* Left side links */}
      <div>
        <ul className="navbar-nav" style={{ display: 'flex', gap: '20px', alignItems: 'center', listStyle: 'none', margin: 0 }}>
          <li className="nav-item active">
            <Link className="nav-link" to="/" style={{ fontSize: '1.1rem' }}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/exercises" style={{ fontSize: '1.1rem' }}>
              Exercises
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard" style={{ fontSize: '1.1rem' }}>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/workout" style={{ fontSize: '1.1rem' }}>
              Workout
            </Link>
          </li>
        </ul>
      </div>

      {/* Right side: Sign out */}
      {user && (
        <button
          onClick={handleSignOut}
          style={{
            backgroundColor: '#9333ea',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            padding: '8px 16px',
            fontSize: '0.95rem',
            cursor: 'pointer',
          }}
        >
          Sign Out
        </button>
      )}
    </nav>
  );
}

export default HeaderExtend;
