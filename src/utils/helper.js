import { toast } from "react-toastify"; 
 

export const toastifyMessage = (msg, type) => {
  const toastConfig = {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };
  if (type === "success") {
    toast.success(msg, toastConfig);
  } else {
    toast.error(msg, toastConfig);
  }
};

 