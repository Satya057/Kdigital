import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productSlice';

const AddProductModal = ({ onClose }) => {
  const dispatch = useDispatch();

  // Initialize with default selections
  const [selectedProduct, setSelectedProduct] = useState('Pipes');
  const [selectedMaterial, setSelectedMaterial] = useState('Aluminium');
  const [selectedGrades, setSelectedGrades] = useState([]);

  const handleGradeChange = (grade) => {
    if (selectedGrades.includes(grade)) {
      setSelectedGrades(selectedGrades.filter((g) => g !== grade));
    } else {
      setSelectedGrades([...selectedGrades, grade]);
    }
  };

  const handleAddProduct = () => {
    if (selectedProduct && selectedMaterial && selectedGrades.length > 0) {
      dispatch(addProduct({
        product: selectedProduct,
        material: selectedMaterial,
        grades: selectedGrades,
      }));
      onClose();
    } else {
      alert("Please select a product, material, and at least one grade.");
    }
  };

  const products = [
    'Pipes', 'Tubing', 'Pipe Fittings', 'Forged Fittings', 'Flanges', 'Valves', 'Gaskets', 'Instrumentation Fittings', 'Flanges', 'Bolts & Nuts'
  ];
  
  const materials = [
    'Aluminium', 'Carbon Steel', 'Copper Nickel', 'Duplex Steel', 'Hastelloy', 'Incoluy', 'Inconel', 'Low Temperature Carbon Steel', 'Monel'
  ];
  
  const grades = {
    'Aluminium': ['Aluminium F11 Pipes', 'Aluminium F22 Pipes', 'Aluminium F5 Pipes', 'Aluminium F9 Pipes', 'Aluminium F91 Pipes'],
    'Carbon Steel': ['Carbon Steel DS1', 'Carbon Steel DS2', 'Carbon Steel DS3'],
    'Copper Nickel': ['Copper Nickel DS1', 'Copper Nickel DS2', 'Copper Nickel DS3'],
    'Duplex Steel': ['Duplex Steel DS1', 'Duplex Steel DS2', 'Duplex Steel DS3'],
    // Add grades for other materials as needed
  };

  return (
    <div className="modal">
      <style>{`
        .modal {
          background: white;
          padding: 20px;
          border-radius: 8px;
          width: 80%;
          margin: 0 auto;
          position: relative;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          max-width: 800px;
        }

        .modal-content {
          display: flex;
          justify-content: space-between;
        }

        .column {
          flex: 1;
          margin: 0 10px;
        }

        .column h3 {
          margin-bottom: 10px;
          font-size: 1.2em;
          color: #333;
        }

        ul {
          list-style-type: none;
          padding: 0;
          max-height: 300px;
          overflow-y: auto;
        }

        li {
          padding: 8px 12px;
          cursor: pointer;
          border-radius: 4px;
          margin-bottom: 4px;
          background-color: #f9f9f9;
          transition: background-color 0.2s;
        }

        li:hover {
          background-color: #eee;
        }

        li.selected {
          background-color: #007bff;
          color: white;
        }

        .modal-actions {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .modal-actions button {
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s;
          background-color: #007bff;
          color: white;
          margin: 0 10px;
        }

        .modal-actions button:hover {
          background-color: #0056b3;
        }

        label {
          display: flex;
          align-items: center;
        }

        input[type="checkbox"] {
          margin-right: 8px;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .modal-header h2 {
          margin: 0;
        }

        .close-button {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }
        
        .selection-count {
          font-size: 0.9rem;
          color: #555;
          text-align: right;
          margin-bottom: 10px;
        }
      `}</style>

      <div className="modal-header">
        <h2>Add Products</h2>
        <button className="close-button" onClick={onClose}>&times;</button>
      </div>
      <div className="selection-count">7/400 Products Selected</div>
      <div className="modal-content">
        <div className="column">
          <h3>Products</h3>
          <ul>
            {products.map((product, index) => (
              <li
                key={index}
                className={selectedProduct === product ? 'selected' : ''}
                onClick={() => setSelectedProduct(product)}
              >
                {product}
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h3>Material</h3>
          <ul>
            {materials.map((material, index) => (
              <li
                key={index}
                className={selectedMaterial === material ? 'selected' : ''}
                onClick={() => setSelectedMaterial(material)}
              >
                {material}
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h3>Grades</h3>
          <ul>
            {grades[selectedMaterial] && grades[selectedMaterial].map((grade, index) => (
              <li key={index}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedGrades.includes(grade)}
                    onChange={() => handleGradeChange(grade)}
                  />
                  {grade}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="modal-actions">
        <button onClick={handleAddProduct}>Submit</button>
      </div>
    </div>
  );
};

export default AddProductModal;
