import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Notify = (type, time, id = "standard", text) => {
  toast[type](text, {
    position: "top-center",
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
    transition: Slide,
    containerId: id,
  });
};

export default Notify;
