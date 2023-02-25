import ReactDOM from "react-dom";

function Backdrop({ onClick }) {
  return ReactDOM.createPortal(
    <div
      onClick={onClick}
      className="fixed inset-0 w-full h-screen bg-black/75 z-10"
    ></div>,
    document.getElementById("backdropHook")
  );
}

export default Backdrop;
