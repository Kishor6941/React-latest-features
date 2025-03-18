import { useState } from "react";
import ReactDOM from "react-dom";

const PortalComp = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h1>React Portal Example</h1>
      <button className="btn btn-outline-primary" onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default PortalComp;

const modalStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalContentStyles = {
  background: "white",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
};

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div style={modalStyles}>
      <div style={modalContentStyles}>
        <h2>Portal Modal</h2>
        <p>This modal is rendered using React Portal.</p>
        <button className="btn btn-outline-info" onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};
