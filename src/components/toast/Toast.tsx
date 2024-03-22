import React from 'react';
import { Bounce, toast } from 'react-toastify';

const TOAST_SHOW_TIME = 3000;

class Toast extends React.Component {
  static show = (message: string) => {
    return toast.error(message, {
      position: 'bottom-center',
      autoClose: TOAST_SHOW_TIME,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
  };
}

export default Toast;
