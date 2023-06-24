import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import editData from '../redux/product/thunk/editData';

const EditForm = ({ Item, setAddForm, setEditForm }) => {
    const { name, author, thumbnail, price, rating, featured, id } = Item;
    console.log(Item.price)
    const names = useRef('');
    const authors = useRef('');
    const thumbnails = useRef('');
    const prices = useRef('');
    const ratings = useRef('');
    const dispatch = useDispatch();

    const [check, setCheck] = useState(false);
    const [check2, setCheck2] = useState(true);
    const clicks = () => {
        setCheck(!check)
    }

    //for true
    const clicks2 = () => {
        setCheck2(!check2)
    }
    console.log(check);
    console.log(check2);
    const editProducts = (event) => {
        event.preventDefault();
        if (featured) {
            dispatch(editData(names.current.value, authors.current.value, thumbnails.current.value, prices.current.value, ratings.current.value, check2, id));
            event.target.reset();
            setEditForm(false);
            setAddForm(true);
            setCheck2(true);
        }
        else {
            dispatch(editData(names.current.value, authors.current.value, thumbnails.current.value, prices.current.value, ratings.current.value, check, id));
            event.target.reset();
            setEditForm(false);
            setAddForm(true);
            setCheck(false);
        }
    }

    return (
        <div class="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
            <h4 class="mb-8 text-xl font-bold text-center">Update This Book</h4>
            <form onSubmit={editProducts} class="book-form">
                <div class="space-y-2">
                    <label for="name">Book Name</label>
                    <input ref={names} defaultValue={name} required class="text-input" type="text" id="input-Bookname" name="name" />
                </div>

                <div class="space-y-2">
                    <label for="category">Author</label>
                    <input ref={authors} defaultValue={author} required class="text-input" type="text" id="input-Bookauthor" name="author" />
                </div>

                <div class="space-y-2">
                    <label for="image">Image Url</label>
                    <input ref={thumbnails} defaultValue={thumbnail} required class="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" />
                </div>

                <div class="grid grid-cols-2 gap-8 pb-4">
                    <div class="space-y-2">
                        <label for="price">Price</label>
                        <input ref={prices} defaultValue={price} required class="text-input" type="number" id="input-Bookprice" name="price" />
                    </div>

                    <div class="space-y-2">
                        <label for="quantity">Rating</label>
                        <input ref={ratings} defaultValue={rating} required class="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" />
                    </div>
                </div>

                <div class="flex items-center">
                    <input onClick={featured ? clicks2 : clicks} defaultChecked={featured && true} id="input-Bookfeatured" type="checkbox" name="featured" class="w-4 h-4" />
                    <label for="featured" class="ml-2 text-sm"> This is a featured book </label>
                </div>

                <button type="submit" class="submit" id="submit">Update This Book</button>
            </form>
        </div>
    );
};

export default EditForm;