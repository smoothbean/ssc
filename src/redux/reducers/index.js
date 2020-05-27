import { combineReducers } from "redux";

import { auth } from "./auth";
import { loading } from "./loading";
import { prevPage } from "./prevPage";

const rootReducer = combineReducers({
    auth,
    loading,
    prevPage,
});

export default rootReducer;
