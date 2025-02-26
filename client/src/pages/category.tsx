import React from 'react';
import '../assets/style/global.css'
import '../assets/style/category.css'
import FictionBooks from '../data/books/fiction.json'
import RomanceBooks from '../data/books/romance.json'

import {useSearchParams} from "react-router-dom";
import {CATEGORY_TYPE, CategoryType, VALID_CATEGORIES} from '../data/models/categoryType';
import Rating from "../components/rating";
import {GetRandomNumber} from "../utils/MathUtils";

function Category() {

    const [searchParams] = useSearchParams();
    const type: CategoryType = VALID_CATEGORIES[searchParams.get("type") as CategoryType] || CATEGORY_TYPE.ALL;

    let selectedBooks;
    switch (type) {
        case CATEGORY_TYPE.FICTION:
            selectedBooks = FictionBooks;
            break;
        case CATEGORY_TYPE.ROMANCE:
            selectedBooks = RomanceBooks;
            break;
        case CATEGORY_TYPE.ALL:
        default:
            selectedBooks = [...FictionBooks, ...RomanceBooks]; // Show all books if type is "all" or invalid
            break;
    }

    return(
        <div className="book_grid">
            {selectedBooks.map((book, index) => (
                <div key={index} className="grid_item">
                    <div className="cat-book-cover">
                        <img src={`/${book.image_path}`} width="100%" height="100%" alt='book_image'></img>
                        <p>{book.price}</p>
                    </div>
                    <p className="home-book-title">{book.book_name}</p>
                    <div className="container-row">
                        <p className="home-book-by">by</p>
                        <p className="home-book-author">{book.author}</p>
                    </div>
                    <Rating total={GetRandomNumber(4,5)}/>
                    <button className="add-cart-button">
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Category