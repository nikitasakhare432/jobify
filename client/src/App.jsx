import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

import {
  HomeLayout,
  AddJob,
  Admin,
  AllJobs,
  DashboardLayout,
  Deletejob,
  EditJob,
  Error,
  Landing,
  Login,
  Profile,
  Register,
  Stats,
  AboutUs,
  MyApplications,
  ApplyJob,

} from './pages';
import { action as loginAction } from './pages/Login'; // ✅ Fixed Import
import { action as addJobAction } from './pages/AddJob';
import { loader as alljobsLoader } from './pages/AllJobs';
import { loader as editJobLoader } from './pages/EditJob';
import { action as editJobAction } from './pages/EditJob';
import { action as deleteJobAction } from './pages/Deletejob';
import { loader as adminLoader } from './pages/Admin';
import { loader as profileLoader } from './pages/Profile';
import { action as applyJobAction } from './pages/ApplyJob';
import { loader as allAppLoader } from './pages/MyApplications';

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
        action: () => {
          console.log('hello there');
          return null;
        },
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction,
      },
      {
        path: 'aboutUs',
        element: <AboutUs />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction,
          },
          {
            path: 'stats',
            element: <Stats />,
          },
          {
            path: 'all-jobs',
            element: <AllJobs />,
            loader: alljobsLoader,
          },
          {
            path: 'profile',
            element: <Profile />,
            loader: profileLoader,  // ✅ Fetch user data

          },
          {
            path: 'admin',
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: 'edit-job/:id',
            element: <EditJob />,
            loader: editJobLoader,
            action: editJobAction,
          },
          {
            path: 'delete-job/:id',
            element: <Deletejob />, // ✅ Add element to render
            action: deleteJobAction
          },
          {
            path: 'apply/:jobId', // ✅ Fixed syntax
            element: <ApplyJob />,
            action: applyJobAction,
          },

          {
            path: 'my-applications', // ✅ Correct route for viewing applications
            element: <MyApplications />,
            loader: allAppLoader,
          },

        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer /> {/* ToastContainer component */}
    </div>
  );
};

export default App;
