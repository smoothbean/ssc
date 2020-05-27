import { UPDATE_PREV_PAGE } from "./../actions/prevPage";

// Define initial state
const initialState = "/";

export function prevPage(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PREV_PAGE:
            return action.path;
        default:
            return state;
    }
}
