import React, { useState, useEffect } from 'react';
import '../assets/style/global.css'
import '../assets/style/category/category.css'
import {useNavigate, useSearchParams} from "react-router-dom";
import {CATEGORY_TYPE, CategoryType, VALID_CATEGORIES} from '../data/models/categoryType';
import Rating from "../components/rating";
import {GetRandomNumber} from "../utils/MathUtils";
import LoadingSpinner from "../components/LoadingSpinner"; // You'll need to create this component

interface Book {
    is_public: boolean;
    image_url: string;
    image_path: string;
    book_name: string;
    author: string;
    price: number;
}

function Category() {

    const [searchParams] = useSearchParams();
    const type: CategoryType = VALID_CATEGORIES[searchParams.get("type") as CategoryType] || CATEGORY_TYPE.ALL;
    const navigate = useNavigate();

    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);

    //Faking the book loading..., I made it so please look at it..
    const loadBooks = async () => {
        setLoading(true);
        try {
            let selectedBooks;
            switch (type) {
                case CATEGORY_TYPE.FICTION:
                    selectedBooks = await import('../data/books/fiction.json');
                    break;
                case CATEGORY_TYPE.ROMANCE:
                    selectedBooks = await import('../data/books/romance.json');
                    break;
                case CATEGORY_TYPE.THRILLER:
                    selectedBooks = await import('../data/books/thriller.json');
                    break;
                case CATEGORY_TYPE.CLASSIC:
                    selectedBooks = await import('../data/books/classic.json');
                    break;
                case CATEGORY_TYPE.ALL:
                default:
                    const fiction = await import('../data/books/fiction.json');
                    const romance = await import('../data/books/romance.json');
                    const thriller = await import('../data/books/thriller.json');
                    const classic = await import('../data/books/classic.json');
                    selectedBooks = {  default: [...fiction.default, ...romance.default, ...thriller.default, ...classic.default] };
                    break;
            }

            await new Promise(resolve => setTimeout(resolve, 200));

            setBooks(selectedBooks.default);
        } catch (error) {
            console.error("Error loading books:", error);
            setBooks([]);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        loadBooks();
    }, [type]);

    return(
        <div className="category-container">
            <div className="category-scroll">
                {Object.entries(CATEGORY_TYPE).map(([key, value]) => (
                    <div className="container" key={key}>
                        <button
                            className={`category-button ${type === value ? "active" : ""}`}
                            onClick={() => navigate(`?type=${value}`)}
                        >
                            {key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}
                        </button>
                        <div className={`${type === value ? "divider-selected" : "divider-none"}`}></div>
                    </div>
                ))}
            </div>

            {loading ? (
                <div className="loading-container">
                    <LoadingSpinner />
                    <p className="home-book-title">Loading books...</p>
                </div>
            ) : (
                <div className="book_grid">
                    {books.map((book, index) => (
                        <div
                            key={index}
                            className="grid_item"
                            style={{ animationDelay: `${index * 0.03}s` }}
                        >
                            <div className="cat-book-cover">
                                <img src={`/${book.image_path}`} width="100%" height="100%" alt='book_image'></img>
                                <p>$ {book.price.toFixed(2)}</p>
                                {book.is_public ? <button className="add-cart-button read-now">Read Now</button> : <></> }
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
            )}
        </div>
    );
}

export default Category;