import { ADDED, DELETED, EDITED, LOADED } from "./actionType"

export const loaded = (product) => {
    return {
        type: LOADED,
        payload: product,
    }

}
export const added = (name, author, thumbnail, price, rating, featured) => {
    return {
        type: ADDED,
        payload: {
            name, author, thumbnail, price, rating, featured,
        }
    }

}
export const deleted = (id) => {
    return {
        type: DELETED,
        payload: id,
    }

}
export const edited = (name, author, thumbnail, price, rating, featured, id) => {
    return {
        type: EDITED,
        payload: {
            name, author, thumbnail, price, rating, featured, id
        }
    }

}