import { Link, useRouteError } from 'react-router-dom';
import Layout from './Layout';

export default function ErrorPage() {
  const error = useRouteError() as any;

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-bg-primary text-white p-4">
        <div className="max-w-lg text-center">
          <h1 className="text-6xl font-bold mb-4 text-accent">
            {error?.status || '500'}
          </h1>
          <h2 className="text-3xl font-bold mb-4">
            {error?.statusText || 'Something Went Wrong'}
          </h2>
          <p className="text-text-secondary mb-8">
            {error?.data?.message || 'An unexpected error occurred. Please try again.'}
          </p>
          <Link
            to="/"
            className="btn-primary inline-flex items-center gap-2"
          >
            ← Back Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
