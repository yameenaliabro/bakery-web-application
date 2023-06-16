import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./reducer/authreducer";
import cartreducer from "./reducer/cartreducer";
const store = configureStore({
    reducer:{
        auth : authreducer,
        cart:cartreducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store