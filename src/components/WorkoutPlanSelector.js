import React, { useState } from 'react';

const workoutPlans = {
  A: {
    title: 'Beginner Full-Body Plan (3 Days)',
    frequency: 'Monday – Wednesday – Friday',
    goal: 'Build a foundation, learn form, increase strength',
    workouts: [
      {
        day: 'All Days', exercises: [
          { name: 'Squats (Bodyweight or Goblet)', sets: 3, reps: 12 },
          { name: 'Push-Ups (or Incline)', sets: 3, reps: 10 },
          { name: 'Dumbbell Rows', sets: 3, reps: 10 },
          { name: 'Plank', sets: 3, reps: '30s' },
          { name: 'Walking Lunges', sets: 2, reps: '10 each leg' },
        ]
      }
    ]
  },
  B: {
    title: 'Intermediate Muscle Split Plan (4 Days)',
    frequency: 'Mon – Tue – Thu – Fri',
    goal: 'Build lean muscle and improve definition',
    workouts: [
      {
        day: 'Day 1 – Chest & Triceps', exercises: [
          { name: 'Bench Press', sets: 4, reps: 8 },
          { name: 'Dumbbell Flys', sets: 3, reps: 10 },
          { name: 'Tricep Dips', sets: 3, reps: 12 },
          { name: 'Push-Ups', sets: 3, reps: 12 },
        ]
      },
      {
        day: 'Day 2 – Back & Biceps', exercises: [
          { name: 'Deadlifts', sets: 4, reps: 6 },
          { name: 'Pull-Ups', sets: 3, reps: 'Max' },
          { name: 'Barbell Rows', sets: 3, reps: 10 },
          { name: 'Bicep Curls', sets: 3, reps: 12 },
        ]
      },
      {
        day: 'Day 3 – Shoulders & Abs', exercises: [
          { name: 'Shoulder Press', sets: 3, reps: 10 },
          { name: 'Lateral Raises', sets: 3, reps: 12 },
          { name: 'Plank', sets: 3, reps: '45s' },
          { name: 'Russian Twists', sets: 3, reps: 20 },
        ]
      },
      {
        day: 'Day 4 – Legs', exercises: [
          { name: 'Squats', sets: 4, reps: 8 },
          { name: 'Lunges', sets: 3, reps: '10 each leg' },
          { name: 'Calf Raises', sets: 3, reps: 20 },
          { name: 'Leg Press', sets: 3, reps: 10 },
        ]
      }
    ]
  },
  C: {
    title: 'Fat Burn + Conditioning Plan (5 Days)',
    frequency: 'Mon to Fri',
    goal: 'Burn fat, improve stamina, tone muscles',
    workouts: [
      {
        day: 'Day 1 – HIIT Full Body', exercises: [
          { name: 'Jump Squats', sets: '30s', reps: '5 rounds' },
          { name: 'Mountain Climbers', sets: '30s', reps: '5 rounds' },
          { name: 'Burpees', sets: '30s', reps: '5 rounds' },
        ]
      },
      {
        day: 'Day 2 – Upper Body', exercises: [
          { name: 'Push-Ups', sets: 3, reps: 12 },
          { name: 'Shoulder Press', sets: 3, reps: 10 },
          { name: 'Plank', sets: 3, reps: '30s' },
        ]
      },
      {
        day: 'Day 3 – Cardio Core', exercises: [
          { name: 'Jump Rope', sets: 5, reps: '1 min' },
          { name: 'Bicycle Crunches', sets: 3, reps: 20 },
          { name: 'Russian Twists', sets: 3, reps: 20 },
        ]
      },
      {
        day: 'Day 4 – Lower Body', exercises: [
          { name: 'Squats', sets: 3, reps: 12 },
          { name: 'Lunges', sets: 3, reps: '10 each leg' },
          { name: 'Step-Ups', sets: 3, reps: 10 },
        ]
      },
      {
        day: 'Day 5 – Strength Combo', exercises: [
          { name: 'Deadlifts', sets: 4, reps: 6 },
          { name: 'Rows', sets: 3, reps: 10 },
          { name: 'Push Press', sets: 3, reps: 8 },
        ]
      }
    ]
  }
};

function WorkoutPlanSelector() {
  const [userChoice, setUserChoice] = useState('');
  const [plan, setPlan] = useState(null);

  const handleInput = (e) => {
    const choice = e.target.value.toUpperCase(); // Accept lowercase too
    setUserChoice(choice);
    if (workoutPlans[choice]) {
      setPlan(workoutPlans[choice]);
    } else {
      setPlan(null);
    }
  };

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '40px auto',
      padding: '30px',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 6px 16px rgba(0,0,0,0.08)'
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      width: '100%',
      borderRadius: '8px',
      border: '1px solid #d1d5db',
      marginBottom: '24px'
    },
    label: {
      marginBottom: '10px',
      fontWeight: '600',
      fontSize: '16px'
    },
    day: {
      marginTop: '20px',
      fontSize: '18px',
      fontWeight: '500',
      color: '#1e40af'
    }
  };

  return (
    <div style={styles.container}>
      <label style={styles.label}>Enter A, B, or C to select your workout plan:</label>
      <input
        type="text"
        placeholder="A = 3 Days, B = 4 Days, C = 5 Days"
        value={userChoice}
        onChange={handleInput}
        style={styles.input}
        maxLength={1}
      />

      {plan ? (
        <>
          <h2 style={{ fontSize: '22px', fontWeight: '600' }}>{plan.title}</h2>
          <p><strong>Goal:</strong> {plan.goal}</p>
          <p><strong>Frequency:</strong> {plan.frequency}</p>

          {plan.workouts.map((day, index) => (
            <div key={index}>
              <h3 style={styles.day}>{day.day}</h3>
              <ul style={{ marginLeft: '20px' }}>
                {day.exercises.map((ex, i) => (
                  <li key={i}>{ex.name} — {ex.sets} × {ex.reps}</li>
                ))}
              </ul>
            </div>
          ))}
        </>
      ) : userChoice && (
        <p style={{ color: 'red', fontWeight: '500' }}>Please enter A, B, or C</p>
      )}
    </div>
  );
}

export default WorkoutPlanSelector;
