/* Action Types */
export const UPDATE_AUTH = "UPDATE_AUTH";

/* Action Creators */
export function updateAuth(auth) {
    return { type: UPDATE_AUTH, auth };
}
