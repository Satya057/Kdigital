import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, product: 'Pipe', material: 'Stainless Steel', grade: '304', isEditing: false, price: '2311/kg' },
  { id: 2, product: 'Pipe', material: 'Aluminium', grade: 'F12', isEditing: false, price: '1500/kg' },
  { id: 3, product: 'Sheet', material: 'Carbon Steel', grade: 'A36', isEditing: false, price: '1200/kg' },
  { id: 4, product: 'Rod', material: 'Duplex Steel', grade: '2205', isEditing: false, price: '3100/kg' },
  { id: 5, product: 'Pipe', material: 'Copper', grade: 'C11000', isEditing: false, price: '5000/kg' },
  { id: 6, product: 'Sheet', material: 'Brass', grade: 'C26000', isEditing: false, price: '4500/kg' },
  { id: 7, product: 'Rod', material: 'Bronze', grade: 'C93200', isEditing: false, price: '6700/kg' },
  { id: 8, product: 'Pipe', material: 'Titanium', grade: 'Grade 2', isEditing: false, price: '9000/kg' },
  { id: 9, product: 'Sheet', material: 'Nickel', grade: '200', isEditing: false, price: '9500/kg' },
  { id: 10, product: 'Rod', material: 'Zinc', grade: 'Z1', isEditing: false, price: '3400/kg' },
  { id: 11, product: 'Pipe', material: 'Stainless Steel', grade: '316', isEditing: false, price: '2800/kg' },
  { id: 12, product: 'Sheet', material: 'Aluminium', grade: '6061', isEditing: false, price: '1700/kg' },
  { id: 13, product: 'Rod', material: 'Carbon Steel', grade: '1045', isEditing: false, price: '1300/kg' },
  { id: 14, product: 'Pipe', material: 'Duplex Steel', grade: '2507', isEditing: false, price: '3500/kg' },
  { id: 15, product: 'Sheet', material: 'Copper', grade: 'C12200', isEditing: false, price: '5200/kg' },
  { id: 16, product: 'Rod', material: 'Brass', grade: 'C36000', isEditing: false, price: '4600/kg' },
  { id: 17, product: 'Pipe', material: 'Bronze', grade: 'C95400', isEditing: false, price: '6900/kg' },
  { id: 18, product: 'Sheet', material: 'Titanium', grade: 'Grade 5', isEditing: false, price: '9500/kg' },
  { id: 19, product: 'Rod', material: 'Nickel', grade: '201', isEditing: false, price: '9800/kg' },
  { id: 20, product: 'Pipe', material: 'Zinc', grade: 'Z2', isEditing: false, price: '3600/kg' },
  { id: 21, product: 'Sheet', material: 'Stainless Steel', grade: '430', isEditing: false, price: '2400/kg' },
  { id: 22, product: 'Rod', material: 'Aluminium', grade: '7075', isEditing: false, price: '1900/kg' },
  { id: 23, product: 'Pipe', material: 'Carbon Steel', grade: '1018', isEditing: false, price: '1400/kg' },
  { id: 24, product: 'Sheet', material: 'Duplex Steel', grade: '2205', isEditing: false, price: '3200/kg' },
  { id: 25, product: 'Rod', material: 'Copper', grade: 'C11000', isEditing: false, price: '5400/kg' },
  { id: 26, product: 'Pipe', material: 'Brass', grade: 'C28000', isEditing: false, price: '4700/kg' },
  { id: 27, product: 'Sheet', material: 'Bronze', grade: 'C90300', isEditing: false, price: '7000/kg' },
  { id: 28, product: 'Rod', material: 'Titanium', grade: 'Grade 1', isEditing: false, price: '9200/kg' },
  { id: 29, product: 'Pipe', material: 'Nickel', grade: '205', isEditing: false, price: '10000/kg' },
  { id: 30, product: 'Sheet', material: 'Zinc', grade: 'Z3', isEditing: false, price: '3700/kg' },
  { id: 31, product: 'Rod', material: 'Stainless Steel', grade: '304L', isEditing: false, price: '2350/kg' },
  { id: 32, product: 'Pipe', material: 'Aluminium', grade: '6063', isEditing: false, price: '1600/kg' },
  { id: 33, product: 'Sheet', material: 'Carbon Steel', grade: '1010', isEditing: false, price: '1250/kg' },
  { id: 34, product: 'Rod', material: 'Duplex Steel', grade: '2304', isEditing: false, price: '3300/kg' },
];

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = {
        id: state.length + 1,
        ...action.payload,
        isEditing: false,
      };
      state.push(newProduct);
    },
    quickEditProduct: (state, action) => {
      const product = state.find((p) => p.id === action.payload);
      if (product) {
        product.isEditing = !product.isEditing;
      }
    },
    updateProductDetails: (state, action) => {
      const { id, shape, length, price, unit } = action.payload;
      const product = state.find((p) => p.id === id);
      if (product) {
        product.shape = shape;
        product.length = length;
        product.price = price;
        product.unit = unit;
        product.isEditing = false;
      }
    },
  },
});

export const { addProduct, quickEditProduct, updateProductDetails } = productSlice.actions;
export default productSlice.reducer;
