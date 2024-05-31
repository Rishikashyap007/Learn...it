import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Login from "./Components/login/login.jsx";
import Home from "./Home";
import Layout from "./Layout.jsx";
import "./index.css";
import Contact from "./Components/Contact-us/Contact.jsx";
import Pay from "./Components/Pay/Pay.jsx";
import Our_Work from "./Components/Our_Works/Our_Work.jsx";
import JobPortal from "./Components/HiringPage/JobPortal.jsx";
import { Toaster } from "react-hot-toast";
import App_Testimonial from "./Components/Testimonial/App_Testimonial.jsx";
import Section from "./Components/HRMS/Section.jsx";
import Section_Idea from "./Components/TEN_Idea/Section_Idea.jsx";
import Section_AI from "./Components/TEN-AI_labs/Section_AI.jsx";
import Section_Accelerator from "./Components/TEN_Accelerator/Section_Accelerator.jsx";
import AboutUs from "./Components/About-Us/AboutUs.jsx";
import LoginPage from "./Components/LoginPage/LoginPage.jsx";
import Sign_up from "./Components/Sign-Up/Sign_up.jsx";
import Courses_page from "./Components/Home_page/Courses/Courses_page.jsx";
import CoursesDetails from "./Components/Home_page/Courses/Course_Detail.jsx";
// import Payment from "./Components/Home_page/Courses/Payment.jsx";
import { ContextProvider } from "./Context.jsx";
import AdminDashboard from "./Components/Admin/AdminDashboard.jsx";
import Students from "./Components/Admin/Students.jsx";
import Revenue from './Components/Admin/Revenue.jsx'
import Profile from "./Components/Students/Profile.jsx";
// import PaymentForm from "./Components/Paynow/Payment.jsx";
import Payment from './Components/Paynow/Payment.jsx'
import Layout2 from "./Layout2.jsx";
import CourseForm from "./Components/Admin/CoursesForm.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store.js";
import { PersistGate } from "redux-persist/integration/react";
import CourseUpdateForm from "./Components/Admin/courseupdateForm.jsx";
import CourseVideo from "./Components/Home_page/Courses/CourseVideo.jsx";
import Privacy from "./Components/PrivacyPolicy/Privacy.jsx";
import Terms from "./Components/PrivacyPolicy/Terms.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/About-us", element: <AboutUs /> },
      { path: "/Our_layer", element: <Our_Work /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "Interview_for_course", element: <Pay /> },
      { path: "/Hiring", element: <JobPortal /> },
      { path: "/Testimonial", element: <App_Testimonial /> },
      { path: "/HRMS", element: <Section /> },
      { path: "/AI-Labs", element: <Section_AI /> },
      { path: "/Idea-Engine", element: <Section_Idea /> },
      { path: "/Accelerator", element: <Section_Accelerator /> },
      { path: "/Login", element: <LoginPage /> },
      { path: "/Sign_Up", element: <Sign_up /> },
      { path: "/Courses", element: <Courses_page /> },
      { path: "/Courses/:id", element: <CoursesDetails /> },
      { path: "/payment", element: <Payment /> }, 
      // { path: "/admin", element: <AdminDashboard /> }, 
      // { path: "/students", element: <Students /> }, 
      // { path: "/revenue", element: <Revenue /> }, 
      {path:'/profile/:id',element:<Profile />},
      {path:'/payment/:id',element:<Payment />},
      {path:'/cart',element:<Cart />},
      {path:'/video/:id',element:<CourseVideo />},
      {path:'/privacy',element:<Privacy />},
      {path:'/terms',element:<Terms />},
    ],
  },
  {
    // path: "/",
    element: <Layout2 />,
    children: [
      { path: "/admin", element: <AdminDashboard /> },
      { path: "/addcourses", element: <CourseForm /> },
      { path: "/update/:id", element: <CourseUpdateForm /> },
      { path: "/students", element: <Students /> },
      { path: "/revenue", element: <Revenue /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
      <Toaster />
      </PersistGate>
      </Provider>

    </ContextProvider>
  </React.StrictMode>
);
