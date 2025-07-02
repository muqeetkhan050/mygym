function Workout() {
  return (
    <div className="container">
      <h1 className="text-center my-4">Workout Plans</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Plan A</h5>
              <p className="card-text">Description of Plan A.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Plan B</h5>
              <p className="card-text">Description of Plan B.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Plan C</h5>
              <p className="card-text">Description of Plan C.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workout;