import { UPDATE_AUTH } from "./../actions/auth";

// Define initial state
const initialState = {
    token: null,
    isAdmin: false,
    user: {},
};

export function auth(state = initialState, action) {
    switch (action.type) {
        case UPDATE_AUTH:
            return action.auth;
        default:
            return state;
    }
}
