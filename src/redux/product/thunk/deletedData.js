import { deleted } from "../action"

const deletedData = (id) => {
    return async (dispatch) => {
        await fetch(`http://localhost:9000/books/${id}`, {
            method: "DELETE",
        })
        dispatch(deleted(id))
    }
}
export default deletedData;