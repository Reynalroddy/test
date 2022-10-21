// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import  Home from "./components/Home";

// import Home2 from "./components/Home2";

// import Dashboard from "./pages/Dashboard";
// import Device from "./pages/Device";
// import Single from "./pages/Single";
import './App.scss';
import ProtectedRoute from "./pages/ProtectedRoute";
// import Verified from "./pages/Verified";
// import Flagged from "./pages/Flagged";
// import Pending from "./pages/Pending";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import SingleApplication from "./pages/SingleApplication";
// import Home from "./components/Home";
// import Admin from "./pages/Admin";
// import ProtectedRouteAdmin from "./pages/ProtectedRouteAdmin";
// import Homez from "./components/Homez";
// import AdminFlagged from "./pages/AdminFlagged";
// import AdminVerified from "./pages/AdminVerified";
import Dashboard from "./pages/Dashboard";
import Testz from "./components/SharedLayout";
import DirectAssessment from "./pages/DirectAssessment";
import AssessmentSummary from "./pages/AssessmentSummary";
import Notice from "./pages/Notice";
import Bill from "./pages/Bill";
import Mda from "./pages/Mda";
import TransactionBill from "./pages/TransactionBills";
import PayeHistory from "./pages/PayeHistory";
import EmployeeDetails from "./pages/EmployeeDetails";
const App = () => {
  return (
    <Router>
      <Routes>
      <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Testz />
             </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard/>} />
          <Route path='direct-assessment' element={<DirectAssessment/>} />
          <Route path='assessment-summary' element={<AssessmentSummary/>} />
          <Route path='view-notice' element={<Notice/>} />
          <Route path='view-bill' element={<Bill/>} />
          <Route path='transaction-bills' element={<TransactionBill/>} />
          <Route path='mda' element={<Mda/>} />
          <Route
          path="paye">
<Route path="paye-history" element={<PayeHistory/>}></Route>
<Route path="employee-details" element={<EmployeeDetails/>}></Route>
          </Route>
         
        </Route>

       
       

       

        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
      </Routes>
    </Router>
  );
};

export default App;
