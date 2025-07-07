// import React from "react";
// import WorkoutLogger from "./WorkoutLogger";
// import GymTaglineWithButton from "./GymTaglineWithButton";
// import FullScreenBanner from "./FullScreenBanner";

// function MainPage() {
//   const containerStyle = {
//     width: "100vw",
//     height: "100%",
//     margin: 0,
//     padding: 0,
//     overflowX: "hidden",
//   };

//   return (
//     <div style={containerStyle}>
//       <FullScreenBanner />
//       <GymTaglineWithButton />
//     </div>
//   );
// }

// export default MainPage;

import React from "react";
import WorkoutLogger from "./WorkoutLogger";
import GymTaglineWithButton from "./GymTaglineWithButton";
import FullScreenBanner from "./FullScreenBanner";
import { useAuth } from "../Context/AuthContext"; // ✅ fixed path
import { Navigate } from "react-router-dom";
import HeaderExtend from "./HeaderExtend";

function MainPage() {
  const { user } = useAuth();

  const containerStyle = {
    width: "100vw",
    height: "100%",
    margin: 0,
    padding: 0,
    overflowX: "hidden",
  };

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <> <HeaderExtend/>
    <div style={containerStyle}>
       
      <FullScreenBanner />
      <GymTaglineWithButton />
    </div></>
  );
}

export default MainPage;
