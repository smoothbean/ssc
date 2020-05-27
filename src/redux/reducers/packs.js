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
    switch (action.type) {
        case ADD_PACK:
            return initialState;
        case REMOVE_PACK:
            let newPacks = [];
            state.forEach((pack, i) => {
                if (pack.id != action.id)
                    newPacks.push({ id: i + 1, size: pack.size });
            });
            return newPacks;
        default:
            return state;
    }
}
