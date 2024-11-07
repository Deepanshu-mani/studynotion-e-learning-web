import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// Components
import PrivateRoute from './components/core/Auth/PrivateRoute';
import OpenRoute from './components/core/Auth/OpenRoute';
import MyProfile from "./components/core/Dashboard/MyProfile";
import Settings from "./components/core/Dashboard/Settings";
import Instructor from "./components/core/Dashboard/Instructor";
import MyCourses from "./components/core/Dashboard/MyCourses";
import AddCourse from "./components/core/Dashboard/AddCourse";
import EditCourse from "./components/core/Dashboard/EditCourse";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Cart from "./components/core/Dashboard/Cart";
import VideoDetails from './components/core/ViewCourse/VideoDetails';

// Common Components
import Navbar from './components/common/Navbar';
// Services
import { getUserDetails } from './services/operations/profileAPI';


// utils
import { ACCOUNT_TYPE } from './utils/constants';

// pages
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UpdatePassword from './pages/UpdatePassword';
import ForgotPassword from './pages/ForgotPassword';
import CourseDetails from "./pages/CourseDetails";
import Catalog from "./pages/Catalog";
import VerifyEmail from "./pages/VerifyEmail";
import Dashboard from "./pages/Dashboard";
import ViewCourse from "./pages/ViewCourse";
import Error from './pages/Error';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile || {});


  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"));
      dispatch(getUserDetails(token, navigate));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <div className='w-screen min-h-screen bg-richblack-900 flex flex-col font-inter'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="courses/:courseId" element={<CourseDetails />} />
        <Route path="catalog/:catalogName" element={<Catalog />} />
        {/* Open Route => for Only Non Logged in User */}
        <Route
          path='signup'
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path='login'
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path='forgot-password'
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path='update-password/:id'
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

        {/* Private Route - for Only Logged in User */}
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          {/* Route for all users */}
        <Route path="dashboard/my-profile" element={<MyProfile />} />
        <Route path="dashboard/settings" element={<Settings />} />


        {/* Route only for Instructors */}
        {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
          <>
            <Route path="dashboard/instructor" element={<Instructor />} />
            <Route path="dashboard/my-courses" element={<MyCourses />} />
            <Route path="dashboard/add-course" element={<AddCourse />} />
            <Route
              path="dashboard/edit-course/:courseId"
              element={<EditCourse />}
            />
          </>
        )}
        </Route>

        

        

        {/* Route only for Students */}
        {user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
            <Route
              path="dashboard/enrolled-courses"
              element={<EnrolledCourses />}
            />
            <Route path="/dashboard/cart" element={<Cart />} />
          </>
        )}

        {/* For the watching course lectures */}
        <Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        />
        {user?.accountType === ACCOUNT_TYPE.STUDENT && (
          <>
            <Route
              path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
              element={<VideoDetails />}
            />
          </>
        )}

        {/* 404 Page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;