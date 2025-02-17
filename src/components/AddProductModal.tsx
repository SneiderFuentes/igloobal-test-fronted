import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { updateProductThunk,  addProductThunk} from "../store/thunks/productThunks";
import "../styles/Modal.css";
import { showErrorToast, showSuccessToast } from "./ToastNotification";

interface Props {
    open: boolean;
    handleClose: () => void;
    product: { id?: number; name: string; description: string; price: number } | null;
}

const EditProductModal: React.FC<Props> = ({ open, handleClose, product }) => {
    const dispatch = useDispatch<AppDispatch>();
    const isEdit = Boolean(product?.id);

    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");

    useEffect(() => {
        if (product) {
            setProductName(product.name || "");
            setProductDescription(product.description || "");
            setProductPrice(product.price ? product.price.toString() : "");
        } else {
            setProductName("");
            setProductDescription("");
            setProductPrice("");
        }
    }, [product]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!productName || !productDescription || !productPrice) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        const newProduct = {
            name: productName,
            description: productDescription,
            price: parseFloat(productPrice),
        };

        if (isEdit && product) {
            dispatch(updateProductThunk({ id: product.id??0, ...newProduct }));
        } else {
            try {
                dispatch(addProductThunk({ ...newProduct }));
                showSuccessToast("Producto creado con éxito!");
              } catch (error) {
                showErrorToast("Error al crear el producto");
              }
        }

        handleClose();
    };

    return (
        <div className={`modal-overlay ${open ? "show" : ""}`}>
            <div className="modal-container">
                <span className="modal-close" onClick={handleClose}>&times;</span>
                <div className="title">
                    {isEdit ? "EDITAR PRODUCTO" : "AGREGAR PRODUCTO"}
                </div>
                <form onSubmit={handleSubmit}>
                    <label>Nombre:</label>
                    <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />

                    <label>Descripción:</label>
                    <input type="text" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required />

                    <label>Precio:</label>
                    <input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required />

                    <div className="modal-buttons">
                        <button type="button" className="cancel" onClick={handleClose}>Cancelar</button>
                        <button type="submit" className="save">{isEdit ? "Guardar Cambios" : "Agregar"}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProductModal;
