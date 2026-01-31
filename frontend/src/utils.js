 import { toast } from 'react-toastify';

// ✅ success toast
export const handleSuccess = (msg) => {
  toast.success(msg, {
    position: 'top-right',
  });
};

// ✅ error toast
export const handleError = (msg) => {
  toast.error(
    typeof msg === 'string' ? msg : 'Something went wrong',
    {
      position: 'top-right',
    }
  );
};

// ✅ backend base URL
export const APIUrl = 'https://expense-tracker-xuno.onrender.com';
