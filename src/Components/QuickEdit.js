import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProductDetails } from '../redux/productSlice';

const QuickEdit = ({ product, closeEdit }) => {
  const [shape, setShape] = useState(product.shape || '');
  const [length, setLength] = useState(product.unitLength || '');
  const dispatch = useDispatch();

  const handleSave = () => {
    // Ensure fields are correctly passed to the reducer
    dispatch(updateProductDetails({ id: product.id, shape, UnitLength: length }));
    closeEdit(); // Close the editing form
  };

  return (
    <tr>
      <td colSpan="5">
        <div style={styles.quickEditContainer}>
          <div style={styles.quickEditForm}>
            <div style={styles.formGroup}>
              <label htmlFor="shape" style={styles.label}>Shape:</label>
              <input
                type="text"
                id="shape"
                value={shape}
                onChange={(e) => setShape(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="length" style={styles.label}>Unit Length:</label>
              <input
                type="text"
                id="length"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.formActions}>
              <button style={{ ...styles.button, ...styles.saveBtn }} onClick={handleSave}>Save</button>
              <button style={{ ...styles.button, ...styles.cancelBtn }} onClick={closeEdit}>Cancel</button>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

const styles = {
  quickEditContainer: {
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginTop: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  quickEditForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
  },
  formActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  saveBtn: {
    backgroundColor: '#28a745',
    color: '#fff',
  },
  cancelBtn: {
    backgroundColor: '#dc3545',
    color: '#fff',
  },
};

export default QuickEdit;
