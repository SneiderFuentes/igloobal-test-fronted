import React from "react";
import "../styles/Modal.css";

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? "show" : ""}`}>
      <div className="modal-container">
        <h3>¿Estás seguro?</h3>
        <p>Esta acción no se puede deshacer.</p>
        <div className="modal-buttons">
          <button className="cancel" onClick={onClose}>Cancelar</button>
          <button className="save" onClick={onConfirm}>Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
