/* Action Types */
export const UPDATE_PAGE_LOADING = "UPDATE_PAGE_LOADING";

/* Action Creators */
export function updatePageLoading(loading) {
    return { type: UPDATE_PAGE_LOADING, loading };
}
