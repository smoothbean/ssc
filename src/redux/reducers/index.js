import { combineReducers } from "redux";

import { auth } from "./auth";
import { loading } from "./loading";
import { prevPage } from "./prevPage";
import { packs } from "./packs";

const rootReducer = combineReducers({
    auth,
    loading,
    prevPage,
    packs,
});

export default rootReducer;
