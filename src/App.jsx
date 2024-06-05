import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import WorkoutLog from "./pages/WorkoutLog.jsx"; // Import the new WorkoutLog page
import ProgressTracking from "./pages/ProgressTracking.jsx"; // Import the new ProgressTracking page

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/log-workout" element={<WorkoutLog />} /> {/* Add the new route */}
      <Route path="/progress-tracking" element={<ProgressTracking />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;