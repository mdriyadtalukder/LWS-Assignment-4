import { edited } from "../action";

const editData = (name, author, thumbnail, price, rating, featured, id) => {
    return async (dispatch) => {
        const response = await fetch(`http://localhost:9000/books/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                name: name,
                author: author,
                thumbnail: thumbnail,
                price: price,
                rating: rating,
                featured: featured,
            }),
            headers: {
                "Content-type": "application/json ; charset=UTF-8"
            }
        })
        const datas = await response.json();
        dispatch(edited(datas.name, datas.author, datas.thumbnail, datas.price, datas.rating, featured, datas.id))

    }
}
export default editData;