import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Layout from './components/Layout';
import DestinationsPage from './pages/DestinationsPage';
import DestinationDetail from './pages/DestinationDetail';
import PackagesPage from './pages/PackagesPage';
import PackageDetail from './pages/PackageDetail';
import AdventurePage from './pages/AdventurePage';
import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';
import HotelsPage from './pages/HotelsPage';
import About from './components/About';
import CabsPage from './pages/CabsPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './components/ErrorPage';

// Use basename to match Vite's base path configuration
const basename = '/';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <App />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/destinations',
    element: (
      <Layout>
        <DestinationsPage />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/destinations/:slug',
    element: (
      <Layout>
        <DestinationDetail />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/packages',
    element: (
      <Layout>
        <PackagesPage />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/packages/:packageName',
    element: (
      <Layout>
        <PackageDetail />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/adventure',
    element: (
      <Layout>
        <AdventurePage />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/gallery',
    element: (
      <Layout>
        <GalleryPage />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/reviews',
    element: (
      <Layout>
        <ReviewsPage />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/hotels',
    element: (
      <Layout>
        <HotelsPage />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: (
      <Layout>
        <About />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/cabs',
    element: (
      <Layout>
        <CabsPage />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/contact',
    element: (
      <Layout>
        <ContactPage />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
], {
  basename,
});

export default router;