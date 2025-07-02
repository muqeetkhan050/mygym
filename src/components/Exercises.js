import React from 'react';
import ExerciseCard from './ExerciseCard';

const ExerciseData = [
  {
    title: 'Bench Press',
    level: 'Intermediate',
    muscles: 'Chest, Triceps',
    category: 'Chest',
    description: 'Classic compound exercise for building chest strength and size.',
    instructions: [
      'Lie on bench with feet flat on floor',
      'Grip bar with hands slightly wider than shoulders',
      'Lower bar to chest with control',
      'Press bar up until arms are fully extended',
    ],
  },
  {
    title: 'Squats',
    level: 'Beginner',
    muscles: 'Quadriceps, Glutes',
    category: 'Legs',
    description: 'Fundamental compound strength exercise for lower body.',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Keep chest up and back straight',
      'Bend knees and hips to lower down',
      'Push through heels to return to standing',
    ],
  },
  {
    title: 'Deadlift',
    level: 'Advanced',
    muscles: 'Back, Glutes, Hamstrings',
    category: 'Back',
    description: 'Powerful full-body lift focusing on posterior chain strength.',
    instructions: [
      'Stand with feet hip-width apart',
      'Grip bar just outside legs',
      'Keep back flat and lift by extending hips and knees',
      'Lower bar with control back to the ground',
    ],
  },
  {
    title: 'Overhead Press',
    level: 'Intermediate',
    muscles: 'Shoulders, Triceps',
    category: 'Shoulders',
    description: 'Compound movement to build shoulder strength and size.',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Grip barbell at shoulder level',
      'Press bar overhead until arms are fully extended',
      'Lower bar back to shoulders',
    ],
  },
  {
    title: 'Pull-ups',
    level: 'Intermediate',
    muscles: 'Back, Biceps',
    category: 'Back',
    description: 'Bodyweight exercise targeting upper back and arms.',
    instructions: [
      'Grip pull-up bar with palms facing away',
      'Pull body up until chin is above the bar',
      'Lower body down with control',
    ],
  },
  {
    title: 'Lunges',
    level: 'Beginner',
    muscles: 'Quadriceps, Glutes, Hamstrings',
    category: 'Legs',
    description: 'Effective unilateral leg exercise for strength and balance.',
    instructions: [
      'Step forward with one foot',
      'Lower hips until both knees are bent at 90 degrees',
      'Push back up to standing',
      'Repeat with other leg',
    ],
  },
  {
    title: 'Bicep Curl',
    level: 'Beginner',
    muscles: 'Biceps',
    category: 'Arms',
    description: 'Isolation exercise for building bicep strength and size.',
    instructions: [
      'Stand with dumbbells at your sides',
      'Curl weights up by bending elbows',
      'Lower weights back down slowly',
    ],
  },
  {
    title: 'Plank',
    level: 'Beginner',
    muscles: 'Core',
    category: 'Core',
    description: 'Isometric hold to strengthen the core muscles.',
    instructions: [
      'Place forearms on the ground',
      'Keep body in a straight line from head to heels',
      'Hold position as long as possible',
    ],
  },
  {
    title: 'Russian Twist',
    level: 'Intermediate',
    muscles: 'Obliques, Core',
    category: 'Core',
    description: 'Rotational exercise to target oblique muscles.',
    instructions: [
      'Sit on floor with knees bent and feet lifted',
      'Lean back slightly and twist torso side to side',
      'Touch the floor beside your hips each twist',
    ],
  },
];


const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '20px',
};

const cardWrapperStyle = {
  flexBasis: '30%',  
  marginBottom: '20px',
  boxSizing: 'border-box',
};

const Exercises = () => {
  return (
    <div style={containerStyle}>
      {ExerciseData.map((exercise, index) => (
        <div style={cardWrapperStyle} key={index}>
          <ExerciseCard
            title={exercise.title}
            level={exercise.level}
            muscle={exercise.muscles}
            category={exercise.category}
            description={exercise.description}
            instructions={exercise.instructions}
          />
        </div>
      ))}
    </div>
  );
};

export default Exercises;
