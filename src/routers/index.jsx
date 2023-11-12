// src/routers/index.js
// import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import HomePage from '../pages/HomePage';
import JobPage from '../pages/JobPage';
import JobDetails from '../pages/JobDetails';
import NotFoundPage from '../pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: '/jobs',
    element: (
      <Layout>
        <JobPage />
      </Layout>
    ),
  },
  {
    path: '/job/:id',
    element: (
      <Layout>
        <JobDetails />
      </Layout>
    ),
  },
  {
    path: 'pub/jobs',
    element: (
      <Layout>
        <JobPage />
      </Layout>
    ),
    children: [
      {
        path: 'search',
        element: <JobPage />,
      },
    ],
  },
  {
    path: '*',
    element: (
      <Layout>
        <NotFoundPage />
      </Layout>
    ),
  },
]);

export default router;
