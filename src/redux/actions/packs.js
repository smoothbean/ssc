/* Action Types */
export const ADD_PACK = "ADD_PACK";
export const REMOVE_PACK = "REMOVE_PACK";

/* Action Creators */
export function addPack(size) {
    return { type: ADD_PACK, size };
}

export function removePack(id) {
    return { type: REMOVE_PACK, id };
}
