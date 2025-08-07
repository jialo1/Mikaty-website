import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">😅</div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Oups ! Quelque chose s'est mal passé
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Une erreur inattendue s'est produite. Veuillez rafraîchir la page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-miikaty hover:bg-miikaty-dark text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Rafraîchir la page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 