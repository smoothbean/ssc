import { UPDATE_PAGE_LOADING } from "./../actions/loading";

// Define initial state
const initialState = {
    page: true,
};

export function loading(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PAGE_LOADING:
            let newState = Object.assign({}, state);
            newState.page = action.loading;
            return newState;
        default:
            return state;
    }
}
