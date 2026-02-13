
import { WifiOff } from 'lucide-react';

const SimpleError = () => {
  return (
    <div className="flex items-center gap-4 p-5 rounded-lg border border-gray-100 bg-white shadow-sm">
      <div className="flex-shrink-0">
        <WifiOff className="w-5 h-5 text-gray-400" />
      </div>
      
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">
          Feed temporarily unavailable
        </p>
        <p className="text-xs text-gray-500">
          {"We're having trouble reaching the server."}
        </p>
      </div>
    </div>
  );
};

export default SimpleError;