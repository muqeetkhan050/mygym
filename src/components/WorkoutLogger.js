import React from 'react';
import {useState,useEffect} from 'react';

const exerciseOptions=['Bench Press', 'Squats', 'Deadlift', 'Shoulder Press', 'Barbell Row',
  'Lunges', 'Pull-Ups', 'Plank', 'Bicep Curls', 'Tricep Dips']

function WorkoutLogger(){
    return (
      <div className='container py-4'>
        <h2 className='mb-4'>Log your Workout</h2>
        <form className="row g-3 mb-4">
            <div className="col-md-4">
                <label className="form-label">Exercise</label>
                <select className="form-select">
                    <option value="">Select Exercise</option>
                    {exerciseOptions.map((exercise,key)=>(
                        <option key={key} value={exercise}>{exercise}</option>
                    ))}

                </select>
            </div>

        </form>

      </div>
    )
}

export default WorkoutLogger;