import { AlertTriangle, RefreshCw } from 'lucide-react';

export const ErrorDisplay = ({ error, onRetry }) => (
  <div className="max-w-md mx-auto p-6 rounded-lg bg-purple-50 border border-purple-100 shadow-sm">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <AlertTriangle className="h-6 w-6 text-purple-500" />
      </div>
      
      <div className="flex-1">
        <h3 className="text-lg font-medium text-purple-800 mb-1">
          Couldn't load materials
        </h3>
        <p className="text-purple-700 mb-4">
          {error?.message || "We encountered an unexpected error"}
        </p>
        
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </button>
      </div>
    </div>
  </div>
);
