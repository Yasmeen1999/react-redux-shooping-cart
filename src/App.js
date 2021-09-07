import Navbar from "./Components/Navbar/navbar";
import Product from "./Components/product/product";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Product />
      </div>
    </Provider>
  );
}

export default App;
