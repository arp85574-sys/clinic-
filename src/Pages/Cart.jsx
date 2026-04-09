
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cartItems: [],
  loading: false,
  cartLoading: false,
};



// ✅ Fetch products API
export const fetchProducts = createAsyncThunk(
  "cart/fetchProducts",
  async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
  }
);



// ✅ Checkout API
export const checkoutCart = createAsyncThunk(
  "cart/checkoutCart",
  async (cartItems) => {
    const res = await fetch(
      "https://dummyjson.com/carts/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: 1,
          products: cartItems.map((item) => ({
            id: item.id,
            quantity: item.quantity,
          })),
        }),
      }
    );

    return await res.json();
  }
);



const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {

    // Add to cart
    addToCart: (state, action) => {

      const product = action.payload;

      const existing = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({
          ...product,
          quantity: 1,
        });
      }
    },


    removeFromCart: (state, action) => {
      state.cartItems =
        state.cartItems.filter(
          (item) => item.id !== action.payload
        );
    },

  },


  extraReducers: (builder) => {

    builder

      // fetch products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })


      // checkout
      .addCase(checkoutCart.pending, (state) => {
        state.cartLoading = true;
      })

      .addCase(checkoutCart.fulfilled, (state) => {
        state.cartLoading = false;
        state.cartItems = [];
        alert("Order placed successfully");
      })

      .addCase(checkoutCart.rejected, (state) => {
        state.cartLoading = false;
        alert("Order failed");
      });

  },

});



export const {
  addToCart,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;