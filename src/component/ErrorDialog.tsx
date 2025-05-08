// Copyright (c) 2025 izzet-mtg
// SPDX-License-Identifier: MIT

import { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export type ErrorDialogProps = {
  onClose?: () => void;
};

const ErrorDialog = ({ children, onClose }: PropsWithChildren<ErrorDialogProps>) => (
  <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-xl w-full">
      <div className='flex flex-col items-center justify-center'>
        <FontAwesomeIcon icon={faExclamationTriangle} size="4x" color="#ff0000" />
        <h2 className="text-xl font-semibold text-red-600 p-4">エラー発生</h2>
      </div>
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