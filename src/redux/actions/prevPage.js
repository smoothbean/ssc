/* Action Types */
export const UPDATE_PREV_PAGE = "UPDATE_PREV_PAGE";

/* Action Creators */
export function updatePrevPage(path) {
    return { type: UPDATE_PREV_PAGE, path };
}
