import React, { useState } from 'react';
// import ProductList from './components/ProductList';
import ProductList from './Components/ProductList';
// import AddProductModal from 'components/AddProductModal';
import AddProductModal from './Components/AddProductModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      {/* <button onClick={handleOpenModal}>Add Product</button> */}
      <ProductList />
      {isModalOpen && <AddProductModal onClose={handleCloseModal} />}
    </div>
  );
};

export default App;
