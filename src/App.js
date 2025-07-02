import './App.css';
import HeaderExtend from './components/HeaderExtend';
import Exercises from './components/Exercises';
import MainPage from './components/MainPage';
import Dashboard from './components/Dashboard';
import Workout from './components/Workout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HeaderExtend />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/workout" element={<Workout />} />
      </Routes>
    </div>
  );
}

export default App;
