import { added } from "../action";

const addData = (name, author, thumbnail, price, rating, featured) => {
    return async (dispatch) => {
        const response = await fetch("http://localhost:9000/books", {
            method: "POST",
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
            },
        });
        const datas = await response.json();
        dispatch(added(datas.name, datas.author, datas.thumbnail, datas.price, datas.rating, datas.featured));
    }
}
export default addData;