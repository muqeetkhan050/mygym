import WorkoutLogger from "./WorkoutLogger";

function MainPage() {
  return (
    <div className="container">
      <h1 className="text-center my-4">Welcome to My Gym</h1>
      <WorkoutLogger/>
    </div>
  );
}           

export default MainPage;