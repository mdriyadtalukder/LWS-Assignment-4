import { FILTERING, SEARCHING } from "./actionType"

export const filtering = (statuss) => {
    return {
        type: FILTERING,
        statuss: statuss,
    }
}
export const searches = (searchs) => {
    return {
        type: SEARCHING,
        searchs: searchs,
    }
}