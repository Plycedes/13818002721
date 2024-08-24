import React from "react";
import { useState } from "react";
import axios from "axios";

function AllProducts() {
    const [company, setCompany] = useState("");
    const [number, setNumber] = useState("");
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    const [category, setCategory] = useState("");

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await axios.get(`/categories/${category}`, {
                companyname: company,
                n: number,
                minPrice: min,
                maxPrice: max,
            });
            if (response) {
                setProducts(response.data);
            }
        } catch (error) {}
    };

    return (
        <div className="flex flex-wrap gap-y-5">
            <div>
                <form onSubmit="" className="flex">
                    <input
                        type="text"
                        placeholder="Company Inititals"
                        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Category"
                        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Number of results per page"
                        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Minimum Price"
                        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                        value={min}
                        onChange={(e) => setMin(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Max Price"
                        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                        value={max}
                        onChange={(e) => setMax(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
                    >
                        Search
                    </button>
                </form>
            </div>
            <div className="flex flex-wrap gap-y-3">
                {products && (
                    <div>
                        <ul className="">
                            {products.map((product) => (
                                <div key={product.productName} className="w-full">
                                    <l1>
                                        <div>
                                            <label>Product Name: </label>
                                            <label>{product.name}</label>
                                        </div>
                                    </l1>
                                    <l1>
                                        <div>
                                            <label>Price: </label>
                                            <label>{product.price}</label>
                                        </div>
                                    </l1>
                                    <l1>
                                        <div>
                                            <label>Rating: </label>
                                            <label>{product.rating}</label>
                                        </div>
                                    </l1>
                                    <l1>
                                        <div>
                                            <label>Discount: </label>
                                            <label>{product.discount}</label>
                                        </div>
                                    </l1>
                                    <l1>
                                        <div>
                                            <label>Availability: </label>
                                            <label>{product.availability}</label>
                                        </div>
                                    </l1>
                                </div>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AllProducts;
