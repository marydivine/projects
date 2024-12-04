import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/course" element={<Course />} /> */}
          {/* <Route path="*" element={<Navigate to="/course" />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

// function Home() {
//   return <h1>Welcome to Home</h1>;
// }

export default App;
