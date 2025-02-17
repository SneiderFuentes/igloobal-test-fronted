import React, { useState } from "react";
import { Product } from "../interface/types";
import { FaTrash } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import "../styles/Table.css";
import "react-tooltip/dist/react-tooltip.css";

interface Props {
  products: Product[];
  onDelete: (id: number) => void;
}

const ProductTable: React.FC<Props> = ({ products, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const openModal = (id: number) => {
    setSelectedProductId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
  };

  const confirmDelete = () => {
    if (selectedProductId !== null) {
      onDelete(selectedProductId);
    }
    closeModal();
  };

  return (
    <div className="table-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan={5} className="no-data">No hay productos disponibles</td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>${product.price.toFixed(2)}</td>
                <td className="action-buttons">
                  <button
                    className="delete-button"
                    onClick={() => openModal(product.id)}
                    data-tooltip-id={`tooltip-delete-${product.id}`}
                  >
                    <FaTrash />
                  </button>
                  <Tooltip id={`tooltip-delete-${product.id}`} place="top" content="Eliminar" />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <ConfirmDeleteModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        onConfirm={confirmDelete} 
      />
    </div>
  );
};

export default ProductTable;
