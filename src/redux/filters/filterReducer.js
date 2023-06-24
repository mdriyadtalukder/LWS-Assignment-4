import { FILTERING, SEARCHING } from "./actionType";

const initialState = {
    statuss: "All"
}
const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTERING:

            return {
                ...state,
                statuss: action.statuss
            }
        case SEARCHING:
            return{
                ...state,
                searchs:action.searchs,
            }
        default:
            return state;
    }

};

export default filterReducer;