import { PropsWithChildren } from 'react';

export type ErrorDialogProps = {
  onClose?: () => void;
};

const ErrorDialog = ({ children, onClose }: PropsWithChildren<ErrorDialogProps>) => (
  <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-xl w-full">
      <h2 className="text-xl font-semibold text-red-600 mb-4">エラー</h2>
      <div className="text-gray-800 mb-6">{children}</div>
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          閉じる
        </button>
      </div>
    </div>
  </div>
);

export default ErrorDialog;