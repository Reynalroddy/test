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
          {/* <Route path='verified' element={<Verified/>} />
          <Route path='flagged' element={<Flagged/>} />
          <Route path='single' element={<SingleApplication/>} /> */}
        </Route>

       
       

       

        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
      </Routes>
    </Router>
  );
};

export default App;
