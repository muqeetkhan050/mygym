import React, { useState } from 'react';

const exerciseOptions = [
  'Bench Press', 'Squats', 'Deadlift', 'Shoulder Press', 'Barbell Row',
  'Lunges', 'Pull-Ups', 'Plank', 'Bicep Curls', 'Tricep Dips'
];

function WorkoutLogger() {
  const [workoutData, setWorkoutData] = useState({
    exercise: '',
    sets: '',
    reps: '',
    weight: '',
    calories: ''
  });

  const [workoutLog, setWorkoutLog] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkoutData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!workoutData.exercise || !workoutData.sets || !workoutData.reps||!workoutData.calories||!workoutData.weight) {
      alert('Please fill in at least Exercise, Sets, and Reps');
      return;
    }


    const newWorkout = {
      ...workoutData,
      id: Date.now()
    };

    setWorkoutLog(prev => [...prev, newWorkout]);

    setWorkoutData({
      exercise: '',
      sets: '',
      reps: '',
      weight: '',
      calories: ''
    });
  };

  const deleteWorkout = (id) => {
    setWorkoutLog(prev => prev.filter(workout => workout.id !== id));
  };

  // Styles
  const containerStyle = {
    maxWidth: '900px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333'
  };

  const headingStyle = {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '24px',
    color: '#1E293B'
  };

  const formSectionStyle = {
    backgroundColor: '#F8FAFC',
    padding: '24px',
    borderRadius: '10px',
    marginBottom: '36px',
    boxShadow: 'inset 0 0 8px #E2E8F0'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '18px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '6px',
    fontWeight: '600',
    fontSize: '14px',
    color: '#475569'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    fontSize: '15px',
    borderRadius: '8px',
    border: '1.5px solid #CBD5E1',
    outline: 'none',
    transition: 'border-color 0.3s ease'
  };

  const inputFocusStyle = {
    borderColor: '#3B82F6',
    boxShadow: '0 0 6px #93C5FD'
  };

  const buttonStyle = {
    backgroundColor: '#3B82F6',
    color: 'white',
    padding: '12px',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.25s ease'
  };

  const buttonHoverStyle = {
    backgroundColor: '#2563EB'
  };

  const workoutCardStyle = {
    backgroundColor: '#fff',
    border: '1px solid #CBD5E1',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 3px 8px rgba(0,0,0,0.07)',
    marginBottom: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '15px',
    color: '#334155'
  };

  const summaryStyle = {
    marginTop: '32px',
    backgroundColor: '#EFF6FF',
    border: '1px solid #BFDBFE',
    borderRadius: '12px',
    padding: '20px',
    color: '#1E40AF',
    fontWeight: '600',
    fontSize: '16px',
    display: 'flex',
    justifyContent: 'space-around'
  };

  // For input focus (simple)
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Log your Workout</h2>

      <div style={formSectionStyle}>
        <div style={gridStyle}>
          <div>
            <label style={labelStyle}>Exercise *</label>
            <select
              name="exercise"
              value={workoutData.exercise}
              onChange={handleInputChange}
              onFocus={() => setFocusedInput('exercise')}
              onBlur={() => setFocusedInput(null)}
              style={{
                ...inputStyle,
                ...(focusedInput === 'exercise' ? inputFocusStyle : {})
              }}
            >
              <option value="">Select Exercise</option>
              {exerciseOptions.map((ex, i) => (
                <option key={i} value={ex}>{ex}</option>
              ))}
            </select>
          </div>

          <div>
            <label style={labelStyle}>Sets *</label>
            <input
              type="number"
              name="sets"
              value={workoutData.sets}
              onChange={handleInputChange}
              onFocus={() => setFocusedInput('sets')}
              onBlur={() => setFocusedInput(null)}
              min="1"
              placeholder="e.g., 3"
              style={{
                ...inputStyle,
                ...(focusedInput === 'sets' ? inputFocusStyle : {})
              }}
            />
          </div>

          <div>
            <label style={labelStyle}>Reps *</label>
            <input
              type="number"
              name="reps"
              value={workoutData.reps}
              onChange={handleInputChange}
              onFocus={() => setFocusedInput('reps')}
              onBlur={() => setFocusedInput(null)}
              min="1"
              placeholder="e.g., 12"
              style={{
                ...inputStyle,
                ...(focusedInput === 'reps' ? inputFocusStyle : {})
              }}
            />
          </div>

          <div>
            <label style={labelStyle}>Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={workoutData.weight}
              onChange={handleInputChange}
              onFocus={() => setFocusedInput('weight')}
              onBlur={() => setFocusedInput(null)}
              min="0"
              step="0.5"
              placeholder="e.g., 80"
              style={{
                ...inputStyle,
                ...(focusedInput === 'weight' ? inputFocusStyle : {})
              }}
            />
          </div>

          <div>
            <label style={labelStyle}>Calories Burned</label>
            <input
              type="number"
              name="calories"
              value={workoutData.calories}
              onChange={handleInputChange}
              onFocus={() => setFocusedInput('calories')}
              onBlur={() => setFocusedInput(null)}
              min="0"
              placeholder="e.g., 150"
              style={{
                ...inputStyle,
                ...(focusedInput === 'calories' ? inputFocusStyle : {})
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <button
              type="button"
              onClick={handleSubmit}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
              style={buttonStyle}
            >
              Add Exercise
            </button>
          </div>
        </div>
      </div>

      {workoutLog.length > 0 && (
        <>
          <h3 style={{ ...headingStyle, fontSize: '22px', marginBottom: '20px', color: '#334155' }}>
            Today's Workout
          </h3>

          <div>
            {workoutLog.map(workout => (
              <div key={workout.id} style={workoutCardStyle}>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', flex: 1 }}>
                  <div>
                    <div style={{ fontSize: '13px', color: '#64748B' }}>Exercise:</div>
                    <div style={{ fontWeight: '600' }}>{workout.exercise}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', color: '#64748B' }}>Sets × Reps:</div>
                    <div>{workout.sets} × {workout.reps}</div>
                  </div>
                  {workout.weight && (
                    <div>
                      <div style={{ fontSize: '13px', color: '#64748B' }}>Weight:</div>
                      <div>{workout.weight} kg</div>
                    </div>
                  )}
                  {workout.calories && (
                    <div>
                      <div style={{ fontSize: '13px', color: '#64748B' }}>Calories:</div>
                      <div>{workout.calories}</div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => deleteWorkout(workout.id)}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#EF4444',
                    cursor: 'pointer',
                    fontWeight: '600',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#FEE2E2';
                    e.currentTarget.style.color = '#B91C1C';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#EF4444';
                  }}
                  aria-label="Delete workout"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <div style={summaryStyle}>
            <div>
              Total Exercises: <span style={{ fontWeight: '700', marginLeft: '6px' }}>{workoutLog.length}</span>
            </div>
            <div>
              Total Sets: <span style={{ fontWeight: '700', marginLeft: '6px' }}>
                {workoutLog.reduce((sum, w) => sum + parseInt(w.sets || 0), 0)}
              </span>
            </div>
            <div>
              Total Calories: <span style={{ fontWeight: '700', marginLeft: '6px' }}>
                {workoutLog.reduce((sum, w) => sum + parseInt(w.calories || 0), 0)}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default WorkoutLogger;
