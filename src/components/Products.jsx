import React, { useEffect, useState } from 'react';
import Product from './Product';
import AddForm from './AddForm';
import { useDispatch, useSelector } from 'react-redux';
import EditForm from './EditForm';
import { filtering } from '../redux/filters/action';
import fetchData from '../redux/product/thunk/fetchData';

const Products = () => {
    const products = useSelector((state) => state.products);
    const [addForm, setAddForm] = useState(true);
    const [editForm, setEditForm] = useState(false);
    const [Item, setItem] = useState([]);
    const filterings = useSelector((state) => state.filters);
    console.log(filterings.statuss)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData);
    }, [dispatch])


    const editt = (p) => {
        setAddForm(false);
        setEditForm(true);
        setItem(p);

    }
    const filters = (statuss) => {
        dispatch(filtering(statuss));
    }
    return (
        <div class="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
            <div class="order-2 xl:-order-1">
                <div class="flex items-center justify-between mb-12">
                    <h4 class="mt-2 text-xl font-bold">Book List</h4>

                    <div class="flex items-center space-x-4">
                        <button class={`filter-btn  ${filterings.statuss == "All" && "active-filter"} `} onClick={() => filters("All")} id="lws-filterAll">All</button>
                        <button class={`filter-btn ${filterings.statuss == "Featured" && "active-filter"} `} id="lws-filterFeatured" onClick={() => filters("Featured")}>Featured</button>
                    </div>
                </div>
                <div class="p1">
                    {
                        products.filter((product) => {
                            console.log(filterings.searchs);
                            if (filterings.searchs) {
                                return product.author.toLowerCase().includes(filterings.searchs.toLowerCase());
                            }
                            else {
                                return true;
                            }

                        })
                            .filter((product) => {
                                if (filterings.statuss == "Featured") {
                                    return product.featured;
                                }
                                else {
                                    return true;
                                }
                            })
                            .map((product) => <Product editt={editt} product={product} key={product.id}></Product>)
                    }
                </div>
            </div>
            <div>
                <div style={{ display: addForm ? "block" : "none" }}>
                    <AddForm></AddForm>
                </div>
                <div style={{ display: editForm ? "block" : "none" }}>
                    <EditForm Item={Item} setAddForm={setAddForm} setEditForm={setEditForm}></EditForm>
                </div>
            </div>

        </div>
    );
};

export default Products;