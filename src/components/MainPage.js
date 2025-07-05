import React from "react";
import WorkoutLogger from "./WorkoutLogger";
import GymTaglineWithButton from "./GymTaglineWithButton";
import FullScreenBanner from "./FullScreenBanner";

function MainPage() {
  const containerStyle = {
    width: "100vw",
    height: "100%",
    margin: 0,
    padding: 0,
    overflowX: "hidden",
  };

  return (
    <div style={containerStyle}>
      <FullScreenBanner />
      <GymTaglineWithButton />
    </div>
  );
}

export default MainPage;
