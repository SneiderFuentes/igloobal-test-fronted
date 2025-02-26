import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk, deleteProductThunk } from "../store/thunks/productThunks";
import { RootState, AppDispatch } from "../store";
import { Product } from "../interface/types";
import Title from "../components/title";
import ProductTable from "../components/ProductTable";
import AddProductModal from "../components/AddProductModal";
import { showErrorToast, showSuccessToast } from "../components/ToastNotification";

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.products);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOrdered, setIsOrdered] = useState(false);
  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  const handleDelete = async (id: number) => {
    try {
      await dispatch(deleteProductThunk(id)).unwrap();
      showSuccessToast("Producto eliminado con éxito!");
    } catch (error) {
      showErrorToast("No se pudo eliminar el producto");
    }
  };

  const handleOpenAddModal = () => {
    setSelectedProduct(null);
    setOpenAddModal(true);
  };
  const orderProducts = () => {
    setIsOrdered(true);
  };

  const productsToShow = isOrdered
  ? [...products].sort((a, b) =>
      a.name.localeCompare(b.name)
    )
  : products;

  return (
    <div className="product-list-container">
      <Title title="LISTA DE PRODUCTOS IGLOOLAB" />

      <div className="button-container">
        <button className="add-button" onClick={handleOpenAddModal}>
          Agregar Producto
        </button>
      </div>
      <div className="button-container">
        <button className="add-button" onClick={orderProducts}>
          Ordenar
        </button>
      </div>

      <ProductTable products={productsToShow} onDelete={handleDelete} />

      <AddProductModal open={openAddModal} handleClose={() => setOpenAddModal(false)} product={selectedProduct} />
    </div>
  );
};

export default ProductList;
