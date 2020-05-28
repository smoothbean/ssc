import { ADD_PACK, REMOVE_PACK } from "./../actions/packs";

// Define initial state
const initialState = [
    { id: 1, size: 250 },
    { id: 2, size: 500 },
    { id: 3, size: 1000 },
    { id: 4, size: 2000 },
    { id: 5, size: 5000 },
];

export function packs(state = initialState, action) {
    let newPacks = [];
    switch (action.type) {
        case ADD_PACK:
            let id = 1;
            state.forEach((pack) => {
                newPacks.push({ id, size: pack.size });
                id++;
            });
            newPacks.push({ id, size: Number(action.size) });
            return newPacks;
        case REMOVE_PACK:
            let i = 1;
            state.forEach((pack) => {
                if (pack.id !== Number(action.id)) {
                    newPacks.push({ id: i, size: pack.size });
                    i++;
                }
            });
            return newPacks;
        default:
            return state;
    }
}
