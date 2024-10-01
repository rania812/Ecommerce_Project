import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img
                        src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                    <button>
                        <Link className="link" to="/products/1">
                            Sale
                        </Link>
                    </button>
                </div>
                <div className="row">
                    <img
                        src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                    <button>
                        <Link to="/category/women" className="link">
                            Women
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    {" "}
                    <img
                        src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                    <button>
                        <Link to="/products/1" className="link">
                            New Season
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img
                                src="https://thrills.co/cdn/shop/collections/A007513-R1-29-30_acd0a6e7-83e1-42c7-8151-693941b06745.JPG?v=1693527746&width=2333"
                                alt=""
                            />
                            <button>
                                <Link to="/products/1" className="link">
                                    Men
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            {" "}
                            <img
                                src="https://cdn1.visiofactory.com/modules/visiofactorycategoriespush/img/top/27.jpg?ver=d41d8cd98f00b204e9800998ecf8427e"
                                alt=""
                            />
                            <button>
                                <Link to="/products/1" className="link">
                                    Accessories
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img
                        src="https://m.media-amazon.com/images/I/71XJhvvA0XL.jpg"
                        alt=""
                    width="10px"/>
                    <button>
                        <Link to="/category/ShoesProd" className="link">
                            Shoes
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Category;