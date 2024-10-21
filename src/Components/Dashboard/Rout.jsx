import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
// import CRM from './CRM'; // other components

const Rout = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      {/* <Route path="/crm" element={<CRM />} /> */}
      {/* Other routes */}
    </Routes>
  </Router>
);

export default Rout;
