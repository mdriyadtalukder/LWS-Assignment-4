import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import addData from '../redux/product/thunk/addData';

const AddForm = () => {
    const [check, setCheck] = useState(false);
    const name = useRef('');
    const author = useRef('');
    const thumbnail = useRef('');
    const price = useRef('');
    const rating = useRef('');
    const dispatch = useDispatch();

    const clicks = () => {
        setCheck(!check)
    }

    const addProduct = (event) => {
        event.preventDefault();
        dispatch(addData(name.current.value, author.current.value, thumbnail.current.value, price.current.value, rating.current.value, check));
        event.target.reset();
        setCheck(false)
    }

    return (
        <div class="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
            <h4 class="mb-8 text-xl font-bold text-center">Add New Book</h4>
            <form onSubmit={addProduct} class="book-form">
                <div class="space-y-2">
                    <label for="name">Book Name</label>
                    <input ref={name} required class="text-input" type="text" id="input-Bookname" name="name" />
                </div>

                <div class="space-y-2">
                    <label for="category">Author</label>
                    <input ref={author} required class="text-input" type="text" id="input-Bookauthor" name="author" />
                </div>

                <div class="space-y-2">
                    <label for="image">Image Url</label>
                    <input ref={thumbnail} required class="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" />
                </div>

                <div class="grid grid-cols-2 gap-8 pb-4">
                    <div class="space-y-2">
                        <label for="price">Price</label>
                        <input ref={price} required class="text-input" type="number" id="input-Bookprice" name="price" />
                    </div>

                    <div class="space-y-2">
                        <label for="quantity">Rating</label>
                        <input ref={rating} required class="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" />
                    </div>
                </div>

                <div class="flex items-center">
                    <input onClick={clicks} id="input-Bookfeatured" type="checkbox" name="featured" class="w-4 h-4" />
                    <label for="featured" class="ml-2 text-sm"> This is a featured book </label>
                </div>

                <button type="submit" class="submit" id="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddForm;