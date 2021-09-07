import { combineReducers } from "redux";
import { productReducer } from "./Products/productReducer";

const rootReducer = combineReducers({
  item: productReducer,
});
export default rootReducer;
