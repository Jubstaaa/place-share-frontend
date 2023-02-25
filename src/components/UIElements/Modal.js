import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import { CSSTransition } from "react-transition-group";

function ModalOverlay(props) {
  const content = (
    <div className="z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 bg-white shadow-md rounded-lg md:w-11/12">
      <header
        className={`w-full py-4 px-2 text-white bg-[#2a006e] ${props.headerClass}`}
      >
        <h2 className="m-2">{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className="py-4 px-2">{props.children}</div>
        <footer className={`py-4 px-2 ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modalHook"));
}

function Modal(props) {
  return (
    <>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={0}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
}

export default Modal;
