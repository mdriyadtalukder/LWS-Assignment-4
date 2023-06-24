import { ADDED, DELETED, EDITED, LOADED } from "./actionType";

const initialState = [];
const maxId = (products) => {

    const maxId = products.reduce((maxid, product) => Math.max(product.id, maxid), -1);
    return maxId + 1;
}
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADED:
            return action.payload;

        case ADDED:

            return [
                ...state, {
                    id: maxId(state),
                    name: action.payload.name,
                    author: action.payload.author,
                    thumbnail: action.payload.thumbnail,
                    price: action.payload.price,
                    rating: action.payload.rating,
                    featured: action.payload.featured,
                }
            ]
        case EDITED:
            const edited = state.map((p) => {
                if (p.id === action.payload.id) {
                    return {
                        ...p,
                        name: action.payload.name,
                        author: action.payload.author,
                        thumbnail: action.payload.thumbnail,
                        price: action.payload.price,
                        rating: action.payload.rating,
                        featured: action.payload.featured,
                    }

                }
                else {
                    return p;
                }
            })
            return edited;

        case DELETED:
            const deleted = state.filter((p) => p.id !== action.payload);
            return deleted
        default:
            return state;
    }

};

export default productReducer;