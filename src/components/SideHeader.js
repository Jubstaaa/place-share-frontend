import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

function SideHeader({ children, show, onClick }) {
  const content = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside
        onClick={onClick}
        className="fixed inset-0 z-50 h-screen w-3/4 bg-white shadow-md"
      >
        {children}
      </aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawerHook"));
}

export default SideHeader;
