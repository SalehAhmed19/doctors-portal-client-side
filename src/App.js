import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import AllUsers from "./Pages/Dashboard/AllUsers";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyHistory from "./Pages/Dashboard/MyHistory";
import MyReview from "./Pages/Dashboard/MyReview";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ReqireAuth from "./Pages/Login/ReqireAuth";
import ReqireAdmin from "./Pages/Login/RequireAdmin";
import Signup from "./Pages/Login/Signup";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-2">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/appointment"
          element={
            <ReqireAuth>
              <Appointment />
            </ReqireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <ReqireAuth>
              <Dashboard />
            </ReqireAuth>
          }
        >
          <Route index element={<MyAppointments />}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route path="history" element={<MyHistory />}></Route>
          <Route
            path="users"
            element={
              <ReqireAdmin>
                <AllUsers />
              </ReqireAdmin>
            }
          ></Route>
          <Route
            path="add-doctor"
            element={
              <ReqireAdmin>
                <AddDoctor />
              </ReqireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
