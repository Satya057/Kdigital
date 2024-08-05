import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quickEditProduct, addProduct, updateProductDetails } from '../redux/productSlice';
import QuickEdit from './QuickEdit';

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ product: '', material: '', grade: '' });
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState('');
  const [filterMaterial, setFilterMaterial] = useState('');
  const [editingProductId, setEditingProductId] = useState(null);
  const [bulkAction, setBulkAction] = useState(''); // Added state for bulk action

  const handleQuickEdit = (id) => {
    setEditingProductId(id);
  };

  const closeEdit = () => {
    setEditingProductId(null);
  };

  const handleAddProductDetails = (product) => {
    dispatch(updateProductDetails({ id: product.id, shape: product.shape, unitLength: product.unitLength }));
  };

  const handleAddProduct = () => {
    dispatch(addProduct(newProduct));
    setShowModal(false);
    setNewProduct({ product: '', material: '', grade: '' });
  };

  const handleSelectProduct = (id) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((productId) => productId !== id) : [...prev, id]
    );
  };

  const handleBulkAction = () => {
    if (bulkAction === 'delete') {
      selectedProducts.forEach((id) => dispatch(updateProductDetails({ id, action: 'delete' })));
      setSelectedProducts([]);
    }
  };

  const filteredProducts = products.filter((product) => {
    return (
      (filterProduct ? product.product.toLowerCase().includes(filterProduct.toLowerCase()) : true) &&
      (filterMaterial ? product.material.toLowerCase().includes(filterMaterial.toLowerCase()) : true)
    );
  });

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedProducts(filteredProducts.map((product) => product.id));
    } else {
      setSelectedProducts([]);
    }
  };

  const styles = {
    container: {
      width: '90%',
      margin: 'auto',
      fontFamily: 'Arial, sans-serif',
      marginTop: '20px',
      backgroundColor: '#f4f6f9',
      padding: '20px',
      borderRadius: '10px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    button: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    count: {
      fontSize: '18px',
    },
    input: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      width: '250px',
    },
    filterContainer: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
    },
    select: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      borderRadius: '10px',
      overflow: 'hidden',
    },
    th: {
      padding: '15px',
      textAlign: 'left',
      backgroundColor: '#007bff',
      color: 'white',
      fontWeight: 'bold',
    },
    td: {
      padding: '15px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
      backgroundColor: '#ffffff',
    },
    editButton: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#007bff',
      cursor: 'pointer',
      textDecoration: 'underline',
    },
    modal: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
      width: '400px',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 999,
    },
    actions: {
      display: 'flex',
      gap: '10px',
    },
    bulkActions: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <button style={styles.button} onClick={() => setShowModal(true)}>+ Add Products</button>
        <div style={styles.count}>
          {products.length}/400 Products
        </div>
        <select style={styles.select}>
          <option value="25">Products 25</option>
          <option value="50">Products 50</option>
        </select>
      </header>

      <div style={styles.filterContainer}>
        <input 
          type="text" 
          placeholder="Search Products..." 
          style={styles.input}
          onChange={(e) => setFilterProduct(e.target.value)}
        />
        <select style={styles.select} onChange={(e) => setFilterMaterial(e.target.value)}>
          <option value="">Materials</option>
          <option value="Stainless Steel">Stainless Steel</option>
          <option value="Carbon Steel">Carbon Steel</option>
          <option value="Duplex Steel">Duplex Steel</option>
        </select>
        <button style={styles.button}>Search</button>
        <div style={styles.bulkActions}>
          <select style={styles.select} onChange={(e) => setBulkAction(e.target.value)}>
            <option value="">Bulk Actions</option>
            <option value="delete">Delete</option>
          </select>
          <button style={styles.button} onClick={handleBulkAction}>Apply</button>
        </div>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>
              <input type="checkbox" onChange={handleSelectAll} />
            </th>
            <th style={styles.th}>Products</th>
            <th style={styles.th}>Action</th>
            <th style={styles.th}>Product Details</th>
            <th style={styles.th}>Price in Unit</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <React.Fragment key={product.id}>
              <tr>
                <td style={styles.td}>
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => handleSelectProduct(product.id)}
                  />
                </td>
                <td style={styles.td}>{product.product}</td>
                <td style={styles.td}>
                  <div style={styles.actions}>
                    <button onClick={() => handleQuickEdit(product.id)} style={styles.editButton}>Quick Edit</button>
                    <span> | </span>
                    <button onClick={() => handleAddProductDetails(product)} style={styles.editButton}>Add Product Details</button>
                  </div>
                </td>
                <td style={styles.td}>
                  Material: {product.material}<br />
                  Unit Length: {product.unitLength}<br />
                  Shape: {product.shape}
                </td>
                <td style={styles.td}>{product.price} / {product.unit}</td>
              </tr>
              {editingProductId === product.id && (
                <QuickEdit product={product} closeEdit={closeEdit} />
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {showModal && (
        <>
          <div style={styles.overlay} onClick={() => setShowModal(false)} />
          <div style={styles.modal}>
            <h2>Add New Product</h2>
            <input 
              type="text" 
              placeholder="Product" 
              value={newProduct.product}
              onChange={(e) => setNewProduct({ ...newProduct, product: e.target.value })}
              style={styles.input} // Added styling
            />
            <input 
              type="text" 
              placeholder="Material" 
              value={newProduct.material}
              onChange={(e) => setNewProduct({ ...newProduct, material: e.target.value })}
              style={styles.input} // Added styling
            />
            <input 
              type="text" 
              placeholder="Grade" 
              value={newProduct.grade}
              onChange={(e) => setNewProduct({ ...newProduct, grade: e.target.value })}
              style={styles.input} // Added styling
            />
            <button style={styles.button} onClick={handleAddProduct}>Add Product</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
