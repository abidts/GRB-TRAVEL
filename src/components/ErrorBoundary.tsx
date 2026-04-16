import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-bg-primary text-white p-4">
          <div className="max-w-lg">
            <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
            <p className="mb-4 text-text-secondary">
              {this.state.error?.toString()}
            </p>
            {process.env.NODE_ENV === 'development' && (
              <details className="mb-4 p-4 bg-bg-secondary rounded-lg text-sm">
                <summary className="cursor-pointer font-mono text-accent">
                  Error Details
                </summary>
                <pre className="mt-2 overflow-auto text-xs">
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
            <button
              onClick={() => window.location.href = '/'}
              className="btn-primary"
            >
              Go Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
