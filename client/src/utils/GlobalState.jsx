// Import necessary dependencies
import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducers";

// Create a context for the store
const StoreContext = createContext();
const { Provider } = StoreContext;

// Create a provider component for the store
const StoreProvider = ({ value = [], ...props }) => {
  // Define the initial state and dispatch function using useReducer
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
  });

  // Render the provider component with the state and dispatch as value
  return <Provider value={[state, dispatch]} {...props} />;
};

// Custom hook to access the store context
const useStoreContext = () => {
  return useContext(StoreContext);
};

// Export the provider and custom hook
export { StoreProvider, useStoreContext };
