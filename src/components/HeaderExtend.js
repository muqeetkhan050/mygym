import { Link } from 'react-router-dom';

function HeaderExtend() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: '#d4b7ee',
        paddingTop: '20px',
        paddingBottom: '20px',
        justifyContent: 'center',
      }}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse"
        id="navbarNav"
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ul className="navbar-nav" style={{ gap: '20px', alignItems: 'center' }}>
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
    </nav>
  );
}

export default HeaderExtend;
