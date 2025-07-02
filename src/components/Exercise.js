<div className='container py-4'>
  <div className='row'>
    {ExerciseData.map((exercise, index) => (
      <div className='col-md-6 col-lg-4 mb-4' key={index}>
        <ExerciseCard
          title={exercise.title}
          level={exercise.level}
          muscles={exercise.muscles}
          category={exercise.category}
          description={exercise.description}
          instructions={exercise.instructions}
        />
      </div>
    ))}
  </div>
</div>
