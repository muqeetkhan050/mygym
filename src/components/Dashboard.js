import WorkoutLogger from "./WorkoutLogger";        


function Dashboard() {
  return (
    <div className="container">
      <h1 className="text-center my-4">Dashboard</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Total Members</h5>
              <p className="card-text">150</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Active Sessions</h5>
              <p className="card-text">45</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">New Signups</h5>
              <p className="card-text">10</p>
            </div>
          </div>
        </div>
      </div>
      <WorkoutLogger/>
    </div>
  );
}

export default Dashboard;